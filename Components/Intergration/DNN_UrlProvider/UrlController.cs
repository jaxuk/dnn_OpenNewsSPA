using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Urls;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using DotNetNuke.Entities.Tabs;
using YeditUK.Modules.dnn_OpenNews.Components.Intergration.DNN_UrlProvider.Entities;

namespace YeditUK.Modules.dnn_OpenNews.Components.Intergration.DNN_UrlProvider
{
  internal static class UrlController
  {
    private const string FriendlyUrlIndexKey = "OpenNews_Urls_Tab{0}";
    private const string QueryStringIndexKey = "OpenNews_QueryString_Tab{0}";

    /// <summary>
    /// Creates a friendly article url, depending on the options
    /// </summary>
    /// <param name="provider"></param>
    /// <param name="articleUrlMatch"></param>
    /// <param name="articleUrlRegex"></param>
    /// <param name="friendlyUrlPath"></param>
    /// <param name="tab"></param>
    /// <param name="options"></param>
    /// <param name="urlOptions"></param>
    /// <param name="cultureCode"></param>
    /// <param name="endingPageName"></param>
    /// <param name="useDnnPagePath"></param>
    /// <param name="messages"></param>
    /// <param name="articleUrl"></param>
    /// <returns></returns>
    internal static bool MakeArticleUrl(UrlProvider provider, Match articleUrlMatch, Regex articleUrlRegex, string friendlyUrlPath, DotNetNuke.Entities.Tabs.TabInfo tab, FriendlyUrlOptions options, ModuleUrlOptions urlOptions, string cultureCode, ref string endingPageName, ref bool useDnnPagePath, ref List<string> messages, out string articleUrl)
    {
      bool result = false;
      articleUrl = null;
      //this is a url that looks like an article url.  We want to modify it and create the new one.
      string rawId = articleUrlMatch.Groups["artid"].Value;
      int articleId = 0;
      if (int.TryParse(rawId, out articleId))
      {
        Hashtable friendlyUrlIndex = null; //the friendly url index is the lookup we use
                                           //we have obtained the item Id out of the Url
                                           //get the friendlyUrlIndex (it comes from the database via the cache)
        friendlyUrlIndex = UrlController.GetFriendlyUrlIndex(tab.TabID, tab.PortalID, provider, options, urlOptions);
        if (friendlyUrlIndex != null)
        {
          string furlkey = null; int pageId = -1;
          //first check if we are seeking page or article
          if (articleUrlMatch.Groups["pageid"].Success)
          {
            //page item urls are index by p + page id.  But we only use this if it is present
            //ie pages override articles when both are present
            string rawPageId = articleUrlMatch.Groups["pageid"].Value;
            if (int.TryParse(rawPageId, out pageId))
              furlkey = "p" + rawPageId;
          }
          else
            //item urls are indexed with a + articleId ("a5") - this is so we could mix and match entities if necessary
            furlkey = "a" + articleId.ToString();  //create the lookup key for the friendly url index

          string path = (string)friendlyUrlIndex[furlkey];//check if in the index
          if (path == null)
          {
            //don't normally expect to have a no-match with a friendly url path when an articleId was in the Url.
            //could be that the page id is bunk - in that case, just use the article Id
            if (furlkey.Contains("p"))
            {
              furlkey = "a" + articleId.ToString();  //create the lookup key for the friendly url index
              path = (string)friendlyUrlIndex[furlkey];//check if in the index
            }
            if (path == null)
            {
              //could be a new item that has been created and isn't in the index
              //do a direct call and find out if it's there
              path = UrlController.CheckForMissingNewsArticleItem(articleId, "article", tab.TabID, tab.PortalID, provider, options, urlOptions, ref messages);
            }
          }
          if (path != null) //got a valid path
          {
            //url found in the index for this entry.  So replace the matched part of the path with the friendly url
            if (articleUrlMatch.Groups["l"].Success) //if the path had a leading /, then make sure to add that onto the replacement
              path = provider.EnsureLeadingChar("/", path);

            /* finish it all off */
            messages.Add("Item Friendly Url Replacing : " + friendlyUrlPath + " in Path : " + path);

            //this is the point where the Url is modified!
            //replace the path in the path - which leaves any other parts of a path intact.
            articleUrl = articleUrlRegex.Replace(friendlyUrlPath, path);//replace the part in the friendly Url path with it's replacement.

            //check if this tab is the one specified to not use a path
            //if (provider.NoDnnPagePathTabId == tab.TabID)
            //  useDnnPagePath = false;//make this Url relative from the site root

            //set back to default.aspx so that Url Master removes it - just in case it wasn't standard
            endingPageName = DotNetNuke.Common.Globals.glbDefaultPage;

            result = true;
          }
        }
      }
      return result;
    }

