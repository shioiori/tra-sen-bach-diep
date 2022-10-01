import React from 'react'
import { Link } from 'react-router-dom'

function Title() {
    return (
        <div className="title">
            <Link to={"/"}>Trang chủ</Link> &gt;
            <Link to={"/sanpham"}> Sản phẩm</Link>
            <h4>Sản phẩm</h4>
            <hr />
            <p>Bộ lọc sản phẩm</p>
        </div>
    )
}

export default Title