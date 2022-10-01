import React, { useEffect, useLayoutEffect } from 'react'
import Link from './Linked'
import { useLocation, useParams } from 'react-router-dom';
import {act_show_item} from '../../actions/actions'
import {connect} from 'react-redux'


function PrdIntro(props) {
    const {item} = props;
    const location = useLocation();
    useLayoutEffect(() => {
        props.showItem(location.state);
    }, [])


    const splitContent = () => {
        let s = item.content;
        if (s != null){
            s = s.split("||");
            // console.log(s);
            return s.map((item,index)=>{
                return <p>{item}</p>
            })
        }
    }

    return (
        <div className="intro">
            <h3>{item.name}</h3>
            <img src="/images/san-pham/star.png" alt="" />
            <span>71 đánh giá </span>
            <div className="product-cost">
                <p>
                    {item.price} <small>VND</small>
                </p>
                <select name="" id="tea-gram">
                    <option value={0}>200g</option>
                </select>
            </div>
            <strong>sản phẩm đạt tiêu chuẩn vệ sinh an toàn thực phẩm</strong>
            <p>
                {splitContent()}
            </p>
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showItem: (name) => {
            dispatch(act_show_item(name))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.chitietsanpham
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrdIntro);