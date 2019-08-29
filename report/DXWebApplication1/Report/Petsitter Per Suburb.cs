using System;
using System.Drawing;
using System.Collections;
using System.ComponentModel;
using DevExpress.XtraReports.UI;

/// <summary>
/// Summary description for Petsitter_Per_Suburb
/// </summary>
public class Petsitter_Per_Suburb : DevExpress.XtraReports.UI.XtraReport
{
    private DevExpress.DataAccess.Sql.SqlDataSource sqlDataSource1;
    private XRControlStyle Title;
    private XRControlStyle DetailCaption1;
    private XRControlStyle DetailData1;
    private XRControlStyle DetailData3_Odd;
    private XRControlStyle PageInfo;
    private TopMarginBand TopMargin;
    private BottomMarginBand BottomMargin;
    private XRPageInfo pageInfo1;
    private XRPageInfo pageInfo2;
    private ReportHeaderBand ReportHeader;
    private XRLabel label1;
    private GroupHeaderBand GroupHeader1;
    private XRTable table1;
    private XRTableRow tableRow1;
    private XRTableCell tableCell1;
    private XRTableCell tableCell2;
    private XRTableCell tableCell3;
    private XRTableCell tableCell4;
    private XRTableCell tableCell5;
    private DetailBand Detail;
    private XRTable table2;
    private XRTableRow tableRow2;
    private XRTableCell tableCell6;
    private XRTableCell tableCell7;
    private XRTableCell tableCell8;
    private XRTableCell tableCell9;
    private XRTableCell tableCell10;
    private DevExpress.XtraReports.Parameters.Parameter suburb;
    private XRPictureBox xrPictureBox2;
    private XRLabel xrLabel7;
    private XRPictureBox xrPictureBox1;
    private XRLabel xrLabel8;
    private XRPictureBox xrPictureBox3;
    private XRLabel xrLabel9;
    private XRPictureBox xrPictureBox4;
    private XRLabel xrLabel10;
    private XRPictureBox xrPictureBox5;
    private XRPictureBox xrPictureBox6;
    private XRPictureBox xrPictureBox7;
    private XRPictureBox xrPictureBox8;
    private XRPictureBox xrPictureBox9;
    private XRPictureBox xrPictureBox10;
    private XRPictureBox xrPictureBox11;
    private XRPictureBox xrPictureBox12;
    private XRPictureBox xrPictureBox13;
    private XRPictureBox xrPictureBox14;
    private XRPictureBox xrPictureBox15;
    private XRPictureBox xrPictureBox16;
    private XRPictureBox xrPictureBox17;
    private XRPictureBox xrPictureBox18;
    private XRPictureBox xrPictureBox19;
    private XRPictureBox xrPictureBox20;
    private XRPictureBox xrPictureBox21;
    private XRPictureBox xrPictureBox22;
    private XRPictureBox xrPictureBox23;
    private XRPictureBox xrPictureBox24;
    private XRPictureBox xrPictureBox25;
    private XRPictureBox xrPictureBox26;
    private XRPictureBox xrPictureBox27;
    private XRPictureBox xrPictureBox28;
    private XRRichText xrRichText1;

    /// <summary>
    /// Required designer variable.
    /// </summary>
    private System.ComponentModel.IContainer components = null;

    public Petsitter_Per_Suburb()
    {
        InitializeComponent();
        //
        // TODO: Add constructor logic here
        //
    }

    /// <summary> 
    /// Clean up any resources being used.
    /// </summary>
    /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
    protected override void Dispose(bool disposing)
    {
        if (disposing && (components != null))
        {
            components.Dispose();
        }
        base.Dispose(disposing);
    }

    #region Designer generated code

