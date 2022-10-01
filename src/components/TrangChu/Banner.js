import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    const [state, setState] = useState([1,0,0]);
    const [id, setId] = useState(0);
    
    const renderButton = () => {
        return state.map((item,index)=>{
            return state[index] == 1 ? <Link to="/"><img id={index.toString()}src="/images/trang-chu/around1.png" alt="" /></Link>
            : <Link to="/"><img id={index.toString()} src="/images/trang-chu/around.png" alt="" /></Link>
        })
    }

    const renderBanner = () => {
        let banner = [
            "/images/trang-chu/backBanner1.png",
            "/images/trang-chu/backBanner2.png",
            "/images/trang-chu/backBanner3.png"
        ]
        return <Link to="/"><img src={banner[id]} alt="" /></Link>
    }

    useEffect(() => {
        renderButton();
        renderBanner();
    }, [id]);

    const click = (e) => {
        let id = e.target.id;
        let x = [0,0,0];
        for (let i = 0; i < 3; ++i){
            if (id == i.toString()) x[i]++;
        }
        setState(x);
        setId(id);
    }

    return (
        <section id="banner">
            {renderBanner()}
            <div className="container-fluid">
                <p className="banner-title">Trà sen ướp tây hồ</p>
                <span className="md-title">Tinh hoa ẩm thực</span>
                <p className="small-intro">
                    Sự hoà quyện tuyệt vời giữa hương thơm ngan ngát của
                    <br />
                    sen Bách Diệp Hồ Tây và vị đậm đà của trà Tân Cương.
                </p>
                <Link to={"/sanpham"}>
                    <button className="try-button">Thử ngay</button>
                </Link>
            </div>
            <div className="slice" onClick={(e)=>click(e)}>
                {renderButton()}
            </div>
        </section>

    )
}

export default Banner