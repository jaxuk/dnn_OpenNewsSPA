<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Settings.ascx.cs" Inherits="YeditUK.Modules.dnn_OpenNews.Widgets.ListArticles.Settings" %>
<%@ Register TagPrefix="dnn" TagName="Skin" Src="~/controls/SkinControl.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %>
<div class="dnnForm">
  <fieldset>
    <div class="dnnFormItem">
        <dnn:Label runat="server" ControlName="ddModule" Text="Module" HelpText="Modules Articles to List" />
          <asp:DropDownList runat="server" ID="ddModule" DataValueField="ModuleID" DataTextField="ModuleTitle">
        </asp:DropDownList>
    </div>
    <div class="dnnFormItem">
        <dnn:Label runat="server" ControlName="ddSortBy" Text="Sort By" HelpText="Sort By" />
        <asp:DropDownList runat="server" ID="ddSortBy">
          <asp:ListItem Value="StartDate">Publish Date</asp:ListItem>
          <asp:ListItem Value="Title">Title</asp:ListItem>
          <asp:ListItem Value="LastUpdated">Last Updated</asp:ListItem>
        </asp:DropDownList>
    </div>
    <div class="dnnFormItem">
        <dnn:Label runat="server" ControlName="ddSortDirection" Text="Sort Direction" HelpText="Sort Direction" />
        <asp:DropDownList runat="server" ID="ddSortDirection">
          <asp:ListItem Value="ASC">Ascending</asp:ListItem>
          <asp:ListItem Value="DESC">Descending</asp:ListItem>
        </asp:DropDownList>
    </div>
    <div class="dnnFormItem">
        <dnn:Label runat="server" ControlName="txtLimitArticlesToDisplay" Text="Amount to List" HelpText="Amount of articles to List" />
        <asp:TextBox runat="server" ID="txtLimitArticlesToDisplay" CssClass="dnnFormRequired" Text="10" TextMode="Number" />
    </div>
    <div class="dnnFormItem">
        <dnn:Label runat="server" ControlName="ddTheme" Text="Theme" HelpText="Theme" />
        <asp:DropDownList runat="server" ID="ddTheme" AutoPostBack="True" OnSelectedIndexChanged="ddTheme_SelectedIndexChanged">
        </asp:DropDownList>
    </div>
    <div class="dnnFormItem">
        <dnn:Label runat="server" ControlName="ddTemplate" Text="Template" HelpText="Template" />
        <asp:DropDownList runat="server" ID="ddTemplate">
        </asp:DropDownList>
    </div>
  </fieldset>
</div>