    /// <summary>
    /// Required method for Designer support - do not modify
    /// the contents of this method with the code editor.
    /// </summary>
    private void InitializeComponent()
    {
            this.components = new System.ComponentModel.Container();
            DevExpress.DataAccess.ConnectionParameters.MsSqlConnectionParameters msSqlConnectionParameters1 = new DevExpress.DataAccess.ConnectionParameters.MsSqlConnectionParameters();
            DevExpress.DataAccess.Sql.SelectQuery selectQuery1 = new DevExpress.DataAccess.Sql.SelectQuery();
            DevExpress.DataAccess.Sql.Column column1 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression1 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Table table3 = new DevExpress.DataAccess.Sql.Table();
            DevExpress.DataAccess.Sql.Column column2 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression2 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.SelectQuery selectQuery2 = new DevExpress.DataAccess.Sql.SelectQuery();
            DevExpress.DataAccess.Sql.Column column3 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression3 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Table table4 = new DevExpress.DataAccess.Sql.Table();
            DevExpress.DataAccess.Sql.Column column4 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression4 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.SelectQuery selectQuery3 = new DevExpress.DataAccess.Sql.SelectQuery();
            DevExpress.DataAccess.Sql.Column column5 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression5 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Table table5 = new DevExpress.DataAccess.Sql.Table();
            DevExpress.DataAccess.Sql.Column column6 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression6 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column7 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression7 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column8 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression8 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column9 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression9 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column10 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression10 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column11 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression11 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column12 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression12 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column13 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression13 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column14 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression14 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column15 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression15 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column16 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression16 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column17 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression17 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column18 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression18 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column19 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression19 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column20 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression20 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column21 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression21 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column22 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression22 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.Column column23 = new DevExpress.DataAccess.Sql.Column();
            DevExpress.DataAccess.Sql.ColumnExpression columnExpression23 = new DevExpress.DataAccess.Sql.ColumnExpression();
            DevExpress.DataAccess.Sql.MasterDetailInfo masterDetailInfo1 = new DevExpress.DataAccess.Sql.MasterDetailInfo();
            DevExpress.DataAccess.Sql.RelationColumnInfo relationColumnInfo1 = new DevExpress.DataAccess.Sql.RelationColumnInfo();
            DevExpress.DataAccess.Sql.MasterDetailInfo masterDetailInfo2 = new DevExpress.DataAccess.Sql.MasterDetailInfo();
            DevExpress.DataAccess.Sql.RelationColumnInfo relationColumnInfo2 = new DevExpress.DataAccess.Sql.RelationColumnInfo();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Petsitter_Per_Suburb));
            DevExpress.XtraReports.Parameters.DynamicListLookUpSettings dynamicListLookUpSettings1 = new DevExpress.XtraReports.Parameters.DynamicListLookUpSettings();
            this.sqlDataSource1 = new DevExpress.DataAccess.Sql.SqlDataSource(this.components);
            this.Title = new DevExpress.XtraReports.UI.XRControlStyle();
            this.DetailCaption1 = new DevExpress.XtraReports.UI.XRControlStyle();
            this.DetailData1 = new DevExpress.XtraReports.UI.XRControlStyle();
            this.DetailData3_Odd = new DevExpress.XtraReports.UI.XRControlStyle();
            this.PageInfo = new DevExpress.XtraReports.UI.XRControlStyle();
            this.TopMargin = new DevExpress.XtraReports.UI.TopMarginBand();
            this.BottomMargin = new DevExpress.XtraReports.UI.BottomMarginBand();
            this.ReportHeader = new DevExpress.XtraReports.UI.ReportHeaderBand();
            this.GroupHeader1 = new DevExpress.XtraReports.UI.GroupHeaderBand();
            this.Detail = new DevExpress.XtraReports.UI.DetailBand();
            this.pageInfo1 = new DevExpress.XtraReports.UI.XRPageInfo();
            this.pageInfo2 = new DevExpress.XtraReports.UI.XRPageInfo();
            this.label1 = new DevExpress.XtraReports.UI.XRLabel();
            this.table1 = new DevExpress.XtraReports.UI.XRTable();
            this.tableRow1 = new DevExpress.XtraReports.UI.XRTableRow();
            this.tableCell1 = new DevExpress.XtraReports.UI.XRTableCell();
            this.tableCell2 = new DevExpress.XtraReports.UI.XRTableCell();
            this.tableCell3 = new DevExpress.XtraReports.UI.XRTableCell();
            this.tableCell4 = new DevExpress.XtraReports.UI.XRTableCell();
            this.tableCell5 = new DevExpress.XtraReports.UI.XRTableCell();
            this.table2 = new DevExpress.XtraReports.UI.XRTable();
            this.tableRow2 = new DevExpress.XtraReports.UI.XRTableRow();
            this.tableCell6 = new DevExpress.XtraReports.UI.XRTableCell();
            this.tableCell7 = new DevExpress.XtraReports.UI.XRTableCell();
            this.tableCell8 = new DevExpress.XtraReports.UI.XRTableCell();
            this.tableCell9 = new DevExpress.XtraReports.UI.XRTableCell();
            this.tableCell10 = new DevExpress.XtraReports.UI.XRTableCell();
            this.suburb = new DevExpress.XtraReports.Parameters.Parameter();
            this.xrPictureBox2 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrLabel7 = new DevExpress.XtraReports.UI.XRLabel();
            this.xrPictureBox1 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrLabel8 = new DevExpress.XtraReports.UI.XRLabel();
            this.xrPictureBox3 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrLabel9 = new DevExpress.XtraReports.UI.XRLabel();
            this.xrPictureBox4 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrLabel10 = new DevExpress.XtraReports.UI.XRLabel();
            this.xrPictureBox5 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox6 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox7 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox8 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox9 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox10 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox11 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox12 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox13 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox14 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox15 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox16 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox17 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox18 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox19 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox20 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox21 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox22 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox23 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox24 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox25 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox26 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox27 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrPictureBox28 = new DevExpress.XtraReports.UI.XRPictureBox();
            this.xrRichText1 = new DevExpress.XtraReports.UI.XRRichText();
            ((System.ComponentModel.ISupportInitialize)(this.table1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.table2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.xrRichText1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this)).BeginInit();
            // 
            // sqlDataSource1
            // 
            this.sqlDataSource1.ConnectionName = "desktop-blobtuq\\sqlexpress.INF370test.dbo";
            msSqlConnectionParameters1.AuthorizationType = DevExpress.DataAccess.ConnectionParameters.MsSqlAuthorizationType.Windows;
            msSqlConnectionParameters1.DatabaseName = "INF370test";
            msSqlConnectionParameters1.ServerName = "DESKTOP-BLOBTUQ\\SQLEXPRESS";
            this.sqlDataSource1.ConnectionParameters = msSqlConnectionParameters1;
            this.sqlDataSource1.Name = "sqlDataSource1";
            columnExpression1.ColumnName = "SuburbID";
            table3.Name = "Suburb";
            columnExpression1.Table = table3;
            column1.Expression = columnExpression1;
            columnExpression2.ColumnName = "SuburbName";
            columnExpression2.Table = table3;
            column2.Expression = columnExpression2;
            selectQuery1.Columns.Add(column1);
            selectQuery1.Columns.Add(column2);
            selectQuery1.MetaSerializable = "<Meta X=\"20\" Y=\"20\" Width=\"100\" Height=\"71\" />";
            selectQuery1.Name = "Suburb";
            selectQuery1.Tables.Add(table3);
            columnExpression3.ColumnName = "CityID";
            table4.Name = "CIty";
            columnExpression3.Table = table4;
            column3.Expression = columnExpression3;
            columnExpression4.ColumnName = "CityName";
            columnExpression4.Table = table4;
            column4.Expression = columnExpression4;
            selectQuery2.Columns.Add(column3);
            selectQuery2.Columns.Add(column4);
            selectQuery2.MetaSerializable = "<Meta X=\"140\" Y=\"20\" Width=\"100\" Height=\"71\" />";
            selectQuery2.Name = "CIty";
            selectQuery2.Tables.Add(table4);
            columnExpression5.ColumnName = "PetSitterID";
            table5.Name = "PetSitter";
            columnExpression5.Table = table5;
            column5.Expression = columnExpression5;
            columnExpression6.ColumnName = "PetSitterName";
            columnExpression6.Table = table5;
            column6.Expression = columnExpression6;
            columnExpression7.ColumnName = "PetSitterSurname";
            columnExpression7.Table = table5;
            column7.Expression = columnExpression7;
            columnExpression8.ColumnName = "PetSitterEmailAddress";
            columnExpression8.Table = table5;
            column8.Expression = columnExpression8;
            columnExpression9.ColumnName = "SitterPassword";
            columnExpression9.Table = table5;
            column9.Expression = columnExpression9;
            columnExpression10.ColumnName = "PetSitterPhoneNum";
            columnExpression10.Table = table5;
            column10.Expression = columnExpression10;
            columnExpression11.ColumnName = "PetSitterAddress";
            columnExpression11.Table = table5;
            column11.Expression = columnExpression11;
            columnExpression12.ColumnName = "Gender";
            columnExpression12.Table = table5;
            column12.Expression = columnExpression12;
            columnExpression13.ColumnName = "Age";
            columnExpression13.Table = table5;
            column13.Expression = columnExpression13;
            columnExpression14.ColumnName = "Reference";
            columnExpression14.Table = table5;
            column14.Expression = columnExpression14;
            columnExpression15.ColumnName = "Picture";
            columnExpression15.Table = table5;
            column15.Expression = columnExpression15;
            columnExpression16.ColumnName = "About";
            columnExpression16.Table = table5;
            column16.Expression = columnExpression16;
            columnExpression17.ColumnName = "Area";
            columnExpression17.Table = table5;
            column17.Expression = columnExpression17;
            columnExpression18.ColumnName = "SitterStatusID";
            columnExpression18.Table = table5;
            column18.Expression = columnExpression18;
            columnExpression19.ColumnName = "TertiaryID";
            columnExpression19.Table = table5;
            column19.Expression = columnExpression19;
            columnExpression20.ColumnName = "UserRoleID";
            columnExpression20.Table = table5;
            column20.Expression = columnExpression20;
            columnExpression21.ColumnName = "SuburbID";
            columnExpression21.Table = table5;
            column21.Expression = columnExpression21;
            columnExpression22.ColumnName = "CityID";
            columnExpression22.Table = table5;
            column22.Expression = columnExpression22;
            columnExpression23.ColumnName = "ProvinceID";
            columnExpression23.Table = table5;
            column23.Expression = columnExpression23;
            selectQuery3.Columns.Add(column5);
            selectQuery3.Columns.Add(column6);
            selectQuery3.Columns.Add(column7);
            selectQuery3.Columns.Add(column8);
            selectQuery3.Columns.Add(column9);
            selectQuery3.Columns.Add(column10);
            selectQuery3.Columns.Add(column11);
            selectQuery3.Columns.Add(column12);
            selectQuery3.Columns.Add(column13);
            selectQuery3.Columns.Add(column14);
            selectQuery3.Columns.Add(column15);
            selectQuery3.Columns.Add(column16);
            selectQuery3.Columns.Add(column17);
            selectQuery3.Columns.Add(column18);
            selectQuery3.Columns.Add(column19);
            selectQuery3.Columns.Add(column20);
            selectQuery3.Columns.Add(column21);
            selectQuery3.Columns.Add(column22);
            selectQuery3.Columns.Add(column23);
            selectQuery3.MetaSerializable = "<Meta X=\"260\" Y=\"20\" Width=\"152\" Height=\"360\" />";
            selectQuery3.Name = "PetSitter";
            selectQuery3.Tables.Add(table5);
            this.sqlDataSource1.Queries.AddRange(new DevExpress.DataAccess.Sql.SqlQuery[] {
            selectQuery1,
            selectQuery2,
            selectQuery3});
            masterDetailInfo1.DetailQueryName = "Suburb";
            relationColumnInfo1.NestedKeyColumn = "SuburbID";
            relationColumnInfo1.ParentKeyColumn = "SuburbID";
            masterDetailInfo1.KeyColumns.Add(relationColumnInfo1);
            masterDetailInfo1.MasterQueryName = "PetSitter";
            masterDetailInfo1.Name = "PetSitterSuburb";
            masterDetailInfo2.DetailQueryName = "CIty";
            relationColumnInfo2.NestedKeyColumn = "CityID";
            relationColumnInfo2.ParentKeyColumn = "CityID";
            masterDetailInfo2.KeyColumns.Add(relationColumnInfo2);
            masterDetailInfo2.MasterQueryName = "PetSitter";
            masterDetailInfo2.Name = "PetSitterCIty";
            this.sqlDataSource1.Relations.AddRange(new DevExpress.DataAccess.Sql.MasterDetailInfo[] {
            masterDetailInfo1,
            masterDetailInfo2});
            this.sqlDataSource1.ResultSchemaSerializable = resources.GetString("sqlDataSource1.ResultSchemaSerializable");
            // 
            // Title
            // 
            this.Title.BackColor = System.Drawing.Color.Transparent;
            this.Title.BorderColor = System.Drawing.Color.Black;
            this.Title.Borders = DevExpress.XtraPrinting.BorderSide.None;
            this.Title.BorderWidth = 1F;
            this.Title.Font = new System.Drawing.Font("Arial", 14.25F);
            this.Title.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(70)))), ((int)(((byte)(80)))));
            this.Title.Name = "Title";
            // 
            // DetailCaption1
            // 
            this.DetailCaption1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(23)))), ((int)(((byte)(104)))), ((int)(((byte)(196)))));
            this.DetailCaption1.BorderColor = System.Drawing.Color.White;
            this.DetailCaption1.Borders = DevExpress.XtraPrinting.BorderSide.Left;
            this.DetailCaption1.BorderWidth = 2F;
            this.DetailCaption1.Font = new System.Drawing.Font("Arial", 8.25F, System.Drawing.FontStyle.Bold);
            this.DetailCaption1.ForeColor = System.Drawing.Color.White;
            this.DetailCaption1.Name = "DetailCaption1";
            this.DetailCaption1.Padding = new DevExpress.XtraPrinting.PaddingInfo(6, 6, 0, 0, 100F);
            this.DetailCaption1.TextAlignment = DevExpress.XtraPrinting.TextAlignment.MiddleLeft;
            // 
            // DetailData1
            // 
            this.DetailData1.BorderColor = System.Drawing.Color.Transparent;
            this.DetailData1.Borders = DevExpress.XtraPrinting.BorderSide.Left;
            this.DetailData1.BorderWidth = 2F;
            this.DetailData1.Font = new System.Drawing.Font("Arial", 8.25F);
            this.DetailData1.ForeColor = System.Drawing.Color.Black;
            this.DetailData1.Name = "DetailData1";
            this.DetailData1.Padding = new DevExpress.XtraPrinting.PaddingInfo(6, 6, 0, 0, 100F);
            this.DetailData1.TextAlignment = DevExpress.XtraPrinting.TextAlignment.MiddleLeft;
            // 
            // DetailData3_Odd
            // 
            this.DetailData3_Odd.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(243)))), ((int)(((byte)(245)))), ((int)(((byte)(248)))));
            this.DetailData3_Odd.BorderColor = System.Drawing.Color.Transparent;
            this.DetailData3_Odd.Borders = DevExpress.XtraPrinting.BorderSide.None;
            this.DetailData3_Odd.BorderWidth = 1F;
            this.DetailData3_Odd.Font = new System.Drawing.Font("Arial", 8.25F);
            this.DetailData3_Odd.ForeColor = System.Drawing.Color.Black;
            this.DetailData3_Odd.Name = "DetailData3_Odd";
            this.DetailData3_Odd.Padding = new DevExpress.XtraPrinting.PaddingInfo(6, 6, 0, 0, 100F);
            this.DetailData3_Odd.TextAlignment = DevExpress.XtraPrinting.TextAlignment.MiddleLeft;
            // 
            // PageInfo
            // 
            this.PageInfo.Font = new System.Drawing.Font("Arial", 8.25F, System.Drawing.FontStyle.Bold);
            this.PageInfo.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(70)))), ((int)(((byte)(80)))));
            this.PageInfo.Name = "PageInfo";
            this.PageInfo.Padding = new DevExpress.XtraPrinting.PaddingInfo(2, 2, 0, 0, 100F);
            // 
            // TopMargin
            // 
            this.TopMargin.Controls.AddRange(new DevExpress.XtraReports.UI.XRControl[] {
            this.xrPictureBox2,
            this.xrLabel7,
            this.xrPictureBox1,
            this.xrLabel8,
            this.xrPictureBox3,
            this.xrLabel9,
            this.xrPictureBox4,
            this.xrLabel10,
            this.xrPictureBox5,
            this.xrPictureBox6,
            this.xrPictureBox7,
            this.xrPictureBox8,
            this.xrPictureBox9,
            this.xrPictureBox10,
            this.xrPictureBox11,
            this.xrPictureBox12,
            this.xrPictureBox13,
            this.xrPictureBox14,
            this.xrPictureBox15,
            this.xrPictureBox16,
            this.xrPictureBox17,
            this.xrPictureBox18,
            this.xrPictureBox19,
            this.xrPictureBox20,
            this.xrPictureBox21,
            this.xrPictureBox22,
            this.xrPictureBox23,
            this.xrPictureBox24,
            this.xrPictureBox25,
            this.xrPictureBox26,
            this.xrPictureBox27,
            this.xrPictureBox28});
            this.TopMargin.HeightF = 116.4583F;
            this.TopMargin.Name = "TopMargin";
            // 
            // BottomMargin
            // 
            this.BottomMargin.Controls.AddRange(new DevExpress.XtraReports.UI.XRControl[] {
            this.pageInfo1,
            this.pageInfo2});
            this.BottomMargin.Name = "BottomMargin";
            // 
            // ReportHeader
            // 
            this.ReportHeader.Controls.AddRange(new DevExpress.XtraReports.UI.XRControl[] {
            this.xrRichText1,
            this.label1});
            this.ReportHeader.HeightF = 116.875F;
            this.ReportHeader.Name = "ReportHeader";
            // 
            // GroupHeader1
            // 
            this.GroupHeader1.Controls.AddRange(new DevExpress.XtraReports.UI.XRControl[] {
            this.table1});
            this.GroupHeader1.GroupUnion = DevExpress.XtraReports.UI.GroupUnion.WithFirstDetail;
            this.GroupHeader1.HeightF = 28F;
            this.GroupHeader1.Name = "GroupHeader1";
            // 
            // Detail
            // 
            this.Detail.Controls.AddRange(new DevExpress.XtraReports.UI.XRControl[] {
            this.table2});
            this.Detail.HeightF = 25F;
            this.Detail.Name = "Detail";
            // 
            // pageInfo1
            // 
            this.pageInfo1.LocationFloat = new DevExpress.Utils.PointFloat(6F, 6F);
            this.pageInfo1.Name = "pageInfo1";
            this.pageInfo1.PageInfo = DevExpress.XtraPrinting.PageInfo.DateTime;
            this.pageInfo1.SizeF = new System.Drawing.SizeF(313F, 23F);
            this.pageInfo1.StyleName = "PageInfo";
            // 
            // pageInfo2
            // 
            this.pageInfo2.LocationFloat = new DevExpress.Utils.PointFloat(331F, 6F);
            this.pageInfo2.Name = "pageInfo2";
            this.pageInfo2.SizeF = new System.Drawing.SizeF(313F, 23F);
            this.pageInfo2.StyleName = "PageInfo";
            this.pageInfo2.TextAlignment = DevExpress.XtraPrinting.TextAlignment.TopRight;
            this.pageInfo2.TextFormatString = "Page {0} of {1}";
            // 
            // label1
            // 
            this.label1.BackColor = System.Drawing.Color.MidnightBlue;
            this.label1.ForeColor = System.Drawing.Color.White;
            this.label1.LocationFloat = new DevExpress.Utils.PointFloat(6F, 6F);
            this.label1.Name = "label1";
            this.label1.SizeF = new System.Drawing.SizeF(638F, 24.19433F);
            this.label1.StyleName = "Title";
            this.label1.StylePriority.UseBackColor = false;
            this.label1.StylePriority.UseForeColor = false;
            this.label1.Text = "Petsitter Per Suburb";
            // 
            // table1
            // 
            this.table1.LocationFloat = new DevExpress.Utils.PointFloat(0F, 0F);
            this.table1.Name = "table1";
            this.table1.Rows.AddRange(new DevExpress.XtraReports.UI.XRTableRow[] {
            this.tableRow1});
            this.table1.SizeF = new System.Drawing.SizeF(650F, 28F);
            // 
            // tableRow1
            // 
            this.tableRow1.Cells.AddRange(new DevExpress.XtraReports.UI.XRTableCell[] {
            this.tableCell1,
            this.tableCell2,
            this.tableCell3,
            this.tableCell4,
            this.tableCell5});
            this.tableRow1.Name = "tableRow1";
            this.tableRow1.Weight = 1D;
            // 
            // tableCell1
            // 
            this.tableCell1.Borders = DevExpress.XtraPrinting.BorderSide.None;
            this.tableCell1.Name = "tableCell1";
            this.tableCell1.StyleName = "DetailCaption1";
            this.tableCell1.StylePriority.UseBorders = false;
            this.tableCell1.Text = "Pet Sitter Name";
            this.tableCell1.Weight = 0.26674736609825722D;
            // 
            // tableCell2
            // 
            this.tableCell2.Name = "tableCell2";
            this.tableCell2.StyleName = "DetailCaption1";
            this.tableCell2.Text = "Pet Sitter Surname";
            this.tableCell2.Weight = 0.31488375150240383D;
            // 
            // tableCell3
            // 
            this.tableCell3.Name = "tableCell3";
            this.tableCell3.StyleName = "DetailCaption1";
            this.tableCell3.Text = "Age";
            this.tableCell3.Weight = 0.096487057025615983D;
            // 
            // tableCell4
            // 
            this.tableCell4.Name = "tableCell4";
            this.tableCell4.StyleName = "DetailCaption1";
            this.tableCell4.StylePriority.UseTextAlignment = false;
            this.tableCell4.Text = "Suburb Name";
            this.tableCell4.TextAlignment = DevExpress.XtraPrinting.TextAlignment.MiddleRight;
            this.tableCell4.Weight = 0.18585520817683293D;
            // 
            // tableCell5
            // 
            this.tableCell5.Multiline = true;
            this.tableCell5.Name = "tableCell5";
            this.tableCell5.StyleName = "DetailCaption1";
            this.tableCell5.StylePriority.UseTextAlignment = false;
            this.tableCell5.Text = "City Name\r\n";
            this.tableCell5.TextAlignment = DevExpress.XtraPrinting.TextAlignment.MiddleRight;
            this.tableCell5.Weight = 0.136026611328125D;
            // 
            // table2
            // 
            this.table2.LocationFloat = new DevExpress.Utils.PointFloat(0F, 0F);
            this.table2.Name = "table2";
            this.table2.OddStyleName = "DetailData3_Odd";
            this.table2.Rows.AddRange(new DevExpress.XtraReports.UI.XRTableRow[] {
            this.tableRow2});
            this.table2.SizeF = new System.Drawing.SizeF(650F, 25F);
            // 
            // tableRow2
            // 
            this.tableRow2.Cells.AddRange(new DevExpress.XtraReports.UI.XRTableCell[] {
            this.tableCell6,
            this.tableCell7,
            this.tableCell8,
            this.tableCell9,
            this.tableCell10});
            this.tableRow2.Name = "tableRow2";
            this.tableRow2.Weight = 11.5D;
            // 
            // tableCell6
            // 
            this.tableCell6.Borders = DevExpress.XtraPrinting.BorderSide.None;
            this.tableCell6.ExpressionBindings.AddRange(new DevExpress.XtraReports.UI.ExpressionBinding[] {
            new DevExpress.XtraReports.UI.ExpressionBinding("BeforePrint", "Text", "[PetSitterName]")});
            this.tableCell6.Name = "tableCell6";
            this.tableCell6.StyleName = "DetailData1";
            this.tableCell6.StylePriority.UseBorders = false;
            this.tableCell6.Weight = 0.26674736609825722D;
            // 
            // tableCell7
            // 
            this.tableCell7.ExpressionBindings.AddRange(new DevExpress.XtraReports.UI.ExpressionBinding[] {
            new DevExpress.XtraReports.UI.ExpressionBinding("BeforePrint", "Text", "[PetSitterSurname]")});
            this.tableCell7.Name = "tableCell7";
            this.tableCell7.StyleName = "DetailData1";
            this.tableCell7.Weight = 0.31488375150240383D;
            // 
            // tableCell8
            // 
            this.tableCell8.ExpressionBindings.AddRange(new DevExpress.XtraReports.UI.ExpressionBinding[] {
            new DevExpress.XtraReports.UI.ExpressionBinding("BeforePrint", "Text", "[Age]")});
            this.tableCell8.Name = "tableCell8";
            this.tableCell8.StyleName = "DetailData1";
            this.tableCell8.Weight = 0.096487057025615983D;
            // 
            // tableCell9
            // 
            this.tableCell9.ExpressionBindings.AddRange(new DevExpress.XtraReports.UI.ExpressionBinding[] {
            new DevExpress.XtraReports.UI.ExpressionBinding("BeforePrint", "Text", "[PetSitterSuburb].[SuburbName]")});
            this.tableCell9.Name = "tableCell9";
            this.tableCell9.StyleName = "DetailData1";
            this.tableCell9.StylePriority.UseTextAlignment = false;
            this.tableCell9.TextAlignment = DevExpress.XtraPrinting.TextAlignment.MiddleRight;
            this.tableCell9.Weight = 0.18585520817683293D;
            // 
            // tableCell10
            // 
            this.tableCell10.ExpressionBindings.AddRange(new DevExpress.XtraReports.UI.ExpressionBinding[] {
            new DevExpress.XtraReports.UI.ExpressionBinding("BeforePrint", "Text", "[PetSitterCIty].[CityName]")});
            this.tableCell10.Name = "tableCell10";
            this.tableCell10.StyleName = "DetailData1";
            this.tableCell10.StylePriority.UseTextAlignment = false;
            this.tableCell10.TextAlignment = DevExpress.XtraPrinting.TextAlignment.MiddleRight;
            this.tableCell10.Weight = 0.136026611328125D;
            // 
            // suburb
            // 
            this.suburb.Description = "Select a Suburb";
            dynamicListLookUpSettings1.DataMember = "Suburb";
            dynamicListLookUpSettings1.DataSource = this.sqlDataSource1;
            dynamicListLookUpSettings1.DisplayMember = "SuburbName";
            dynamicListLookUpSettings1.SortMember = null;
            dynamicListLookUpSettings1.ValueMember = "SuburbName";
            this.suburb.LookUpSettings = dynamicListLookUpSettings1;
            this.suburb.Name = "suburb";
            // 
            // xrPictureBox2
            // 
            this.xrPictureBox2.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox2.ImageSource"));
            this.xrPictureBox2.LocationFloat = new DevExpress.Utils.PointFloat(438.4616F, 15.6795F);
            this.xrPictureBox2.Name = "xrPictureBox2";
            this.xrPictureBox2.SizeF = new System.Drawing.SizeF(33.33333F, 33.33333F);
            this.xrPictureBox2.Sizing = DevExpress.XtraPrinting.ImageSizeMode.AutoSize;
            // 
            // xrLabel7
            // 
            this.xrLabel7.ForeColor = System.Drawing.Color.RoyalBlue;
            this.xrLabel7.LocationFloat = new DevExpress.Utils.PointFloat(471.795F, 15.6795F);
            this.xrLabel7.Multiline = true;
            this.xrLabel7.Name = "xrLabel7";
            this.xrLabel7.Padding = new DevExpress.XtraPrinting.PaddingInfo(2, 2, 0, 0, 100F);
            this.xrLabel7.SizeF = new System.Drawing.SizeF(178.205F, 23F);
            this.xrLabel7.StylePriority.UseForeColor = false;
            this.xrLabel7.Text = "Company Contact:0721345678";
            // 
            // xrPictureBox1
            // 
            this.xrPictureBox1.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox1.ImageSource"));
            this.xrPictureBox1.LocationFloat = new DevExpress.Utils.PointFloat(438.4616F, 49.01283F);
            this.xrPictureBox1.Name = "xrPictureBox1";
            this.xrPictureBox1.SizeF = new System.Drawing.SizeF(33.33333F, 33.33333F);
            this.xrPictureBox1.Sizing = DevExpress.XtraPrinting.ImageSizeMode.AutoSize;
            // 
            // xrLabel8
            // 
            this.xrLabel8.BackColor = System.Drawing.Color.Transparent;
            this.xrLabel8.ForeColor = System.Drawing.Color.RoyalBlue;
            this.xrLabel8.LocationFloat = new DevExpress.Utils.PointFloat(471.795F, 49.01283F);
            this.xrLabel8.Multiline = true;
            this.xrLabel8.Name = "xrLabel8";
            this.xrLabel8.Padding = new DevExpress.XtraPrinting.PaddingInfo(2, 2, 0, 0, 100F);
            this.xrLabel8.SizeF = new System.Drawing.SizeF(178.205F, 23F);
            this.xrLabel8.StylePriority.UseBackColor = false;
            this.xrLabel8.StylePriority.UseForeColor = false;
            this.xrLabel8.Text = "Company:Petcetra";
            // 
            // xrPictureBox3
            // 
            this.xrPictureBox3.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox3.ImageSource"));
            this.xrPictureBox3.LocationFloat = new DevExpress.Utils.PointFloat(21.47438F, 15.6795F);
            this.xrPictureBox3.Name = "xrPictureBox3";
            this.xrPictureBox3.SizeF = new System.Drawing.SizeF(33.33333F, 33.33333F);
            this.xrPictureBox3.Sizing = DevExpress.XtraPrinting.ImageSizeMode.AutoSize;
            // 
            // xrLabel9
            // 
            this.xrLabel9.ForeColor = System.Drawing.Color.RoyalBlue;
            this.xrLabel9.LocationFloat = new DevExpress.Utils.PointFloat(54.80772F, 15.6795F);
            this.xrLabel9.Multiline = true;
            this.xrLabel9.Name = "xrLabel9";
            this.xrLabel9.Padding = new DevExpress.XtraPrinting.PaddingInfo(2, 2, 0, 0, 100F);
            this.xrLabel9.SizeF = new System.Drawing.SizeF(178.8462F, 23F);
            this.xrLabel9.StylePriority.UseForeColor = false;
            this.xrLabel9.Text = "Generated by:Admin\r\n";
            // 
            // xrPictureBox4
            // 
            this.xrPictureBox4.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox4.ImageSource"));
            this.xrPictureBox4.LocationFloat = new DevExpress.Utils.PointFloat(21.47438F, 49.01285F);
            this.xrPictureBox4.Name = "xrPictureBox4";
            this.xrPictureBox4.SizeF = new System.Drawing.SizeF(33.33333F, 33.33333F);
            this.xrPictureBox4.Sizing = DevExpress.XtraPrinting.ImageSizeMode.AutoSize;
            // 
            // xrLabel10
            // 
            this.xrLabel10.ForeColor = System.Drawing.Color.RoyalBlue;
            this.xrLabel10.LocationFloat = new DevExpress.Utils.PointFloat(54.80772F, 49.01283F);
            this.xrLabel10.Multiline = true;
            this.xrLabel10.Name = "xrLabel10";
            this.xrLabel10.Padding = new DevExpress.XtraPrinting.PaddingInfo(2, 2, 0, 0, 100F);
            this.xrLabel10.SizeF = new System.Drawing.SizeF(178.8462F, 23F);
            this.xrLabel10.StylePriority.UseForeColor = false;
            this.xrLabel10.Text = "Date Generated:2019/07/08";
            // 
            // xrPictureBox5
            // 
            this.xrPictureBox5.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox5.ImageSource"));
            this.xrPictureBox5.LocationFloat = new DevExpress.Utils.PointFloat(10F, 83.45831F);
            this.xrPictureBox5.Name = "xrPictureBox5";
            this.xrPictureBox5.SizeF = new System.Drawing.SizeF(32.30772F, 32.99999F);
            // 
            // xrPictureBox6
            // 
            this.xrPictureBox6.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox6.ImageSource"));
            this.xrPictureBox6.LocationFloat = new DevExpress.Utils.PointFloat(42.30772F, 83.45831F);
            this.xrPictureBox6.Name = "xrPictureBox6";
            this.xrPictureBox6.SizeF = new System.Drawing.SizeF(26.49533F, 32.99999F);
            // 
            // xrPictureBox7
            // 
            this.xrPictureBox7.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox7.ImageSource"));
            this.xrPictureBox7.LocationFloat = new DevExpress.Utils.PointFloat(68.80304F, 83.45831F);
            this.xrPictureBox7.Name = "xrPictureBox7";
            this.xrPictureBox7.SizeF = new System.Drawing.SizeF(27.09938F, 32.99999F);
            // 
            // xrPictureBox8
            // 
            this.xrPictureBox8.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox8.ImageSource"));
            this.xrPictureBox8.LocationFloat = new DevExpress.Utils.PointFloat(95.90244F, 83.45831F);
            this.xrPictureBox8.Name = "xrPictureBox8";
            this.xrPictureBox8.SizeF = new System.Drawing.SizeF(27.09938F, 32.99999F);
            // 
            // xrPictureBox9
            // 
            this.xrPictureBox9.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox9.ImageSource"));
            this.xrPictureBox9.LocationFloat = new DevExpress.Utils.PointFloat(123.0018F, 83.45831F);
            this.xrPictureBox9.Name = "xrPictureBox9";
            this.xrPictureBox9.SizeF = new System.Drawing.SizeF(27.09938F, 32.99999F);
            // 
            // xrPictureBox10
            // 
            this.xrPictureBox10.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox10.ImageSource"));
            this.xrPictureBox10.LocationFloat = new DevExpress.Utils.PointFloat(150.1012F, 83.45831F);
            this.xrPictureBox10.Name = "xrPictureBox10";
            this.xrPictureBox10.SizeF = new System.Drawing.SizeF(27.09938F, 32.99999F);
            // 
            // xrPictureBox11
            // 
            this.xrPictureBox11.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox11.ImageSource"));
            this.xrPictureBox11.LocationFloat = new DevExpress.Utils.PointFloat(177.2006F, 83.45831F);
            this.xrPictureBox11.Name = "xrPictureBox11";
            this.xrPictureBox11.SizeF = new System.Drawing.SizeF(27.09938F, 32.99999F);
            // 
            // xrPictureBox12
            // 
            this.xrPictureBox12.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox12.ImageSource"));
            this.xrPictureBox12.LocationFloat = new DevExpress.Utils.PointFloat(204.2999F, 83.45831F);
            this.xrPictureBox12.Name = "xrPictureBox12";
            this.xrPictureBox12.SizeF = new System.Drawing.SizeF(27.09938F, 32.99999F);
            // 
            // xrPictureBox13
            // 
            this.xrPictureBox13.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox13.ImageSource"));
            this.xrPictureBox13.LocationFloat = new DevExpress.Utils.PointFloat(231.3993F, 83.45834F);
            this.xrPictureBox13.Name = "xrPictureBox13";
            this.xrPictureBox13.SizeF = new System.Drawing.SizeF(27.09938F, 32.99999F);
            // 
            // xrPictureBox14
            // 
            this.xrPictureBox14.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox14.ImageSource"));
            this.xrPictureBox14.LocationFloat = new DevExpress.Utils.PointFloat(258.4986F, 83.45834F);
            this.xrPictureBox14.Name = "xrPictureBox14";
            this.xrPictureBox14.SizeF = new System.Drawing.SizeF(27.09938F, 32.99999F);
            // 
            // xrPictureBox15
            // 
            this.xrPictureBox15.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox15.ImageSource"));
            this.xrPictureBox15.LocationFloat = new DevExpress.Utils.PointFloat(285.598F, 83.45834F);
            this.xrPictureBox15.Name = "xrPictureBox15";
            this.xrPictureBox15.SizeF = new System.Drawing.SizeF(27.09938F, 32.99999F);
            // 
            // xrPictureBox16
            // 
            this.xrPictureBox16.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox16.ImageSource"));
            this.xrPictureBox16.LocationFloat = new DevExpress.Utils.PointFloat(312.6974F, 83.45834F);
            this.xrPictureBox16.Name = "xrPictureBox16";
            this.xrPictureBox16.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox17
            // 
            this.xrPictureBox17.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox17.ImageSource"));
            this.xrPictureBox17.LocationFloat = new DevExpress.Utils.PointFloat(339.7807F, 83.45834F);
            this.xrPictureBox17.Name = "xrPictureBox17";
            this.xrPictureBox17.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox18
            // 
            this.xrPictureBox18.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox18.ImageSource"));
            this.xrPictureBox18.LocationFloat = new DevExpress.Utils.PointFloat(366.864F, 83.45834F);
            this.xrPictureBox18.Name = "xrPictureBox18";
            this.xrPictureBox18.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox19
            // 
            this.xrPictureBox19.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox19.ImageSource"));
            this.xrPictureBox19.LocationFloat = new DevExpress.Utils.PointFloat(393.9474F, 83.45831F);
            this.xrPictureBox19.Name = "xrPictureBox19";
            this.xrPictureBox19.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox20
            // 
            this.xrPictureBox20.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox20.ImageSource"));
            this.xrPictureBox20.LocationFloat = new DevExpress.Utils.PointFloat(421.0307F, 83.45834F);
            this.xrPictureBox20.Name = "xrPictureBox20";
            this.xrPictureBox20.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox21
            // 
            this.xrPictureBox21.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox21.ImageSource"));
            this.xrPictureBox21.LocationFloat = new DevExpress.Utils.PointFloat(448.114F, 83.45834F);
            this.xrPictureBox21.Name = "xrPictureBox21";
            this.xrPictureBox21.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox22
            // 
            this.xrPictureBox22.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox22.ImageSource"));
            this.xrPictureBox22.LocationFloat = new DevExpress.Utils.PointFloat(475.1974F, 83.45831F);
            this.xrPictureBox22.Name = "xrPictureBox22";
            this.xrPictureBox22.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox23
            // 
            this.xrPictureBox23.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox23.ImageSource"));
            this.xrPictureBox23.LocationFloat = new DevExpress.Utils.PointFloat(502.2807F, 83.45834F);
            this.xrPictureBox23.Name = "xrPictureBox23";
            this.xrPictureBox23.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox24
            // 
            this.xrPictureBox24.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox24.ImageSource"));
            this.xrPictureBox24.LocationFloat = new DevExpress.Utils.PointFloat(529.364F, 83.45831F);
            this.xrPictureBox24.Name = "xrPictureBox24";
            this.xrPictureBox24.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox25
            // 
            this.xrPictureBox25.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox25.ImageSource"));
            this.xrPictureBox25.LocationFloat = new DevExpress.Utils.PointFloat(556.4473F, 83.45831F);
            this.xrPictureBox25.Name = "xrPictureBox25";
            this.xrPictureBox25.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox26
            // 
            this.xrPictureBox26.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox26.ImageSource"));
            this.xrPictureBox26.LocationFloat = new DevExpress.Utils.PointFloat(583.5307F, 83.45834F);
            this.xrPictureBox26.Name = "xrPictureBox26";
            this.xrPictureBox26.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox27
            // 
            this.xrPictureBox27.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("svg", resources.GetString("xrPictureBox27.ImageSource"));
            this.xrPictureBox27.LocationFloat = new DevExpress.Utils.PointFloat(612.9167F, 83.45831F);
            this.xrPictureBox27.Name = "xrPictureBox27";
            this.xrPictureBox27.SizeF = new System.Drawing.SizeF(27.08331F, 32.99999F);
            // 
            // xrPictureBox28
            // 
            this.xrPictureBox28.ImageSource = new DevExpress.XtraPrinting.Drawing.ImageSource("img", resources.GetString("xrPictureBox28.ImageSource"));
            this.xrPictureBox28.LocationFloat = new DevExpress.Utils.PointFloat(258.4986F, 0F);
            this.xrPictureBox28.Name = "xrPictureBox28";
            this.xrPictureBox28.SizeF = new System.Drawing.SizeF(162.532F, 74.40813F);
            this.xrPictureBox28.Sizing = DevExpress.XtraPrinting.ImageSizeMode.Squeeze;
            // 
            // xrRichText1
            // 
            this.xrRichText1.LocationFloat = new DevExpress.Utils.PointFloat(0F, 30.19435F);
            this.xrRichText1.Name = "xrRichText1";
            this.xrRichText1.SerializableRtfString = resources.GetString("xrRichText1.SerializableRtfString");
            this.xrRichText1.SizeF = new System.Drawing.SizeF(556.4473F, 86.68067F);
            // 
            // Petsitter_Per_Suburb
            // 
            this.Bands.AddRange(new DevExpress.XtraReports.UI.Band[] {
            this.TopMargin,
            this.BottomMargin,
            this.ReportHeader,
            this.GroupHeader1,
            this.Detail});
            this.ComponentStorage.AddRange(new System.ComponentModel.IComponent[] {
            this.sqlDataSource1});
            this.DataMember = "PetSitter";
            this.DataSource = this.sqlDataSource1;
            this.FilterString = "[PetSitterSuburb][StartsWith([SuburbName], ?suburb)]";
            this.Font = new System.Drawing.Font("Arial", 9.75F);
            this.Margins = new System.Drawing.Printing.Margins(100, 100, 116, 100);
            this.Parameters.AddRange(new DevExpress.XtraReports.Parameters.Parameter[] {
            this.suburb});
            this.StyleSheet.AddRange(new DevExpress.XtraReports.UI.XRControlStyle[] {
            this.Title,
            this.DetailCaption1,
            this.DetailData1,
            this.DetailData3_Odd,
            this.PageInfo});
            this.Version = "19.1";
            ((System.ComponentModel.ISupportInitialize)(this.table1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.table2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.xrRichText1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this)).EndInit();

    }

    #endregion
}
