/*
' Copyright (c) 2017 yedit.co.uk
'  All rights reserved.
' 
' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
' TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
' THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
' CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
' DEALINGS IN THE SOFTWARE.
' 
*/

using System.Collections.Generic;
//using System.Xml;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Services.Search;

namespace YeditUK.Modules.dnn_OpenNews.Components
{

  /// -----------------------------------------------------------------------------
  /// <summary>
  /// The Controller class for dnn_OpenNewsSPA
  /// 
  /// The FeatureController class is defined as the BusinessController in the manifest file (.dnn)
  /// DotNetNuke will poll this class to find out which Interfaces the class implements. 
  /// 
  /// The IPortable interface is used to import/export content from a DNN module
  /// 
  /// The ISearchable interface is used by DNN to index the content of a module
  /// 
  /// The IUpgradeable interface allows module developers to execute code during the upgrade 
  /// process for a module.
  /// 
  /// Below you will find stubbed out implementations of each, uncomment and populate with your own data
  /// </summary>
  /// -----------------------------------------------------------------------------

  //uncomment the interfaces to add the support.
  public class FeatureController //: IPortable, ISearchable, IUpgradeable
  {


    #region Optional Interfaces

    /// -----------------------------------------------------------------------------
    /// <summary>
    /// ExportModule implements the IPortable ExportModule Interface
    /// </summary>
    /// <param name="ModuleID">The Id of the module to be exported</param>
    /// -----------------------------------------------------------------------------
    //public string ExportModule(int ModuleID)
    //{
    //string strXML = "";

    //List<dnn_OpenNewsSPAInfo> coldnn_OpenNewsSPAs = Getdnn_OpenNewsSPAs(ModuleID);
    //if (coldnn_OpenNewsSPAs.Count != 0)
    //{
    //    strXML += "<dnn_OpenNewsSPAs>";

    //    foreach (dnn_OpenNewsSPAInfo objdnn_OpenNewsSPA in coldnn_OpenNewsSPAs)
    //    {
    //        strXML += "<dnn_OpenNewsSPA>";
    //        strXML += "<content>" + DotNetNuke.Common.Utilities.XmlUtils.XMLEncode(objdnn_OpenNewsSPA.Content) + "</content>";
    //        strXML += "</dnn_OpenNewsSPA>";
    //    }
    //    strXML += "</dnn_OpenNewsSPAs>";
    //}

    //return strXML;

    //	throw new System.NotImplementedException("The method or operation is not implemented.");
    //}

    /// -----------------------------------------------------------------------------
    /// <summary>
    /// ImportModule implements the IPortable ImportModule Interface
    /// </summary>
    /// <param name="ModuleID">The Id of the module to be imported</param>
    /// <param name="Content">The content to be imported</param>
    /// <param name="Version">The version of the module to be imported</param>
    /// <param name="UserId">The Id of the user performing the import</param>
    /// -----------------------------------------------------------------------------
    //public void ImportModule(int ModuleID, string Content, string Version, int UserID)
    //{
    //XmlNode xmldnn_OpenNewsSPAs = DotNetNuke.Common.Globals.GetContent(Content, "dnn_OpenNewsSPAs");
    //foreach (XmlNode xmldnn_OpenNewsSPA in xmldnn_OpenNewsSPAs.SelectNodes("dnn_OpenNewsSPA"))
    //{
    //    dnn_OpenNewsSPAInfo objdnn_OpenNewsSPA = new dnn_OpenNewsSPAInfo();
    //    objdnn_OpenNewsSPA.ModuleId = ModuleID;
    //    objdnn_OpenNewsSPA.Content = xmldnn_OpenNewsSPA.SelectSingleNode("content").InnerText;
    //    objdnn_OpenNewsSPA.CreatedByUser = UserID;
    //    Adddnn_OpenNewsSPA(objdnn_OpenNewsSPA);
    //}

    //	throw new System.NotImplementedException("The method or operation is not implemented.");
    //}

    /// -----------------------------------------------------------------------------
    /// <summary>
    /// GetSearchItems implements the ISearchable Interface
    /// </summary>
    /// <param name="ModInfo">The ModuleInfo for the module to be Indexed</param>
    /// -----------------------------------------------------------------------------
    //public DotNetNuke.Services.Search.SearchItemInfoCollection GetSearchItems(DotNetNuke.Entities.Modules.ModuleInfo ModInfo)
    //{
    //SearchItemInfoCollection SearchItemCollection = new SearchItemInfoCollection();

    //List<dnn_OpenNewsSPAInfo> coldnn_OpenNewsSPAs = Getdnn_OpenNewsSPAs(ModInfo.ModuleID);

    //foreach (dnn_OpenNewsSPAInfo objdnn_OpenNewsSPA in coldnn_OpenNewsSPAs)
    //{
    //    SearchItemInfo SearchItem = new SearchItemInfo(ModInfo.ModuleTitle, objdnn_OpenNewsSPA.Content, objdnn_OpenNewsSPA.CreatedByUser, objdnn_OpenNewsSPA.CreatedDate, ModInfo.ModuleID, objdnn_OpenNewsSPA.ItemId.ToString(), objdnn_OpenNewsSPA.Content, "ItemId=" + objdnn_OpenNewsSPA.ItemId.ToString());
    //    SearchItemCollection.Add(SearchItem);
    //}

    //return SearchItemCollection;

    //	throw new System.NotImplementedException("The method or operation is not implemented.");
    //}

    /// -----------------------------------------------------------------------------
    /// <summary>
    /// UpgradeModule implements the IUpgradeable Interface
    /// </summary>
    /// <param name="Version">The current version of the module</param>
    /// -----------------------------------------------------------------------------
    //public string UpgradeModule(string Version)
    //{
    //	throw new System.NotImplementedException("The method or operation is not implemented.");
    //}

    #endregion

  }

}
