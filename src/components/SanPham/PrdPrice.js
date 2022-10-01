import React from 'react'
import {connect} from 'react-redux'
import {act_filter_price} from '../../actions/actions'

function PrdPrice(props) {
    const handleChange = (e) => {
        //console.log(e.target.value);
        props.filterPrice(e.target.value);
    }
    return (
        <div className="product-cost select">
            <h5>Giá thành</h5>
            <input type="range" min={50000} max={200000} className="slider" onChange={(e)=>handleChange(e)}/>
            <p>Từ 50.000 đến 200.000</p>
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        filterPrice: (price) => {
            dispatch(act_filter_price(price/1000))
        }
    }
}

export default connect(null, mapDispatchToProps)(PrdPrice);