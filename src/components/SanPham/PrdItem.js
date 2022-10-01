import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function PrdItem(props) {
    const {item} = props;
    return (
        <div className="col-md-4">
        <div className="product-item">
            <div className="star-rate">
                <div className="rate">
                    <img src="./images/san-pham/star.png" alt="" />
                    ({item.rate})
                </div>
                <div className="new">
                    <p>New</p>
                </div>
            </div>
            <Link to={"chitietsanpham"} state={item.name}>
                <img
                    src={item.image}
                    className="img-fluid"
                    alt=""
                />
            </Link>
            <Link to={"chitietsanpham"} state={item.name}>
                <h5>{item.name}</h5>
            </Link>
            <div className="product-cost">
                <p>
                    {item.price}<small>VND</small>
                </p>
                <select name="" id="tea-gram">
                    <option value={0}>200g</option>
                </select>
            </div>
        </div>
    </div>
    )
}


export default PrdItem