    /// <summary>
    /// Checks for, and adds to the indexes, a missing item.
    /// </summary>
    /// <param name="itemId"></param>
    /// <param name="tabId"></param>
    /// <param name="portalId"></param>
    /// <param name="provider"></param>
    /// <param name="options"></param>
    /// <param name="messages"></param>
    /// <returns>Valid path if found</returns>
    internal static string CheckForMissingNewsArticleItem(int itemId, string itemType, int tabId, int portalId, UrlProvider provider, FriendlyUrlOptions options, ModuleUrlOptions urlOptions, ref List<string> messages)
    {
      string path = null;
      FriendlyUrlInfo friendlyUrl = Data.UrlDataController.GetNewsArticleItem(itemId, itemType, urlOptions, tabId);
      messages.Add("articleId not found : " + itemId.ToString() + " Checking Item directly");
      if (friendlyUrl != null)
      {
        messages.Add("articleId found : " + itemId.ToString() + " Rebuilding indexes");
        //call and get the path
        path = UrlController.MakeItemFriendlyUrl(friendlyUrl, provider, options, urlOptions);
        //so this entry did exist but wasn't in the index.  Rebuild the index
        UrlController.RebuildIndexes(tabId, portalId, provider, options, urlOptions);
      }
      return path;
    }

    private static void RebuildIndexes(int tabID, int portalID, UrlProvider provider, FriendlyUrlOptions options, ModuleUrlOptions urlOptions)
    {
      Hashtable queryStringIndex = null;
      Hashtable friendlyUrlIndex = null;
      string qsCacheKey = GetQueryStringIndexCacheKeyForTab(tabID);
      string furlCacheKey = GetFriendlyUrlIndexKeyForTab(tabID);
      //build index for tab
      BuildUrlIndexes(tabID, portalID, provider, options, urlOptions, out friendlyUrlIndex, out queryStringIndex);
      StoreIndexes(friendlyUrlIndex, furlCacheKey, queryStringIndex, qsCacheKey);
    }

    internal static bool MakeCategoryUrl(UrlProvider provider, Match categoryUrlMatch, Regex categoryUrlRegex, string friendlyUrlPath, TabInfo tab, FriendlyUrlOptions options, ModuleUrlOptions urlOptions, string cultureCode, ref string endingPageName, ref bool useDnnPagePath, ref List<string> messages, out string categoryUrl)
    {
      bool result = false;
      categoryUrl = null;
      //this is a url that looks like an category url.  We want to modify it and create the new one.
      string rawId = categoryUrlMatch.Groups["catid"].Value;
      int categoryId = 0;
      if (int.TryParse(rawId, out categoryId))
      {
        Hashtable friendlyUrlIndex = null; //the friendly url index is the lookup we use
                                           //we have obtained the item Id out of the Url
                                           //get the friendlyUrlIndex (it comes from the database via the cache)
        friendlyUrlIndex = UrlController.GetFriendlyUrlIndex(tab.TabID, tab.PortalID, provider, options, urlOptions);
        if (friendlyUrlIndex != null)
        {
          //item urls are indexed with a + category id ("c5") - this is so authors/articles/categories can be mixed and matched
          string furlkey = "c" + categoryId.ToString();  //create the lookup key for the friendly url index
          string path = (string)friendlyUrlIndex[furlkey];//check if in the index
          if (path == null)
          {
            //don't normally expect to have a no-match with a friendly url path when an categoryId was in the Url.
            //could be a new item that has been created and isn't in the index
            //do a direct call and find out if it's there
            //path = UrlController.CheckForMissingNewscategoryItem(categoryId, "category", tab.TabID, tab.PortalID, provider, options, urlOptions, ref messages);
          }
          if (path != null) //got a valid path
          {
            //url found in the index for this entry.  So replace the matched part of the path with the friendly url
            if (categoryUrlMatch.Groups["l"].Success) //if the path had a leading /, then make sure to add that onto the replacement
              path = provider.EnsureLeadingChar("/", path);

            /* finish it all off */
            messages.Add("Item Friendly Url Replacing : " + friendlyUrlPath + " in Path : " + path);

            //this is the point where the Url is modified!
            //replace the path in the path - which leaves any other parts of a path intact.
            categoryUrl = categoryUrlRegex.Replace(friendlyUrlPath, path);//replace the part in the friendly Url path with it's replacement.

            //check if this tab is the one specified to not use a path
            if (urlOptions.RemovePagePathFromURL)
              useDnnPagePath = false;//make this Url relative from the site root

            //set back to default.aspx so that Url Master removes it - just in case it wasn't standard
            endingPageName = DotNetNuke.Common.Globals.glbDefaultPage;

            result = true;
          }
        }
      }
      return result;
    }

