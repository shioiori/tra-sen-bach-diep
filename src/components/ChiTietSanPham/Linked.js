import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
function Linked() {
    const navigate = useNavigate();
    return (
        <div className="link">
            <Link to={"/"}>Trang chủ</Link> &gt;
            <Link to={"/sanpham"}> Sản phẩm</Link> &gt;
            <Link to={"/sanpham/chitietsanpham"}> Chi tiết sản phẩm</Link>
        </div>
    )
}

export default Linked