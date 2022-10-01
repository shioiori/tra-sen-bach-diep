import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-light">
                    <Link to={"/"} className="navbar-brand">
                        <img src="./images/trang-chu/logophongtra.png" alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="collapsibleNavbar"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"gioithieu"} className="nav-link">Giới thiệu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"sanpham"} className="nav-link">Sản phẩm</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"tintuc"} className="nav-link">Tin tức</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"lienhe"} className="nav-link">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default Header