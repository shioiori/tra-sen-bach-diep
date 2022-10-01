import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TrangChu from './pages/TrangChu';
import GioiThieu from './pages/GioiThieu';
import SanPham from './pages/SanPham';
import TinTuc from './pages/TinTuc';
import LienHe from './pages/LienHe';
import ChiTietSanPham from './pages/ChiTietSanPham';
import { createContext } from 'react';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<TrangChu/>} />
              <Route path='gioithieu' element={<GioiThieu/>} />
              <Route path='/sanpham' element={<SanPham/>} />
              <Route path='/sanpham/chitietsanpham' element={<ChiTietSanPham/>} />
              <Route path='tintuc' element={<TinTuc/>} />
              <Route path='lienhe' element={<LienHe/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
