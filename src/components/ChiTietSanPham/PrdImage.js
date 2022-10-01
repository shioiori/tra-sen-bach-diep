import React, {useLayoutEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {act_show_item} from '../../actions/actions'
import {connect} from 'react-redux'

function PrdImage(props) {
    const {item} = props;

    return (
        <div className="prd-img">
            <img src={item.image} alt="" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        item: state.chitietsanpham
    }
}

export default connect(mapStateToProps, null)(PrdImage);