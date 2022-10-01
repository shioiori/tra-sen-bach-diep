import React from 'react'
import PrdItem from './PrdItem'
import { useState, useEffect } from 'react';
import {connect} from 'react-redux'
function PrdShow(props) {

    const [initState, setInitState] = useState(props.products);
    const renderContent = () => {
        return initState.map((item, index) => {
            return <PrdItem item={item} index={index}/>
        })
    }
    
    useEffect(() => {
        setInitState(props.products);
      }, [props.products]);
    
    return (
        <div className="product">
            <div className="row">
                {renderContent()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        products: state.listsanpham
    }
}

export default connect(mapStateToProps,null)(PrdShow);