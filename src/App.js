import './App.css';

import { Abbottcontainer } from './abbott/Abbottcontainer';
// import { Abbott_page_2_container } from './abbott_page_2/Abbott_page_2_container';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Googlemap } from './googleMap/Googlemap';
import { Map } from './googleMap/Map';
import { Maapp2 } from './googleMap/Maapp2';
import { Design } from './design/Design';
import { Looping } from './looping/Looping';
import { Dropdown } from './dropdowns/Dropdown';
import { Bootstrapoverlay } from './dropdowns/Bootstrapoverlay';
import { Dropdownwithcheckbox } from './dropdownwithcheckbox/Dropdownwithcheckbox';
import { Localstorage } from './local storage/Localstorage';
import { Card } from './components/Card';
import Uplaod from './uplaod/Uplaod';
import Rejex_validator from './rejex_validator/Rejex_validator';
import { Pagination } from './pagination/Pagination';
import { ReactPagination } from './pagination/ReactPagination';
import InputPage from './crud/InputPage';
import TableShow from './crud/TableShow';
import Corousel from './corousel/Corousel';
import Download from './uplaod/Download';
import HtmlToImage from './HtmlToImage/HtmlToImage';
import Zipdecompress from './ZIPPER/Zipdecompress';
import Tabbreadcrums from './Tab/Tabbreadcrums';
import BaseUrlToFile from './BaseUrlToFile/BaseUrlToFile';
import StoreFileInSession from './StoreFileInSession/StoreFileInSession';
import BaseUrlTobinaryToFile from './BaseUrlToFile/BaseUrlTobinaryToFile';
import Rcpa from './rcpa/Rcpa';
import React_Slick from './react_slick/React_Slick';
import Takebasiccopm from './basiccomponent/Takebasiccopm';
import Bcflazyload from './bcflazyload/Bcflazyload';
import ExporttoXls from './ExporttoXls/ExporttoXls';
import Onclickdropdown from './Onclickdropdown/Onclickdropdown';
import ResponsivePopUp from './Popup/ResponsivePopUp';
import Lazy_loading from './Lazy_Loading/Lazy_loading';
import { Col, Row } from 'react-bootstrap';
import Side_Bar from './Side_Bar';
import Logon_Page from './Logon_Page/Logon_Page';
import React from 'react';
import My_calender from './calender/My_calender';

function AunthincateRoute(link, Page) {
  return <>
    <React.Fragment>
      {/* <Side_Bar /> */}
      <Route path={link} element={<Page />} />
    </React.Fragment>
  </>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login_Page" exact element={<Logon_Page />} />
        {AunthincateRoute("/abbottcontainer", Abbottcontainer)}
        {AunthincateRoute("/googlemaps", Googlemap)}
        {AunthincateRoute("/map", Map)}
        {AunthincateRoute("/map2", Maapp2)}
        {AunthincateRoute("/Design", Design)}
        {AunthincateRoute("/Looping", Looping)}
        {AunthincateRoute("/Dropdown", Dropdown)}
        {AunthincateRoute("/Bootstrapoverlay", Bootstrapoverlay)}
        {AunthincateRoute("/Dropdownwithcheckbox", Dropdownwithcheckbox)}
        {AunthincateRoute("/Localstorage", Localstorage)}
        {AunthincateRoute("/Uplaod", Uplaod)}
        {AunthincateRoute("/Rejex_validator", Rejex_validator)}
        {AunthincateRoute("/Pagination", Pagination)}
        {AunthincateRoute("/ReactPagination", ReactPagination)}
        {AunthincateRoute("/InputPage/:id", InputPage)}
        {AunthincateRoute("/TableShow", TableShow)}
        {AunthincateRoute("/Corousel", Corousel)}
        {AunthincateRoute("/Download", Download)}
        {AunthincateRoute("/HtmlToImage", HtmlToImage)}
        {AunthincateRoute("/Zipdecompress", Zipdecompress)}
        {AunthincateRoute("/Tabbreadcrums", Tabbreadcrums)}
        {AunthincateRoute("/BaseUrlToFile", BaseUrlToFile)}
        {AunthincateRoute("/StoreFileInSession", StoreFileInSession)}
        {AunthincateRoute("/BaseUrlTobinaryToFile", BaseUrlTobinaryToFile)}
        {AunthincateRoute("/Rcpa", Rcpa)}
        {AunthincateRoute("/React_Slick", React_Slick)}
        {AunthincateRoute("/Takebasiccopm", Takebasiccopm)}
        {AunthincateRoute("/bcflazyload", Bcflazyload)}
        {AunthincateRoute("/ExporttoXls", ExporttoXls)}
        {AunthincateRoute("/Onclickdropdown", ExporttoXls)}\
        {AunthincateRoute("/ResponsivePopUp", ResponsivePopUp)}
        {AunthincateRoute("/Lazy_loading", Lazy_loading)}
        {/* {AunthincateRoute("/Calender", New_Calender)} */}
        {AunthincateRoute("/My_calender", My_calender)}
      </Routes>
    </BrowserRouter>

  )
}

export default App;
