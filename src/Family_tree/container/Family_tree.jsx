import React, { useState } from 'react'
import "../css/Family_tree.css"

const Family_tree = () => {
    const arr = {
        "Menu": [
            {
                "c_name": "Account Head Master",
                "c_url": "/MainMasterkey/654",
                "n_menu_id": "1",
                "old_url": "652"
            },
            {
                "c_name": "Additional Doctor1s",
                "c_url": "/RoleMasterkey/122",
                "n_menu_id": "1",
                "old_url": "122"
            },
            {
                "c_name": "Area Master",
                "c_url": "/MainMasterkey/14",
                "n_menu_id": "1",
                "old_url": "14"
            },
            {
                "c_name": "Area Type Master",
                "c_url": "/MainMasterkey/402",
                "n_menu_id": "1",
                "old_url": "355"
            },
            {
                "c_name": "Asset Depot Master",
                "c_url": "/Rolemasterkey/123",
                "n_menu_id": "1",
                "old_url": "123"
            },
            {
                "c_name": "Asset Master",
                "c_url": "/MainMasterkey/594",
                "n_menu_id": "1",
                "old_url": "613"
            },
            {
                "c_name": "Asset Type Master",
                "c_url": "/MainMasterkey/661",
                "n_menu_id": "1",
                "old_url": "10056"
            },
            {
                "c_name": "Bank Master",
                "c_url": "/MainMasterkey/593",
                "n_menu_id": "1",
                "old_url": "458"
            },
            {
                "c_name": "Brand Group Master",
                "c_url": "/MainMasterkey/360",
                "n_menu_id": "1",
                "old_url": "335"
            },
            {
                "c_name": "Budget Group Master",
                "c_url": "/MainMasterkey/539",
                "n_menu_id": "1",
                "old_url": "10054"
            },
            {
                "c_name": "Camp Topic Master",
                "c_url": "/MainMasterkey/583",
                "n_menu_id": "1",
                "old_url": "583"
            },
            {
                "c_name": "Campaign Master",
                "c_url": "/Campaign_Master",
                "n_menu_id": "1",
                "old_url": "550"
            },
            {
                "c_name": "Candidate Data Collection Form",
                "c_url": "/Campaign_Data_Collection",
                "n_menu_id": "1",
                "old_url": "1778"
            },
            {
                "c_name": "Category Master",
                "c_url": "/MainMasterkey/19",
                "n_menu_id": "1",
                "old_url": "19"
            },
            {
                "c_name": "Chemist Master",
                "c_url": "/Rolemasterkey/20",
                "n_menu_id": "1",
                "old_url": "20"
            },
            {
                "c_name": "Circular Master",
                "c_url": "/MainMasterkey/286",
                "n_menu_id": "1",
                "old_url": "284"
            },
            {
                "c_name": "Circular Type Master",
                "c_url": "/MainMasterkey/285",
                "n_menu_id": "1",
                "old_url": "285"
            },
            {
                "c_name": "City Master",
                "c_url": "/MainMasterkey/224",
                "n_menu_id": "1",
                "old_url": "224"
            },
            {
                "c_name": "Compensation Master",
                "c_url": "/MainMasterkey/453",
                "n_menu_id": "1",
                "old_url": "10051"
            },
            {
                "c_name": "Competitor Audit Cycle Master",
                "c_url": "/MainMasterkey/726",
                "n_menu_id": "1",
                "old_url": "726"
            },
            {
                "c_name": "Competitor Product Master",
                "c_url": "/MainMasterkey/214",
                "n_menu_id": "1",
                "old_url": "640"
            },
            {
                "c_name": "Competitor Source",
                "c_url": "/MainMasterkey/665",
                "n_menu_id": "1",
                "old_url": "216"
            },
            {
                "c_name": "Department Master",
                "c_url": "/MainMasterkey/211",
                "n_menu_id": "1",
                "old_url": "211"
            },
            {
                "c_name": "Depot Master",
                "c_url": "/MainMasterkey/802",
                "n_menu_id": "1",
                "old_url": "802"
            },
            {
                "c_name": "Designation Master",
                "c_url": "/MainMasterkey/435",
                "n_menu_id": "1",
                "old_url": "10052"
            },
            {
                "c_name": "Desk Management",
                "c_url": "/MainMasterkey/253",
                "n_menu_id": "1",
                "old_url": "253"
            },
            {
                "c_name": "Distributor Master",
                "c_url": "/RoleMasterkey/149",
                "n_menu_id": "1",
                "old_url": "149"
            },
            {
                "c_name": "Division Master",
                "c_url": "/MainMasterkey/17",
                "n_menu_id": "1",
                "old_url": "17"
            },
            {
                "c_name": "Doctor Class Master",
                "c_url": "/MainMasterkey/595",
                "n_menu_id": "1",
                "old_url": "353"
            },
            {
                "c_name": "Doctor Grade Master",
                "c_url": "/MainMasterkey/596",
                "n_menu_id": "1",
                "old_url": "22"
            },
            {
                "c_name": "Doctor Target Master",
                "c_url": "/MainMasterkey/113",
                "n_menu_id": "1",
                "old_url": "113"
            },
            {
                "c_name": "Doctors Master",
                "c_url": "/Rolemasterkey/108",
                "n_menu_id": "1",
                "old_url": "108"
            },
            {
                "c_name": "Dr. Qualification Master",
                "c_url": "/MainMasterkey/631",
                "n_menu_id": "1",
                "old_url": "631"
            },
            {
                "c_name": "DSCA Type Master",
                "c_url": "/MainMasterkey/223",
                "n_menu_id": "1",
                "old_url": "223"
            },
            {
                "c_name": "E Detail Resolution Test List",
                "c_url": "/e_detail_resolution_test_list",
                "n_menu_id": "1",
                "old_url": "105011"
            },
            {
                "c_name": "Eligibility Master",
                "c_url": "/MainMasterkey/485",
                "n_menu_id": "1",
                "old_url": "451"
            },
            {
                "c_name": "Employee  Master",
                "c_url": "/MainMasterkey/24",
                "n_menu_id": "1",
                "old_url": "24"
            },
            {
                "c_name": "Employee Grade Master",
                "c_url": "/MainMasterkey/251",
                "n_menu_id": "1",
                "old_url": "10045"
            },
            {
                "c_name": "Expense Category Master",
                "c_url": "/MainMasterkey/30",
                "n_menu_id": "1",
                "old_url": "30"
            },
            {
                "c_name": "Expense Desk Details",
                "c_url": "/MainMasterkey/266",
                "n_menu_id": "1",
                "old_url": "264"
            },
            {
                "c_name": "Expense Desk Master",
                "c_url": "/MainMasterkey/265",
                "n_menu_id": "1",
                "old_url": "263"
            },
            {
                "c_name": "Expense Master",
                "c_url": "/MainMasterkey/31",
                "n_menu_id": "1",
                "old_url": "31"
            },
            {
                "c_name": "FS Master",
                "c_url": "/FsMasterTable",
                "n_menu_id": "1",
                "old_url": "34"
            },
            {
                "c_name": "Gadget Group Master",
                "c_url": "/MainMasterkey/280",
                "n_menu_id": "1",
                "old_url": "280"
            },
            {
                "c_name": "Gadget Master",
                "c_url": "/MainMasterkey/279",
                "n_menu_id": "1",
                "old_url": "277"
            },
            {
                "c_name": "GPM Master",
                "c_url": "/MainMasterkey/362",
                "n_menu_id": "1",
                "old_url": "702"
            },
            {
                "c_name": "Group Master",
                "c_url": "/MainMasterkey/727",
                "n_menu_id": "1",
                "old_url": "727"
            },
            {
                "c_name": "Holiday Master",
                "c_url": "/MainMasterkey/32",
                "n_menu_id": "1",
                "old_url": "10046"
            },
            {
                "c_name": "Hospital1 Master",
                "c_url": "/RoleMasterkey/60",
                "n_menu_id": "1",
                "old_url": "60"
            },
            {
                "c_name": "Hospital1 Type Master",
                "c_url": "/MainMasterkey/668",
                "n_menu_id": "1",
                "old_url": "1200"
            },
            {
                "c_name": "Incentives Master",
                "c_url": "/MainMasterkey/452",
                "n_menu_id": "1",
                "old_url": "10048"
            },
            {
                "c_name": "Investment Desk Master",
                "c_url": "/MainMasterkey/363",
                "n_menu_id": "1",
                "old_url": "703"
            },
            {
                "c_name": "Investment Employee Group Master",
                "c_url": "/MainMasterkey/544",
                "n_menu_id": "1",
                "old_url": "544"
            },
            {
                "c_name": "Investment Type Master",
                "c_url": "/MainMasterkey/365",
                "n_menu_id": "1",
                "old_url": "365"
            },
            {
                "c_name": "Item Category Master",
                "c_url": "/MainMasterkey/25",
                "n_menu_id": "1",
                "old_url": "25"
            },
            {
                "c_name": "Item Group Category",
                "c_url": "/MainMasterkey/183",
                "n_menu_id": "1",
                "old_url": "183"
            },
            {
                "c_name": "LBL list",
                "c_url": "/LeaveBehindLiterature",
                "n_menu_id": "1",
                "old_url": "757"
            },
            {
                "c_name": "Leave Type Master",
                "c_url": "/MainMasterkey/132",
                "n_menu_id": "1",
                "old_url": "10047"
            },
            {
                "c_name": "Location Master",
                "c_url": "/MainMasterkey/208",
                "n_menu_id": "1",
                "old_url": "10044"
            },
            {
                "c_name": "Marketing Hierarchy Master",
                "c_url": "/MainMasterkey/609",
                "n_menu_id": "1",
                "old_url": "753"
            },
            {
                "c_name": "Material Delivery Master",
                "c_url": "/MainMasterkey/666",
                "n_menu_id": "1",
                "old_url": "10050"
            },
            {
                "c_name": "Material Desk Master",
                "c_url": "/MainMasterkey/257",
                "n_menu_id": "1",
                "old_url": "257"
            },
            {
                "c_name": "Material Eligibility Master",
                "c_url": "/MainMasterkey/254",
                "n_menu_id": "1",
                "old_url": "254"
            },
            {
                "c_name": "Material Group Master",
                "c_url": "/MainMasterkey/255",
                "n_menu_id": "1",
                "old_url": "255"
            },
            {
                "c_name": "Material Request Master",
                "c_url": "/MainMasterkey/256",
                "n_menu_id": "1",
                "old_url": "256"
            },
            {
                "c_name": "Others1 Master",
                "c_url": "/RoleMasterkey/510",
                "n_menu_id": "1",
                "old_url": "510"
            },
            {
                "c_name": "Pay Type Master",
                "c_url": "/MainMasterkey/245",
                "n_menu_id": "1",
                "old_url": "245"
            },
            {
                "c_name": "Pay Type Master Details",
                "c_url": "/MainMasterkey/246",
                "n_menu_id": "1",
                "old_url": "246"
            },
            {
                "c_name": "Pincode Master",
                "c_url": "/MainMasterkey/800",
                "n_menu_id": "1",
                "old_url": "800"
            },
            {
                "c_name": "Pool Master",
                "c_url": "/MainMasterkey/144",
                "n_menu_id": "1",
                "old_url": "144"
            },
            {
                "c_name": "Primary sales Target Master",
                "c_url": "/primarysalestarget",
                "n_menu_id": "1",
                "old_url": "28"
            },
            {
                "c_name": "PRP Topic Master",
                "c_url": "/MainMasterkey/652",
                "n_menu_id": "1",
                "old_url": "650"
            },
            {
                "c_name": "PRP Type Master",
                "c_url": "/MainMasterkey/651",
                "n_menu_id": "1",
                "old_url": "649"
            },
            {
                "c_name": "Qualification Master",
                "c_url": "/MainMasterkey/449",
                "n_menu_id": "1",
                "old_url": "10053"
            },
            {
                "c_name": "Region Master",
                "c_url": "/MainMasterkey/13",
                "n_menu_id": "1",
                "old_url": "13"
            },
            {
                "c_name": "RPS Master",
                "c_url": "/MainMasterkey/540",
                "n_menu_id": "1",
                "old_url": "704"
            },
            {
                "c_name": "SFC Master Data Combination",
                "c_url": "/Auto_Sfc_Master_Entry_page",
                "n_menu_id": "1",
                "old_url": "12103"
            },
            {
                "c_name": "SKU Master",
                "c_url": "/MainMasterkey/26",
                "n_menu_id": "1",
                "old_url": "26"
            },
            {
                "c_name": "Speciality Master",
                "c_url": "/MainMasterkey/632",
                "n_menu_id": "1",
                "old_url": "10055"
            },
            {
                "c_name": "Study Master",
                "c_url": "/MainMasterkey/801",
                "n_menu_id": "1",
                "old_url": "801"
            },
            {
                "c_name": "Sub Area Master",
                "c_url": "/MainMasterkey/18",
                "n_menu_id": "1",
                "old_url": "18"
            },
            {
                "c_name": "Survey Group Master",
                "c_url": "/MainMasterkey/375",
                "n_menu_id": "1",
                "old_url": "349"
            },
            {
                "c_name": "Survey Master",
                "c_url": "/MainMasterkey/667",
                "n_menu_id": "1",
                "old_url": "10057"
            },
            {
                "c_name": "Survey Question Master",
                "c_url": "/MainMasterkey/307",
                "n_menu_id": "1",
                "old_url": "304"
            },
            {
                "c_name": "Target Group Master",
                "c_url": "/MainMasterkey/405",
                "n_menu_id": "1",
                "old_url": "358"
            },
            {
                "c_name": "Task Master",
                "c_url": "/MainMasterkey/240",
                "n_menu_id": "1",
                "old_url": "240"
            },
            {
                "c_name": "Unique Doctor Master",
                "c_url": "/Unique_Doc_Mst_List",
                "n_menu_id": "1",
                "old_url": "12102"
            },
            {
                "c_name": "VA Cover Mapping",
                "c_url": "/VA_Cover_Mapping",
                "n_menu_id": "1",
                "old_url": "758"
            },
            {
                "c_name": "VA Product Mapping",
                "c_url": "/Visual_AID_Product_Mapping",
                "n_menu_id": "1",
                "old_url": "752"
            },
            {
                "c_name": "Vacancy Master",
                "c_url": "/Vacancy_Master_List",
                "n_menu_id": "1",
                "old_url": "1777"
            },
            {
                "c_name": "Visual Aid Approval - Confirmation List",
                "c_url": "/Approv-Confirm",
                "n_menu_id": "1",
                "old_url": "10092"
            },
            {
                "c_name": "Visual Aid Approval Setup",
                "c_url": "/VA_Approval_Setup",
                "n_menu_id": "1",
                "old_url": "754"
            },
            {
                "c_name": "Visual Aid Confirmation Setup",
                "c_url": "/Visual_AID_Confirmation_Setup",
                "n_menu_id": "1",
                "old_url": "751"
            },
            {
                "c_name": "Visual Aid List Page",
                "c_url": "/Visual_AID_List",
                "n_menu_id": "1",
                "old_url": "750"
            },
            {
                "c_name": "Visual Aid Zip Excel Upload",
                "c_url": "/Va_excellUPLOAD",
                "n_menu_id": "1",
                "old_url": "10091"
            },
            {
                "c_name": "Visual Aid Zip File Upload",
                "c_url": "/VA_Zip_Excel_Upload",
                "n_menu_id": "1",
                "old_url": "10090"
            },
            {
                "c_name": "Work Contact Question Group Master",
                "c_url": "/MainMasterkey/378",
                "n_menu_id": "1",
                "old_url": "415"
            },
            {
                "c_name": "Work Type Master",
                "c_url": "/MainMasterkey/117",
                "n_menu_id": "1",
                "old_url": "117"
            },
            {
                "c_name": "Zone Master",
                "c_url": "/MainMasterkey/12",
                "n_menu_id": "1",
                "old_url": "12"
            },
            {
                "c_name": "Area List",
                "c_url": "/Report_AreaList",
                "n_menu_id": "2",
                "old_url": "51"
            },
            {
                "c_name": "Birthday Report",
                "c_url": "/doctors-birthday-report",
                "n_menu_id": "2",
                "old_url": "10093"
            },
            {
                "c_name": "Call Index / Master Call List",
                "c_url": "/mcl-call-index-list",
                "n_menu_id": "2",
                "old_url": "44"
            },
            {
                "c_name": "Category List",
                "c_url": "/category-list",
                "n_menu_id": "2",
                "old_url": "83"
            },
            {
                "c_name": "Category Wise Doctor List",
                "c_url": "/Dynamic_Report/CategoryWiseDoctorList",
                "n_menu_id": "2",
                "old_url": "105006"
            },
            {
                "c_name": "Chemist List",
                "c_url": "/Report_ChemistList",
                "n_menu_id": "2",
                "old_url": "86"
            },
            {
                "c_name": "Core Product Doctor List",
                "c_url": "/CoreProd_DocList",
                "n_menu_id": "2",
                "old_url": "109"
            },
            {
                "c_name": "Depot List",
                "c_url": "/report-depotList",
                "n_menu_id": "2",
                "old_url": "87"
            },
            {
                "c_name": "Doctor / Stockist List Report",
                "c_url": "/Rpt_StockDoc_list",
                "n_menu_id": "2",
                "old_url": "187"
            },
            {
                "c_name": "Doctor List",
                "c_url": "/Report_Doctor_List_Report",
                "n_menu_id": "2",
                "old_url": "84"
            },
            {
                "c_name": "Hospital1 List",
                "c_url": "/Hospital_List",
                "n_menu_id": "2",
                "old_url": "12095"
            },
            {
                "c_name": "Region Wise Doctor Details",
                "c_url": "/report-regionWiseDoctorDetails",
                "n_menu_id": "2",
                "old_url": "190"
            },
            {
                "c_name": "Stockist List",
                "c_url": "/stockist-report",
                "n_menu_id": "2",
                "old_url": "85"
            },
            {
                "c_name": "STP-View",
                "c_url": "/Report_STP_view",
                "n_menu_id": "2",
                "old_url": "105012"
            },
            {
                "c_name": "Village Master List",
                "c_url": "/MainMasterkey/681",
                "n_menu_id": "2",
                "old_url": "681"
            },
            {
                "c_name": "AM Consolidated Report",
                "c_url": "/Am_consolidate_report_category",
                "n_menu_id": "3",
                "old_url": "10096"
            },
            {
                "c_name": "AM Work Analysis Report",
                "c_url": "/Am_work_analysis_report",
                "n_menu_id": "3",
                "old_url": "22100"
            },
            {
                "c_name": "Call Frequency Analysis Report For Hospital1s",
                "c_url": "/Call_frequency_analysis_report_for_hospital",
                "n_menu_id": "3",
                "old_url": "20099"
            },
            {
                "c_name": "Chemist POB Summary Report",
                "c_url": "/Chemist_POB_Rpt",
                "n_menu_id": "3",
                "old_url": "11026"
            },
            {
                "c_name": "Consolidated Work Status Report For Manager",
                "c_url": "/consolidated-work-status-report-for-managers",
                "n_menu_id": "3",
                "old_url": "647"
            },
            {
                "c_name": "Consolidated Work Status Report For MR",
                "c_url": "/Consolidated_work_status_report_for_mr",
                "n_menu_id": "3",
                "old_url": "11019"
            },
            {
                "c_name": "Customer Visit Status Report",
                "c_url": "/customer-visit-status",
                "n_menu_id": "3",
                "old_url": "53"
            },
            {
                "c_name": "Day Wise Place of Work Report",
                "c_url": "/daywise-place-of-work",
                "n_menu_id": "3",
                "old_url": "10066"
            },
            {
                "c_name": "Daywise DWR/MWR Reported List Report",
                "c_url": "/report-daywise-dwr-reported-list",
                "n_menu_id": "3",
                "old_url": "10083"
            },
            {
                "c_name": "Daywise Visit Count Report",
                "c_url": "/daywise-visit-count-report",
                "n_menu_id": "3",
                "old_url": "10094"
            },
            {
                "c_name": "Doctor Brand Wise Competitor Report",
                "c_url": "/DoctorBrandWiseCompetitorReport",
                "n_menu_id": "3",
                "old_url": "10030"
            },
            {
                "c_name": "Doctor Chemist Brand Wise Competitor Report",
                "c_url": "/DoctorChemistBrandWiseCompetitorReport",
                "n_menu_id": "3",
                "old_url": "10031"
            },
            {
                "c_name": "Doctor Details Report",
                "c_url": "/docto_detail_report",
                "n_menu_id": "3",
                "old_url": "10086"
            },
            {
                "c_name": "Doctor Visit Transaction",
                "c_url": "/Doctor_visit_transaction_report",
                "n_menu_id": "3",
                "old_url": "32105"
            },
            {
                "c_name": "Doctor Wise Call Summary Report",
                "c_url": "/Doctor_wise_summary_report",
                "n_menu_id": "3",
                "old_url": "16097"
            },
            {
                "c_name": "DWR-Doctor Visit History",
                "c_url": "/doctor-visit-report",
                "n_menu_id": "3",
                "old_url": "105001"
            },
            {
                "c_name": "FS Day Wise Status Report For Hospital1",
                "c_url": "/Fs_day_wise_status_report_for_hospital",
                "n_menu_id": "3",
                "old_url": "12096"
            },
            {
                "c_name": "FS Monthly Activity Report",
                "c_url": "/fs-monthly-activity-report",
                "n_menu_id": "3",
                "old_url": "26102"
            },
            {
                "c_name": "FS Wise Day Wise Call Average Report",
                "c_url": "/report-fswise-daywise-callavg",
                "n_menu_id": "3",
                "old_url": "102"
            },
            {
                "c_name": "FS Wise Day Wise Call Average Report For Hospital1s",
                "c_url": "/fs-wise-day-wise-call-average-report-for-hospitals",
                "n_menu_id": "3",
                "old_url": "28103"
            },
            {
                "c_name": "HQ Wise Missed List Report",
                "c_url": "/report-hqwise-doctor-missed",
                "n_menu_id": "3",
                "old_url": "10070"
            },
            {
                "c_name": "Manager Call Summary Report",
                "c_url": "/new_mcr_summary",
                "n_menu_id": "3",
                "old_url": "58"
            },
            {
                "c_name": "Manager Field Activity Report",
                "c_url": "/ManagerFieldActivityReport",
                "n_menu_id": "3",
                "old_url": "639"
            },
            {
                "c_name": "Manager Login Details Report",
                "c_url": "/Rptmanager_login",
                "n_menu_id": "3",
                "old_url": "538"
            },
            {
                "c_name": "MCL Call Analysis",
                "c_url": "/mcl_call_analysis",
                "n_menu_id": "3",
                "old_url": "220"
            },
            {
                "c_name": "MCL Coverage Report",
                "c_url": "/mcl-coverage-report",
                "n_menu_id": "3",
                "old_url": "481"
            },
            {
                "c_name": "Missed DWR/MWR Report",
                "c_url": "/Missed_mcr_dcr_report",
                "n_menu_id": "3",
                "old_url": "534"
            },
            {
                "c_name": "Missed-Visited Summary Report",
                "c_url": "/Missed_visit_Summary_report",
                "n_menu_id": "3",
                "old_url": "558"
            },
            {
                "c_name": "Product Activity Report",
                "c_url": "/Product_activity_report",
                "n_menu_id": "3",
                "old_url": "687"
            },
            {
                "c_name": "Region Wise Doctor Visit Count",
                "c_url": "/Region_wise_doctor_visit_count_report",
                "n_menu_id": "3",
                "old_url": "36107"
            },
            {
                "c_name": "Tab/Web DWR Count Report",
                "c_url": "/Tab_web_dwr_count_report",
                "n_menu_id": "3",
                "old_url": "11003"
            },
            {
                "c_name": "TP Deviation Detail Report",
                "c_url": "/Mtp_deviation_report",
                "n_menu_id": "3",
                "old_url": "630"
            },
            {
                "c_name": "TP Entered Details Report",
                "c_url": "/mtp-entered-details-report",
                "n_menu_id": "3",
                "old_url": "321"
            },
            {
                "c_name": "TP Submitted List",
                "c_url": "/report-mtp-submitted-list",
                "n_menu_id": "3",
                "old_url": "10069"
            },
            {
                "c_name": "TP Template Plan Report",
                "c_url": "/tpt-plan-report",
                "n_menu_id": "3",
                "old_url": "34106"
            },
            {
                "c_name": "Visit Strategy Report",
                "c_url": "/Visit_Strategy",
                "n_menu_id": "3",
                "old_url": "11039"
            },
            {
                "c_name": "Apply Leave",
                "c_url": "/leave",
                "n_menu_id": "4",
                "old_url": "10043"
            },
            {
                "c_name": "Campaign Request (To Edit)",
                "c_url": "/campaignRequestList",
                "n_menu_id": "4",
                "old_url": "330"
            },
            {
                "c_name": "Campaign Request Entry",
                "c_url": "/campaignRequestList",
                "n_menu_id": "4",
                "old_url": "1203"
            },
            {
                "c_name": "Candidate Request Entry",
                "c_url": "/candidateRequest",
                "n_menu_id": "4",
                "old_url": "1010"
            },
            {
                "c_name": "Chemist POB Entry",
                "c_url": "/chemist_Pob_list",
                "n_menu_id": "4",
                "old_url": "11025"
            },
            {
                "c_name": "Circular View",
                "c_url": "/CircularView",
                "n_menu_id": "4",
                "old_url": "10032"
            },
            {
                "c_name": "CME/RTM Request",
                "c_url": "/CME_RTM_Request_List",
                "n_menu_id": "4",
                "old_url": "11034"
            },
            {
                "c_name": "Device Registration",
                "c_url": "/Device_Registration_Entry_List",
                "n_menu_id": "4",
                "old_url": "11040"
            },
            {
                "c_name": "Doctor Activity Request List",
                "c_url": "/DoctorActivityRequestList",
                "n_menu_id": "4",
                "old_url": "12097"
            },
            {
                "c_name": "Doctor Registration Upload",
                "c_url": "/dr-registration-upload",
                "n_menu_id": "4",
                "old_url": "11012"
            },
            {
                "c_name": "DWR Delete And Unlock Submission",
                "c_url": "/Dwr_delete_unblock_permission",
                "n_menu_id": "4",
                "old_url": "11005"
            },
            {
                "c_name": "DWR Entry",
                "c_url": "/dcr-list",
                "n_menu_id": "4",
                "old_url": "38"
            },
            {
                "c_name": "Expense Claim Entry(New)",
                "c_url": "/expenseclaimlist",
                "n_menu_id": "4",
                "old_url": "230"
            },
            {
                "c_name": "Input Confirmation In RPS Gift Cycle",
                "c_url": "/Inputconf_rpsgift",
                "n_menu_id": "4",
                "old_url": "12100"
            },
            {
                "c_name": "Manager TP Entry",
                "c_url": "/manager-mtp",
                "n_menu_id": "4",
                "old_url": "10035"
            },
            {
                "c_name": "Material Request Entry",
                "c_url": "/material_request",
                "n_menu_id": "4",
                "old_url": "252"
            },
            {
                "c_name": "MWR Entry",
                "c_url": "/dcr-list",
                "n_menu_id": "4",
                "old_url": "39"
            },
            {
                "c_name": "New Emp Mapping \u0026 Closing FS",
                "c_url": "/SAP_Mapping",
                "n_menu_id": "4",
                "old_url": "11015"
            },
            {
                "c_name": "Photo Image Upload",
                "c_url": "doctor-greeting-imageupload",
                "n_menu_id": "4",
                "old_url": "11007"
            },
            {
                "c_name": "PRP Request List",
                "c_url": "/mrprplist",
                "n_menu_id": "4",
                "old_url": "655"
            },
            {
                "c_name": "PSA Request List",
                "c_url": "/PSA_Request_Entry_List",
                "n_menu_id": "4",
                "old_url": "1780"
            },
            {
                "c_name": "RCPA",
                "c_url": "/RCPAList",
                "n_menu_id": "4",
                "old_url": "209"
            },
            {
                "c_name": "ROI Entry List",
                "c_url": "/ROIEntryList",
                "n_menu_id": "4",
                "old_url": "11022"
            },
            {
                "c_name": "RPS Brand Reminder Entry",
                "c_url": "/Rps_Gift",
                "n_menu_id": "4",
                "old_url": "11018"
            },
            {
                "c_name": "RPS Subimission",
                "c_url": "/rps",
                "n_menu_id": "4",
                "old_url": "11017"
            },
            {
                "c_name": "RSA Request",
                "c_url": "/RSA_Request",
                "n_menu_id": "4",
                "old_url": "105007"
            },
            {
                "c_name": "Sample Module",
                "c_url": "/sample",
                "n_menu_id": "4",
                "old_url": "48"
            },
            {
                "c_name": "SFC Request",
                "c_url": "/SFC_SetupList",
                "n_menu_id": "4",
                "old_url": "11036"
            },
            {
                "c_name": "SFC-SUBMISSION",
                "c_url": "/stp-submission",
                "n_menu_id": "4",
                "old_url": "35"
            },
            {
                "c_name": "Standard Fare Chart (SFC)",
                "c_url": "/sfcmr",
                "n_menu_id": "4",
                "old_url": "10038"
            },
            {
                "c_name": "TP Entry",
                "c_url": "/mrtp",
                "n_menu_id": "4",
                "old_url": "10034"
            },
            {
                "c_name": "TP Template",
                "c_url": "/tpt",
                "n_menu_id": "4",
                "old_url": "430"
            },
            {
                "c_name": "Update Doctor Request Entry",
                "c_url": "/Updatedoclist",
                "n_menu_id": "4",
                "old_url": "200"
            },
            {
                "c_name": "Activity At A Glance",
                "c_url": "/Report_ActivityAtAGlance",
                "n_menu_id": "5",
                "old_url": "527"
            },
            {
                "c_name": "Activity Progress Report",
                "c_url": "/Report_ActivityProgress",
                "n_menu_id": "5",
                "old_url": "384"
            },
            {
                "c_name": "Android Crash Management Report",
                "c_url": "/Dynamic_Report/rptCrashLog",
                "n_menu_id": "5",
                "old_url": "11032"
            },
            {
                "c_name": "APACT",
                "c_url": "/Report_Performance",
                "n_menu_id": "5",
                "old_url": "12104"
            },
            {
                "c_name": "Asset Details Report",
                "c_url": "/Rpt_asset_details",
                "n_menu_id": "5",
                "old_url": "11016"
            },
            {
                "c_name": "Brand Promotion Details Report",
                "c_url": "/brand-promotion-report",
                "n_menu_id": "5",
                "old_url": "10025"
            },
            {
                "c_name": "Brand Wise Speciality Wise Visit Details Report",
                "c_url": "/BrandWiseSpecialityWiseReport",
                "n_menu_id": "5",
                "old_url": "10024"
            },
            {
                "c_name": "Brandwise Itemwise Primary Sales",
                "c_url": "/report/7",
                "n_menu_id": "5",
                "old_url": "160"
            },
            {
                "c_name": "Campaign Status Report",
                "c_url": "/Dynamic_Report/CampaignStatusReport",
                "n_menu_id": "5",
                "old_url": "12105"
            },
            {
                "c_name": "Campaign Variance Report",
                "c_url": "/Dynamic_Report/campaignVarienceReport",
                "n_menu_id": "5",
                "old_url": "12113"
            },
            {
                "c_name": "Campaign Visit Frequency Report",
                "c_url": "/campaign-visit-frequency",
                "n_menu_id": "5",
                "old_url": "688"
            },
            {
                "c_name": "Consolidated Doctor Coverage Report",
                "c_url": "/Consolidated_DoctorCovearge",
                "n_menu_id": "5",
                "old_url": "10028"
            },
            {
                "c_name": "Core Product Wise Doctor Visit Status Report",
                "c_url": "/Coreproduct_doctorvisit",
                "n_menu_id": "5",
                "old_url": "10027"
            },
            {
                "c_name": "CSV Generation Report",
                "c_url": "/excel-generation-report",
                "n_menu_id": "5",
                "old_url": "11004"
            },
            {
                "c_name": "Daily Call Summary Report",
                "c_url": "/report-daily-call-summary",
                "n_menu_id": "5",
                "old_url": "429"
            },
            {
                "c_name": "Datewise Place of Work Report",
                "c_url": "/daywise-place-of-work",
                "n_menu_id": "5",
                "old_url": "57"
            },
            {
                "c_name": "Day Wise Status Report",
                "c_url": "/report-daywise-status",
                "n_menu_id": "5",
                "old_url": "10061"
            },
            {
                "c_name": "DCR/MCR Lock Release Report",
                "c_url": "/Dynamic_Report/DcrMcrLockRelease",
                "n_menu_id": "5",
                "old_url": "12126"
            },
            {
                "c_name": "Device Report",
                "c_url": "/Dynamic_Report/DeviceReport",
                "n_menu_id": "5",
                "old_url": "105004"
            },
            {
                "c_name": "Device Request Report",
                "c_url": "/Dynamic_Report/DeviceRequestReport",
                "n_menu_id": "5",
                "old_url": "105005"
            },
            {
                "c_name": "Doctor Call Report",
                "c_url": "/doctor-call-rept",
                "n_menu_id": "5",
                "old_url": "10074"
            },
            {
                "c_name": "Doctor ROI Report",
                "c_url": "/Doc_Roi_Rpt",
                "n_menu_id": "5",
                "old_url": "11020"
            },
            {
                "c_name": "Doctor Speciality Activity Progress Report",
                "c_url": "/doctor-speciality-activity-progress-report",
                "n_menu_id": "5",
                "old_url": "474"
            },
            {
                "c_name": "Doctor Speciality Wise Sample Tracking",
                "c_url": "/DoctorSpecialitySampleTracking",
                "n_menu_id": "5",
                "old_url": "10026"
            },
            {
                "c_name": "Doctor Visit HQ Wise Report",
                "c_url": "/Doctor_Visit_HQ_Wise_Rpt",
                "n_menu_id": "5",
                "old_url": "30055"
            },
            {
                "c_name": "DoctorWise ChemistWise BrandWise RCPA Report",
                "c_url": "/Dynamic_Report/docChemBrandWiseRcpa",
                "n_menu_id": "5",
                "old_url": "12115"
            },
            {
                "c_name": "DWR Received List",
                "c_url": "/report-dwr-recieve-list",
                "n_menu_id": "5",
                "old_url": "129"
            },
            {
                "c_name": "E-detailing Summary report",
                "c_url": "/Dynamic_Report/Edetailingsummary",
                "n_menu_id": "5",
                "old_url": "12118"
            },
            {
                "c_name": "E-detailing Timer Report",
                "c_url": "/Dynamic_Report/rptEdetailingTimer",
                "n_menu_id": "5",
                "old_url": "12114"
            },
            {
                "c_name": "Employee Account Details",
                "c_url": "/Report_EmployeesAccountDetails",
                "n_menu_id": "5",
                "old_url": "193"
            },
            {
                "c_name": "Expense Claim Consolidate Report",
                "c_url": "/ExpensClaimConsolidRrt",
                "n_menu_id": "5",
                "old_url": "426"
            },
            {
                "c_name": "Expense Claim Report For Fortnight",
                "c_url": "/ExpensClaimFortNightRrt",
                "n_menu_id": "5",
                "old_url": "24101"
            },
            {
                "c_name": "Field Activity Summary Report",
                "c_url": "/field-activity-report",
                "n_menu_id": "5",
                "old_url": "696"
            },
            {
                "c_name": "Field Activity Summary Report With Doctor Grade",
                "c_url": "/Field_Activity_Summary_Report",
                "n_menu_id": "5",
                "old_url": "12098"
            },
            {
                "c_name": "FS Wise Application Usage Report",
                "c_url": "/Dynamic_Report/fsApplnUsage",
                "n_menu_id": "5",
                "old_url": "12110"
            },
            {
                "c_name": "Fs Wise Core Product Mapped List Report",
                "c_url": "/Dynamic_Report/FsWiseCoreProductMapped",
                "n_menu_id": "5",
                "old_url": "12127"
            },
            {
                "c_name": "FS Wise Date Wise VA Wise Detailing Report",
                "c_url": "/FSDateVA_Wise_detailRpt",
                "n_menu_id": "5",
                "old_url": "20027"
            },
            {
                "c_name": "FS Wise Doctor Visit / Miss Status Report",
                "c_url": "/fswisedoctorvisit-report",
                "n_menu_id": "5",
                "old_url": "10029"
            },
            {
                "c_name": "FS Wise Primary/Secondary Sales Vs Target Consolidated Report",
                "c_url": "/report/5",
                "n_menu_id": "5",
                "old_url": "68"
            },
            {
                "c_name": "Geo Tracking Deviation Report",
                "c_url": "/GeoTrackingDeviation",
                "n_menu_id": "5",
                "old_url": "680"
            },
            {
                "c_name": "HQ Wise Field Activity Report",
                "c_url": "/HQ-day-wise-fa",
                "n_menu_id": "5",
                "old_url": "55"
            },
            {
                "c_name": "Implementation Status Report",
                "c_url": "/report_ImplementationStatus",
                "n_menu_id": "5",
                "old_url": "179"
            },
            {
                "c_name": "In Clinic Discussion Detail Report",
                "c_url": "/ClinicDiscussionReport",
                "n_menu_id": "5",
                "old_url": "11023"
            },
            {
                "c_name": "Input Utilization Report",
                "c_url": "/report-InputUtilisation",
                "n_menu_id": "5",
                "old_url": "340"
            },
            {
                "c_name": "Last Reported Date",
                "c_url": "/last-reported-date",
                "n_menu_id": "5",
                "old_url": "186"
            },
            {
                "c_name": "Login Distance Travel Report",
                "c_url": "/Report_LongDistanceTravel",
                "n_menu_id": "5",
                "old_url": "679"
            },
            {
                "c_name": "Manager Activity Summary report",
                "c_url": "/Dynamic_Report/managerActivitySummaryReport",
                "n_menu_id": "5",
                "old_url": "12116"
            },
            {
                "c_name": "Manager Calls Met Category Report",
                "c_url": "/Dynamic_Report/managerCallMetCategory",
                "n_menu_id": "5",
                "old_url": "12124"
            },
            {
                "c_name": "Manager Coverage Report",
                "c_url": "/Dynamic_Report/managerCoverageReport",
                "n_menu_id": "5",
                "old_url": "12128"
            },
            {
                "c_name": "Manager Doctor Visit Status Report",
                "c_url": "/Dynamic_Report/mangerDrVisitStatus",
                "n_menu_id": "5",
                "old_url": "12123"
            },
            {
                "c_name": "Manager Territory Coverage  Report",
                "c_url": "/Dynamic_Report/managerTeritoryCoverage",
                "n_menu_id": "5",
                "old_url": "12125"
            },
            {
                "c_name": "Manager Work Contact Report",
                "c_url": "/Manager_work_contact_report",
                "n_menu_id": "5",
                "old_url": "322"
            },
            {
                "c_name": "Managers Activity Progress Report",
                "c_url": "/manager-activity-progress-report",
                "n_menu_id": "5",
                "old_url": "578"
            },
            {
                "c_name": "Market Feedback Report",
                "c_url": "/Dynamic_Report/marketFeedbackReport",
                "n_menu_id": "5",
                "old_url": "12120"
            },
            {
                "c_name": "Material Request Detailed Report",
                "c_url": "/report-material-requst-detailed",
                "n_menu_id": "5",
                "old_url": "275"
            },
            {
                "c_name": "Month Wise Work Summary Report",
                "c_url": "/month_wise_work_summary",
                "n_menu_id": "5",
                "old_url": "604"
            },
            {
                "c_name": "New FS Day Wise Status Report",
                "c_url": "/new-fs-daywise-status",
                "n_menu_id": "5",
                "old_url": "399"
            },
            {
                "c_name": "Overall Application Usage",
                "c_url": "/Dynamic_Report/applicationUsage",
                "n_menu_id": "5",
                "old_url": "12111"
            },
            {
                "c_name": "POB Daywise Details Report",
                "c_url": "/Pob_Daywise_Details_report",
                "n_menu_id": "5",
                "old_url": "14096"
            },
            {
                "c_name": "Pool Wise Primary/Secondary Sales Vs Target Report",
                "c_url": "/report/8",
                "n_menu_id": "5",
                "old_url": "71"
            },
            {
                "c_name": "Prescriber - Non Prescriber Status Report",
                "c_url": "/Dynamic_Report/prescribingReport",
                "n_menu_id": "5",
                "old_url": "12117"
            },
            {
                "c_name": "Primary Sales Status",
                "c_url": "/report/11",
                "n_menu_id": "5",
                "old_url": "166"
            },
            {
                "c_name": "Product Doctor Mapped List Report",
                "c_url": "/report_productDoctorMappedList",
                "n_menu_id": "5",
                "old_url": "493"
            },
            {
                "c_name": "Region Wise Category Wise Doctor Visit Report",
                "c_url": "/regionwise-categorywise-doctor-status",
                "n_menu_id": "5",
                "old_url": "290"
            },
            {
                "c_name": "Region Wise Doctor Visit Status Report",
                "c_url": "/Regionwise_docVisit_sttausRpt",
                "n_menu_id": "5",
                "old_url": "390"
            },
            {
                "c_name": "Regional Field Activity Summary Report",
                "c_url": "/RegionField_Activerpt",
                "n_menu_id": "5",
                "old_url": "386"
            },
            {
                "c_name": "RPS Request Admin View ",
                "c_url": "/RPS_Request_Admin_View",
                "n_menu_id": "5",
                "old_url": "11029"
            },
            {
                "c_name": "Rps Stock Status Report",
                "c_url": "/Dynamic_Report/rpsStockStatusReport",
                "n_menu_id": "5",
                "old_url": "11031"
            },
            {
                "c_name": "RPS Upload Status Report",
                "c_url": "/Dynamic_Report/rpsUploadStatusReport",
                "n_menu_id": "5",
                "old_url": "11030"
            },
            {
                "c_name": "Secondary Sales",
                "c_url": "/report/9",
                "n_menu_id": "5",
                "old_url": "162"
            },
            {
                "c_name": "Secondary Sales Consolidated Report",
                "c_url": "/report/10",
                "n_menu_id": "5",
                "old_url": "75"
            },
            {
                "c_name": "Stockistwise FSwise Primary Sales",
                "c_url": "/report/6",
                "n_menu_id": "5",
                "old_url": "156"
            },
            {
                "c_name": "StockistWise PrimarySales",
                "c_url": "/report/6",
                "n_menu_id": "5",
                "old_url": "665"
            },
            {
                "c_name": "Territory Based Manager Coverage Report",
                "c_url": "/Territory_manager_rpt",
                "n_menu_id": "5",
                "old_url": "537"
            },
            {
                "c_name": "Territory Wise Breakup Of Speciality Doctors",
                "c_url": "/Territory_Wise_Breakup_of_Speciality_Dr",
                "n_menu_id": "5",
                "old_url": "435"
            },
            {
                "c_name": "Update Doctor Request Log Details Report",
                "c_url": "/Doctor_Request_log_details_Rpt",
                "n_menu_id": "5",
                "old_url": "212"
            },
            {
                "c_name": "Visit Frequency Report",
                "c_url": "/Visit_Frequency_Rpt",
                "n_menu_id": "5",
                "old_url": "622"
            },
            {
                "c_name": "Work Plan Report",
                "c_url": "/report-work-plan",
                "n_menu_id": "5",
                "old_url": "105"
            },
            {
                "c_name": "FS Transfer",
                "c_url": "/FsTransfer",
                "n_menu_id": "6",
                "old_url": "18098"
            },
            {
                "c_name": "Region Wise Holiday Entry",
                "c_url": "/regionholidaymapp",
                "n_menu_id": "6",
                "old_url": "33"
            },
            {
                "c_name": "Resigned FS Details",
                "c_url": "/Resigned_FS_Details",
                "n_menu_id": "6",
                "old_url": "283"
            },
            {
                "c_name": "Area Wise Primary/Secondary Sales Vs Target",
                "c_url": "/report_areaWisePriSecoSalesVTarget",
                "n_menu_id": "7",
                "old_url": "69"
            },
            {
                "c_name": "Primary Sales Analysis Report",
                "c_url": "/Dynamic_Report/primarySalesAnalysisReport",
                "n_menu_id": "7",
                "old_url": "12112"
            },
            {
                "c_name": "Product wise Sales Target Analysis-Consolidated Report",
                "c_url": "/Dynamic_Report/productWiseSalesTarget",
                "n_menu_id": "7",
                "old_url": "12119"
            },
            {
                "c_name": "Device Registration Mapping",
                "c_url": "/Device_Registration_Mapping",
                "n_menu_id": "8",
                "old_url": "105003"
            },
            {
                "c_name": "DSCA Display Name Update",
                "c_url": "/DSCA_DisplayNameUpdate",
                "n_menu_id": "8",
                "old_url": "1204"
            },
            {
                "c_name": "KRA Dashboard",
                "c_url": "Report_Performance",
                "n_menu_id": "8",
                "old_url": "11041"
            },
            {
                "c_name": "Campaign Confirmation List",
                "c_url": "/adminConfirmationList",
                "n_menu_id": "9",
                "old_url": "10033"
            },
            {
                "c_name": "Campaign Request ( Approval)",
                "c_url": "/managerCampaign",
                "n_menu_id": "9",
                "old_url": "338"
            },
            {
                "c_name": "Candidate Confirm",
                "c_url": "/CandidateConfirmation",
                "n_menu_id": "9",
                "old_url": "1012"
            },
            {
                "c_name": "Candidate Request Approval",
                "c_url": "/CandidateApproval",
                "n_menu_id": "9",
                "old_url": "1011"
            },
            {
                "c_name": "Candidate Request HR Confirmation",
                "c_url": "/candidatehrconfirm",
                "n_menu_id": "9",
                "old_url": "1014"
            },
            {
                "c_name": "Chemist POB Approval",
                "c_url": "/chemist_pob_approve",
                "n_menu_id": "9",
                "old_url": "11024"
            },
            {
                "c_name": "CME/RTM Approval",
                "c_url": "/CME_RTM_Approval_List",
                "n_menu_id": "9",
                "old_url": "11035"
            },
            {
                "c_name": "DCR/MCR Approval Screen",
                "c_url": "DCR_Approval_Screen",
                "n_menu_id": "9",
                "old_url": "11033"
            },
            {
                "c_name": "Device Registration Approval",
                "c_url": "/Device_Registration_Approval_List",
                "n_menu_id": "9",
                "old_url": "12121"
            },
            {
                "c_name": "Device Registration Confirmation",
                "c_url": "/Device_Registration_Confirmation_List",
                "n_menu_id": "9",
                "old_url": "12122"
            },
            {
                "c_name": "Doctor Registration Upload Approval",
                "c_url": "/dr-registration-approval",
                "n_menu_id": "9",
                "old_url": "11013"
            },
            {
                "c_name": "Doctor Tagging",
                "c_url": "/doctor-tagging",
                "n_menu_id": "9",
                "old_url": "11008"
            },
            {
                "c_name": "DWR Delete And Unlock Approve/Reject",
                "c_url": "/Dwr_unlock_approve_reject",
                "n_menu_id": "9",
                "old_url": "11006"
            },
            {
                "c_name": "Expense Claim Approval",
                "c_url": "/expenseclaimlist",
                "n_menu_id": "9",
                "old_url": "261"
            },
            {
                "c_name": "Expense Claim Confirmation / Re-Confirmation",
                "c_url": "/expenseclaimlist",
                "n_menu_id": "9",
                "old_url": "262"
            },
            {
                "c_name": "HCP Medical Confirmation",
                "c_url": "/Hcp_doc_Appr_conf",
                "n_menu_id": "9",
                "old_url": "11027"
            },
            {
                "c_name": "Leave Approval",
                "c_url": "/leave_approval",
                "n_menu_id": "9",
                "old_url": "112"
            },
            {
                "c_name": "Material Request Approval",
                "c_url": "/manager_material",
                "n_menu_id": "9",
                "old_url": "265"
            },
            {
                "c_name": "Material Request Confirmation",
                "c_url": "/manager_material",
                "n_menu_id": "9",
                "old_url": "266"
            },
            {
                "c_name": "PRP Approval List Page",
                "c_url": "/PrpApprovallist",
                "n_menu_id": "9",
                "old_url": "658"
            },
            {
                "c_name": "PRP Confirmation List",
                "c_url": "/ConfirmationList",
                "n_menu_id": "9",
                "old_url": "657"
            },
            {
                "c_name": "PSA Approval",
                "c_url": "/PSA_Approve",
                "n_menu_id": "9",
                "old_url": "12106"
            },
            {
                "c_name": "RPS Approval \u0026 Confirmation",
                "c_url": "/Rps_Req_Con_List_main",
                "n_menu_id": "9",
                "old_url": "11028"
            },
            {
                "c_name": "RPS Approval/Confirmation",
                "c_url": "/rps-manager",
                "n_menu_id": "9",
                "old_url": "546"
            },
            {
                "c_name": "RPS Desk Head",
                "c_url": "/rps-deskHeadadmin",
                "n_menu_id": "9",
                "old_url": "10036"
            },
            {
                "c_name": "RSA Approval",
                "c_url": "/RSA_Approval",
                "n_menu_id": "9",
                "old_url": "105009"
            },
            {
                "c_name": "RSA Confirmation",
                "c_url": "/RSA_Confirmation",
                "n_menu_id": "9",
                "old_url": "105010"
            },
            {
                "c_name": "RSA Verifier",
                "c_url": "/RSA_Verification",
                "n_menu_id": "9",
                "old_url": "105008"
            },
            {
                "c_name": "Sample Confirmation",
                "c_url": "/sample",
                "n_menu_id": "9",
                "old_url": "157"
            },
            {
                "c_name": "Secondary Sales Approval",
                "c_url": "/SSalesApproval",
                "n_menu_id": "9",
                "old_url": "10040"
            },
            {
                "c_name": "SFC Approval",
                "c_url": "/Auto_SFC_Approval_list",
                "n_menu_id": "9",
                "old_url": "11037"
            },
            {
                "c_name": "SFC Confirmation",
                "c_url": "/Auto_SFC_Confirmation_List",
                "n_menu_id": "9",
                "old_url": "11038"
            },
            {
                "c_name": "Standard Fare Chart (SFC) List",
                "c_url": "/sfclistadmin",
                "n_menu_id": "9",
                "old_url": "10039"
            },
            {
                "c_name": "TP Approval",
                "c_url": "/manager-mtp",
                "n_menu_id": "9",
                "old_url": "395"
            },
            {
                "c_name": "Unique Doctor Confirmation ",
                "c_url": "/Unique_Doc_Appr_Conf",
                "n_menu_id": "9",
                "old_url": "12101"
            },
            {
                "c_name": "Update Doctor Request Approval",
                "c_url": "/Managerdoctorlist",
                "n_menu_id": "9",
                "old_url": "10041"
            },
            {
                "c_name": "Update Doctor Request Confirmation",
                "c_url": "/Admindoctorlist",
                "n_menu_id": "9",
                "old_url": "10042"
            },
            {
                "c_name": "Adopted Doctor Deletion",
                "c_url": "/Adopted_Doctor_Deletion",
                "n_menu_id": "10",
                "old_url": "12099"
            },
            {
                "c_name": "Doctor Input Allocation",
                "c_url": "/Doctor_Sample_list",
                "n_menu_id": "10",
                "old_url": "105002"
            },
            {
                "c_name": "Download/Upload Excel",
                "c_url": "/upload-data",
                "n_menu_id": "10",
                "old_url": "161"
            },
            {
                "c_name": "DSC Bulk Inactivation List",
                "c_url": "/DSC_Bulk_Inactivation",
                "n_menu_id": "10",
                "old_url": "677"
            },
            {
                "c_name": "Expense Lock Activation",
                "c_url": "/Expense_Lock_activform",
                "n_menu_id": "10",
                "old_url": "310"
            },
            {
                "c_name": "FS Hierarchy",
                "c_url": "/fs-hierarchy",
                "n_menu_id": "10",
                "old_url": "150"
            },
            {
                "c_name": "Marketing User Rights",
                "c_url": "/MKT_User_Rights",
                "n_menu_id": "10",
                "old_url": "525"
            },
            {
                "c_name": "Mkt Trace Password",
                "c_url": "/mkt_tracepassword",
                "n_menu_id": "10",
                "old_url": "759"
            },
            {
                "c_name": "Shift Expense Claim Desk",
                "c_url": "/Expenseclaim_shiftdesk",
                "n_menu_id": "10",
                "old_url": "309"
            },
            {
                "c_name": "Primary Sales Entry",
                "c_url": "/primarysale",
                "n_menu_id": "11",
                "old_url": "45"
            },
            {
                "c_name": "Secondary Sales Entry",
                "c_url": "/secondarysale",
                "n_menu_id": "11",
                "old_url": "46"
            },
            {
                "c_name": "Setup Module",
                "c_url": "/user-setting",
                "n_menu_id": "13",
                "old_url": "1001"
            },
            {
                "c_name": "Exceptional RPS/PRP Report",
                "c_url": "/prprpsexceptionalrpt",
                "n_menu_id": "14",
                "old_url": "10020"
            },
            {
                "c_name": "PRP - RPS History Details Report",
                "c_url": "/Rpt_RPSDocWiseInvstmntDetailsReport",
                "n_menu_id": "14",
                "old_url": "10017"
            },
            {
                "c_name": "PRP Activity Report",
                "c_url": "/PRP_Activity_Rpt",
                "n_menu_id": "14",
                "old_url": "10014"
            },
            {
                "c_name": "PRP and RPS FS wise Investment History Report",
                "c_url": "/RPSINVESTReport",
                "n_menu_id": "14",
                "old_url": "10016"
            },
            {
                "c_name": "PRP Brand Wise Activity Report",
                "c_url": "/prpbrandReport",
                "n_menu_id": "14",
                "old_url": "10015"
            },
            {
                "c_name": "PRP Consolidated Report",
                "c_url": "/prpconsolidatedreport",
                "n_menu_id": "14",
                "old_url": "10018"
            },
            {
                "c_name": "PRP Details Report",
                "c_url": "/PRPDetailsReport",
                "n_menu_id": "14",
                "old_url": "10023"
            },
            {
                "c_name": "RPS Activity Report",
                "c_url": "/rpsactivityReport",
                "n_menu_id": "14",
                "old_url": "10019"
            },
            {
                "c_name": "RPS Brand Wise Report",
                "c_url": "/RPS_BrandWise_Rpt",
                "n_menu_id": "14",
                "old_url": "10021"
            },
            {
                "c_name": "RPS Consolidated Report",
                "c_url": "/RPSConsolidatedReport",
                "n_menu_id": "14",
                "old_url": "10022"
            },
            {
                "c_name": "Secondary Sales Target",
                "c_url": "/secondarysalestarget",
                "n_menu_id": "17",
                "old_url": "10013"
            },
            {
                "c_name": "Detail Leave Report",
                "c_url": "/report-detail-leave",
                "n_menu_id": "18",
                "old_url": "10068"
            },
            {
                "c_name": "Employee Leave Balance Report",
                "c_url": "/employee-leave-balance-report",
                "n_menu_id": "18",
                "old_url": "461"
            },
            {
                "c_name": "Fs Leave Report",
                "c_url": "/FSleavereport",
                "n_menu_id": "18",
                "old_url": "10081"
            },
            {
                "c_name": "Holiday List",
                "c_url": "/holiday-list",
                "n_menu_id": "18",
                "old_url": "88"
            },
            {
                "c_name": "Leave Balance Report",
                "c_url": "/report-leave-balance",
                "n_menu_id": "18",
                "old_url": "10067"
            },
            {
                "c_name": "UserID-Password Details Report",
                "c_url": "/userid-password-details-report",
                "n_menu_id": "18",
                "old_url": "320"
            },
            {
                "c_name": "Messages",
                "c_url": "/messagezone",
                "n_menu_id": "19",
                "old_url": "9"
            },
            {
                "c_name": "DWR Variance Report",
                "c_url": "/report-mwr-dwr-variance",
                "n_menu_id": "28",
                "old_url": "300"
            },
            {
                "c_name": "SFC - DWR Variance Report",
                "c_url": "/sfcvsdwr_report",
                "n_menu_id": "28",
                "old_url": "61"
            },
            {
                "c_name": "SFC - TP Variance Report",
                "c_url": "/Sfc_Tp_Variance_rpt",
                "n_menu_id": "28",
                "old_url": "62"
            },
            {
                "c_name": "TP - DWR Doctor Visit Variance Report",
                "c_url": "/Tp_Dwr_Doc_visit_Var_rpt",
                "n_menu_id": "28",
                "old_url": "67"
            },
            {
                "c_name": "TP - DWR Variance Report",
                "c_url": "/report-tp-dwr-variance",
                "n_menu_id": "28",
                "old_url": "10084"
            },
            {
                "c_name": "Sample Dispatch Details Report",
                "c_url": "/report/15",
                "n_menu_id": "29",
                "old_url": "66"
            },
            {
                "c_name": "Sample Dispatch Note Report",
                "c_url": "/sampledispatch_NoteRpt",
                "n_menu_id": "29",
                "old_url": "66"
            },
            {
                "c_name": "Sample Stock Balance",
                "c_url": "/report/1",
                "n_menu_id": "29",
                "old_url": "98"
            },
            {
                "c_name": "Sample Stock Ledger Report",
                "c_url": "/Sample_Stock_ledger_rpt",
                "n_menu_id": "29",
                "old_url": "97"
            },
            {
                "c_name": "Samples Status",
                "c_url": "/report/2",
                "n_menu_id": "29",
                "old_url": "104"
            },
            {
                "c_name": "SDN Summary Report",
                "c_url": "/report/14",
                "n_menu_id": "29",
                "old_url": "670"
            },
            {
                "c_name": "SDN vs Confirmation",
                "c_url": "/SDN_vs_Confirmation",
                "n_menu_id": "29",
                "old_url": "167"
            }
        ],
        "submenu": [
            {
                "c_image": "mastericon.svg",
                "c_name": "All Master",
                "n_id": "1"
            },
            {
                "c_image": "customer_list.png",
                "c_name": "Customer List",
                "n_id": "2"
            },
            {
                "c_image": "visit_related.svg",
                "c_name": "Visit  Related",
                "n_id": "3"
            },
            {
                "c_image": "Operational_menu.svg",
                "c_name": "Operational",
                "n_id": "4"
            },
            {
                "c_image": "analysis.svg",
                "c_name": "Report",
                "n_id": "5"
            },
            {
                "c_image": "young-man-with-tie.svg",
                "c_name": "Hr Module",
                "n_id": "6"
            },
            {
                "c_image": "charts.svg",
                "c_name": "Sales Report",
                "n_id": "7"
            },
            {
                "c_image": "cogwheels.svg",
                "c_name": "Utility",
                "n_id": "8"
            },
            {
                "c_image": "visit_related.svg",
                "c_name": "Authorisation",
                "n_id": "9"
            },
            {
                "c_image": "mastericon.svg",
                "c_name": "Others",
                "n_id": "10"
            },
            {
                "c_image": "charts.svg",
                "c_name": "Sales",
                "n_id": "11"
            },
            {
                "c_image": "Operational_menu.svg",
                "c_name": "Option",
                "n_id": "13"
            },
            {
                "c_image": "analysis.svg",
                "c_name": "Prp And Rps Reports",
                "n_id": "14"
            },
            {
                "c_image": "target.svg",
                "c_name": "Target",
                "n_id": "17"
            },
            {
                "c_image": "cogwheels.svg",
                "c_name": "Hr Reports",
                "n_id": "18"
            },
            {
                "c_image": "Message.svg",
                "c_name": "Message",
                "n_id": "19"
            },
            {
                "c_image": "Expense_document.svg",
                "c_name": "Expense",
                "n_id": "20"
            },
            {
                "c_image": "Mapping.svg",
                "c_name": "Mapping",
                "n_id": "21"
            },
            {
                "c_image": "Competitor.svg",
                "c_name": "Competitor",
                "n_id": "22"
            },
            {
                "c_image": "gadget.svg",
                "c_name": "Gadget",
                "n_id": "24"
            },
            {
                "c_image": "letter.svg",
                "c_name": "Circular",
                "n_id": "25"
            },
            {
                "c_image": "Investment.svg",
                "c_name": "Investment Master",
                "n_id": "26"
            },
            {
                "c_image": "flyer.svg",
                "c_name": "Material Master",
                "n_id": "27"
            },
            {
                "c_image": "Different.svg",
                "c_name": "Variance",
                "n_id": "28"
            },
            {
                "c_image": "sample.svg",
                "c_name": "Sample",
                "n_id": "29"
            }
        ]
    }

    const data = [{
        title: 'Menu',
        sub: arr['submenu'].reduce((prev, item) => {
            prev.push({ title: item['c_name'], sub: arr['Menu'].filter(i => i['n_menu_id'] === item['n_id']).map(i => ({ ...i, title: i['c_name'], sub: [] })) })
            return prev
        }, [])
    }]

    console.log(data)

    return (
        <div className='Family_tree_wrapp'>
            <div className="Family_tree_content">
                {data.map(item => {
                    return <SubTree heading={item['title']} subTreeContent={item['sub']} />
                })}
            </div>
        </div>
    )
}

export default Family_tree


const SubTree = ({ heading, subTreeContent }) => {
    console.log(subTreeContent, heading)
    const [isOpen, setIsOpen] = useState(false)
    return <div style={{ marginLeft: '20px' }}>
        <button className='Family_tree_main_head' onClick={() => setIsOpen(p => !p)}>
            {subTreeContent.length > 0 ? '+' : ''} {heading}
        </button>
        {subTreeContent.length > 0 && isOpen && subTreeContent.map(i => {
            return <SubTree heading={i['title']} subTreeContent={i['sub'] || []} />
        })}
    </div>

}
