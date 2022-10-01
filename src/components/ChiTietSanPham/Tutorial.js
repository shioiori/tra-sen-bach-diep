import React from 'react'
import { useLocation } from 'react-router-dom'
import {connect} from 'react-redux'

function Tutorial(props) {
    const {item} = props;

    return (
        <div className="tutorial">
            <div className="container">
                <div className="how-to">
                    <h3>Hướng dẫn pha {item.name}</h3>
                    <div className="tip">
                        &nbsp;
                        <img src="/images/chitietsanpham/icon1.png" alt="" />
                        <p>Đổ vào ấm từ 150 - 200 ml, nước sôi nhiệt độ 85oC</p>
                    </div>
                    <div className="tip">
                        <img src="/images/chitietsanpham/icon2.png" alt="" />
                        <p>1 - 2 nắm trà, khoảng 20 -30 gram</p>
                    </div>
                    <div className="tip">
                        <img src="/images/chitietsanpham/icon3.png" alt="" />
                        <p>Để trải 4 - 6 phút</p>
                    </div>
                </div>
                <div className="tea">
                    <img
                        src="/images/chitietsanpham/phatra.jpg"
                        className="img-fluid"
                        alt=""
                    />
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        item: state.chitietsanpham
    }
}

export default connect(mapStateToProps, null)(Tutorial);