    private static void StoreIndexes(Hashtable friendlyUrlIndex, string friendlyUrlCacheKey, Hashtable queryStringIndex, string queryStringCacheKey)
    {
      TimeSpan expire = new TimeSpan(24, 0, 0);
      DataCache.SetCache(friendlyUrlCacheKey, friendlyUrlIndex, expire);
      DataCache.SetCache(queryStringCacheKey, queryStringIndex, expire);
    }

    private static void BuildUrlIndexes(int tabID, int portalID, UrlProvider provider, FriendlyUrlOptions options, ModuleUrlOptions urlOptions, out Hashtable friendlyUrlIndex, out Hashtable queryStringIndex)
    {
      friendlyUrlIndex = new Hashtable();
      queryStringIndex = new Hashtable();
      //call database procedure to get list of 
      List<FriendlyUrlInfo> itemUrls = null;
      if (tabID > 0 && portalID > -1) {
        itemUrls = Data.UrlDataController.GetEverythingForProvider(tabID);
        if (itemUrls.Count > 0) {
          foreach (FriendlyUrlInfo f in itemUrls) {
            string furlKey = f.FUrlKey;
            //querystring index - look up by url, find querystring for the item
            string furlValue = MakeItemFriendlyUrl(f, provider, options, urlOptions);
            string qsKey = furlValue.ToLower();//the querystring lookup is the friendly Url value - but converted to lower case

            //string qsValue = null;
            string itemId = f.itemId.ToString();
            string parentId = f.parentId.ToString();
            if (urlOptions.RemovePagePathFromURL)
              f.qsValue = "?TabId=" + tabID.ToString() + f.qsValue;
            string suffix = "";
            AddUniqueUrlToIndex(furlKey, ref qsKey, f.qsValue, portalID, queryStringIndex, options, true, out suffix);

            //if the suffix for the qsKey was changed, we need to add it to the friendly url used for the friendly url index
            furlValue += suffix;

            //friendly url index - look up by entryid, find Url
            //check to see if friendly url matches any page paths
            if (friendlyUrlIndex.ContainsKey(furlKey) == false)//shouldn't return duplicate because content is controlled by module logic
              friendlyUrlIndex.Add(furlKey, furlValue);

            //if the options aren't standard, also add in some other versions that will identify the right entry but will get redirected
            if (options.PunctuationReplacement != "")
            {
              FriendlyUrlOptions altOptions = options.Clone();
              altOptions.PunctuationReplacement = "";//how the urls look with no replacement
              string altQsKey = MakeItemFriendlyUrl(f, provider, altOptions, urlOptions).ToLower();//keys are always lowercase
              string altQsValue = f.qsValue + "&do301=true&&rr=Title_Space_Replacement";
              AddUniqueUrlToIndex(furlKey, ref altQsKey, altQsValue, portalID, queryStringIndex, options, false, out suffix);
            }
          }
        }
      }
    }

    
    private static void AddUniqueUrlToIndex(string furlKey, ref string qsKey, string qsValue, int portalID, Hashtable queryStringIndex, FriendlyUrlOptions options, bool addSuffixIfDuplicateFound, out string suffix)
    {
      DotNetNuke.Entities.Tabs.TabController tc = new DotNetNuke.Entities.Tabs.TabController();
      bool duplicate = false;
      suffix = "";//can hold a de-duplicating suffix
      int suffixCounter = 1;
      bool furlKeyUsed = false;
      do
      {
        duplicate = false;//always start in the assumption that this is not a duplicate
        DotNetNuke.Entities.Tabs.TabInfo matchingTab = tc.GetTabByName(qsKey, portalID);
        if (matchingTab != null)
          duplicate = true;
        else
            if (portalID >= 0)
        {
          matchingTab = tc.GetTabByName(qsKey, -1);//host tabs
          if (matchingTab != null)
            duplicate = true;
        }

        if (duplicate == false)
        {
          //try and add to index
          if (queryStringIndex.ContainsKey(qsKey) == false)
            queryStringIndex.Add(qsKey, qsValue);
          else
            duplicate = true;
        }
        if (duplicate == true)
        {
          if (furlKeyUsed == false)
          {
            furlKeyUsed = true;
            suffix = options.PunctuationReplacement + furlKey;
            qsKey += suffix;
          }
          else
          {
            suffix += suffixCounter.ToString();
            qsKey += suffix;
          }
        }
      }
      while (duplicate == true && addSuffixIfDuplicateFound == true);
    }

    private static string MakeItemFriendlyUrl(FriendlyUrlInfo vl, UrlProvider provider, FriendlyUrlOptions options, ModuleUrlOptions urlOptions)
    {
      string result = "";
      result = provider.CleanNameForUrl((vl.urlFragment), options);
      return result;
    }

    
    public static Hashtable GetFriendlyUrlIndex(int tabID, int portalID, UrlProvider provider, FriendlyUrlOptions options, ModuleUrlOptions urlOptions)
    {
      string furlCacheKey = GetFriendlyUrlIndexKeyForTab(tabID);
      Hashtable friendlyUrlIndex = DataCache.GetCache<Hashtable>(furlCacheKey);
      if (friendlyUrlIndex == null)
      {
        string qsCacheKey = GetQueryStringIndexCacheKeyForTab(tabID);
        Hashtable queryStringIndex = null;
        //build index for tab
        BuildUrlIndexes(tabID, portalID, provider, options, urlOptions, out friendlyUrlIndex, out queryStringIndex);
        StoreIndexes(friendlyUrlIndex, furlCacheKey, queryStringIndex, qsCacheKey);
      }
      return friendlyUrlIndex;
    }
    private static string GetFriendlyUrlIndexKeyForTab(int tabId)
    {
      return string.Format(FriendlyUrlIndexKey, tabId);
    }
    private static string GetQueryStringIndexCacheKeyForTab(int tabId)
    {
      return string.Format(QueryStringIndexKey, tabId);
    }

    internal static Hashtable GetQueryStringIndex(int tabId, int portalId, UrlProvider provider, FriendlyUrlOptions options, ModuleUrlOptions urlOptions, bool forceRebuild)
    {
      string qsCacheKey = GetQueryStringIndexCacheKeyForTab(tabId);
      Hashtable queryStringIndex = DataCache.GetCache<Hashtable>(qsCacheKey);
      if (queryStringIndex == null || forceRebuild)
      {
        string furlCacheKey = GetFriendlyUrlIndexKeyForTab(tabId);
        Hashtable friendlyUrlIndex = null;
        //build index for tab
        BuildUrlIndexes(tabId, portalId, provider, options, urlOptions, out friendlyUrlIndex, out queryStringIndex);
        StoreIndexes(friendlyUrlIndex, furlCacheKey, queryStringIndex, qsCacheKey);
      }
      return queryStringIndex;
    }
  }
}