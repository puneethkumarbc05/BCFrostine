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
import { Calender } from './calander/Calender';
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

function App() {
  return (
    <BrowserRouter>
      <Link to='/abbottcontainer' ></Link>
      {/* <Link to='/abbott_page_2_container' ></Link> */}
      <Link to='/googlemaps' ></Link>
      <Link to='/map' ></Link>
      <Link to='/map2' ></Link>
      <Link to='/Design' ></Link>
      <Link to='/Looping' ></Link>
      <Link to='/Dropdown' ></Link>
      <Link to='/Bootstrapoverlay' ></Link>
      <Link to='/Dropdownwithcheckbox' ></Link>
      <Link to='/Localstorage' ></Link>
      <Link to='/Calender' ></Link>
      <Link to='/Card' ></Link>
      <Link to='/Uplaod' ></Link>
      <Link to='/Rejex_validator' ></Link>
      <Link to='/Pagination' ></Link>
      <Link to='/ReactPagination' ></Link>
      <Link to='/InputPage/:id' ></Link>
      <Link to='/TableShow' ></Link>
      <Link to='/Corousel' ></Link>
      <Link to='/Download' ></Link>
      <Link to='/HtmlToImage' ></Link>
      <Link to='/Zipdecompress' ></Link>
      <Link to='/Tabbreadcrums' ></Link>
      <Link to='/BaseUrlToFile' ></Link>
      <Link to='/StoreFileInSession' ></Link>
      <Link to='/BaseUrlTobinaryToFile' ></Link>
      <Link to='/Rcpa' ></Link>
      <Link to='/React_Slick' ></Link>
      <Link to='/Takebasiccopm' ></Link>
      <Link to='/bcflazyload' ></Link>
      <Routes>
        <Route path='abbottcontainer' element={<Abbottcontainer />} />
        {/* <Route path='abbott_page_2_container' element={<Abbott_page_2_container />} /> */}
        <Route path='googlemaps' element={<Googlemap />} />
        <Route path='map' element={<Map />} />
        <Route path='map2' element={<Maapp2 />} />
        <Route path='Design' element={<Design />} />
        <Route path='Looping' element={<Looping />} />
        <Route path='Dropdown' element={<Dropdown />} />
        <Route path='Bootstrapoverlay' element={<Bootstrapoverlay />} />
        <Route path='Dropdownwithcheckbox' element={<Dropdownwithcheckbox />} />
        <Route path='Localstorage' element={<Localstorage />} />
        <Route path='Calender' element={<Calender />} />
        <Route path='Card' element={<Card />} />
        <Route path='Uplaod' element={<Uplaod />} />
        <Route path='Rejex_validator' element={<Rejex_validator />} />
        <Route path='Pagination' element={<Pagination />} />
        <Route path='ReactPagination' element={<ReactPagination />} />
        <Route path='InputPage/:id' element={<InputPage />} />
        <Route path='TableShow' element={<TableShow />} />
        <Route path='Corousel' element={<Corousel />} />
        <Route path='Download' element={<Download />} />
        <Route path='HtmlToImage' element={<HtmlToImage />} />
        <Route path='Zipdecompress' element={<Zipdecompress />} />
        <Route path='Tabbreadcrums' element={<Tabbreadcrums />} />
        <Route path='BaseUrlToFile' element={<BaseUrlToFile />} />
        <Route path='StoreFileInSession' element={<StoreFileInSession />} />
        <Route path='BaseUrlTobinaryToFile' element={<BaseUrlTobinaryToFile />} />
        <Route path='Rcpa' element={<Rcpa />} />
        <Route path='React_Slick' element={<React_Slick />} />
        <Route path='Takebasiccopm' element={<Takebasiccopm />} />
        <Route path='bcflazyload' element={<Bcflazyload />} />
        <Route path='ExporttoXls' element={<ExporttoXls />} />
        <Route path='Onclickdropdown' element={<Onclickdropdown />} />
        <Route path='ResponsivePopUp' element={<ResponsivePopUp />} />
      </Routes> 
    </BrowserRouter>
    
  )
}

export default App;
