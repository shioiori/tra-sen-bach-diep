import React from 'react'
import AsideBar from '../components/SanPham/AsideBar'
import BannerPrd from '../components/SanPham/BannerPrd'
import PrdShow from '../components/SanPham/PrdShow'
import Title from '../components/SanPham/Title'
import { Outlet } from 'react-router-dom'

function SanPham() {
  return (
    <div>
      <BannerPrd />
      <section id="content">
        <div className="container">
          <Title />
          <div className="product-sell">
            <AsideBar />
            <PrdShow />
          </div>
        </div> 
      </section>
      <Outlet/>
    </div>
  )
}

export default SanPham