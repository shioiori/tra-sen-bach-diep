import React from 'react'
import {Link} from 'react-router-dom'

function ProductInfo() {
    return (
        <section id="info">
            <div className="back-banner">
                <img src="./images/trang-chu/background.png" alt="" />
            </div>
            <div className="container">
                <h3>Giới thiệu</h3>
                <div className="info-content">
                    <span className="info-title md-title">Trà sen Bách Diệp</span>
                    <div className="small-info">
                        <p>
                            Trà ướp sen Bách Diệp - tinh hoa văn hoá Hà Thành là sự hoà quyện
                            tuyệt vời giữa hương thơm ngan ngát của bông sen Bách Diệp Hồ Tây và
                            vị đậm đà của trà Tân Cương Thái Nguyên. Qua đôi bàn tay tài hoa và bí
                            quyết nghề mật truyền nhiều đời của người thợ trà Thăng Long, tạo ra
                            thức quà tinh tuý, kết tinh văn hoá ngàn năm Thăng Long - Hà Nội.
                        </p>
                        <Link to={"/sanpham"}>
                            <button className="try-button">Thử ngay</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductInfo