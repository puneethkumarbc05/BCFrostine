import './App.css';

import { Abbottcontainer } from './abbott/Abbottcontainer';
import { Abbott_page_2_container } from './abbott_page_2/Abbott_page_2_container';
import { BrowserRouter, Link, Route, Routes, useRoutes } from 'react-router-dom';
import { Googlemap } from './googleMap/Googlemap';
import { Map } from './googleMap/Map';
import { Maapp2 } from './googleMap/Maapp2';
import { Design } from './design/Design';
import { Looping } from './looping/Looping';
import { Dropdown } from './dropdowns/Dropdown';
import { Bootstrapoverlay } from './dropdowns/Bootstrapoverlay';
import { Dropdownwithcheckbox } from './dropdownwithcheckbox/Dropdownwithcheckbox';
import { Localstorage } from './local storage/Localstorage';
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
import Logon_Page from './Logon_Page/Logon_Page';
import React, { Suspense } from 'react';
import { _menu_list } from './_menu_List';
import My_calender from './calender/My_calender';
import Header from './landingPages/Header';
import Async_Await_for_Looping from './Async_Await_for_Looping/Async_Await_for_Looping';
import Menu_bar from './Menu_bar/component/Menu_bar';

function AunthincateRoute(link, Page) {
  return <>
    <React.Fragment>
      <Route path={link} element={<Page />} />
    </React.Fragment>
  </>
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Logon_Page />} />
          {AunthincateRoute("/Bootstrapoverlay", Bootstrapoverlay)}
          {AunthincateRoute("/abbottcontainer", Abbottcontainer)}
          {AunthincateRoute("/googlemaps", Googlemap)}
          {AunthincateRoute("/map", Map)}
          {AunthincateRoute("/map2", Maapp2)}
          {AunthincateRoute("/Design", Design)}
          {AunthincateRoute("/Looping", Looping)}
          {AunthincateRoute("/Dropdown", Dropdown)}
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
          {AunthincateRoute("/Onclickdropdown", Onclickdropdown)}
          {AunthincateRoute("/ResponsivePopUp", ResponsivePopUp)}
          {AunthincateRoute("/Lazy_loading", Lazy_loading)}
          {AunthincateRoute("/My_calender", My_calender)}
          {AunthincateRoute("/Header", Header)}
          {AunthincateRoute("/Async_Await_for_Looping", Async_Await_for_Looping)}
          {AunthincateRoute("/Menu_bar", Menu_bar)}
          {AunthincateRoute("/Profile_Card", React.lazy(() => import('./Profile_Card/component/Profile_Card')))}
          {AunthincateRoute("/Image_scroll_Animation", React.lazy(() => import('./Image_scroll_Animation/container/Image_scroll_Animation')))}
          {AunthincateRoute("/Graphs", React.lazy(() => import('./Ag_Graphs/Graphs')))}
          {AunthincateRoute("/Web_Cam", React.lazy(() => import('./Web_Cam/wrapper/Web_Cam')))}
          {AunthincateRoute("/TicTacToe", React.lazy(() => import('./games/TicTacToe/component/TicTacToe')))}
          {AunthincateRoute("/Video_Background", React.lazy(() => import('./Video_Background/container/Video_Background')))}
          {AunthincateRoute("/Image_Reader", React.lazy(() => import('./Image_Reader/container/Image_Reader')))}
        </Routes>
      </BrowserRouter>
    </Suspense>

  )
}

export default App;
