import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="/images/trang-chu/logophongtra.png" alt="" />
                        <p>
                            7999.999.999 <br />
                            trasenbachdiep@gmail.com <br />
                            Số 12, Quảng An, Hồ Tây, Hà Nội
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Về chúng tôi</h5>
                        <Link to={"gioithieu"}>Giới thiệu</Link>
                        <br />
                        <Link to={"sanpham"}>Sản phẩm</Link>
                        <br />
                        <Link to={"tintuc"}>Tin tức</Link>
                    </div>
                    <div className="col-md-4">
                        <h5>Liên hệ</h5>
                        <Link to={"/"}>
                            <img src="/images/trang-chu/icon-footer.png" alt="" />
                        </Link>
                        <p>
                            Copy © 2010-2020 <br />
                            Trà sen Bách Diệp. All right reversed.
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer