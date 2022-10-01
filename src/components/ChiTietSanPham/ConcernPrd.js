import React from 'react'
import ConcernPrdItem from './ConcernPrdItem';
import { useState } from 'react';
import {connect} from 'react-redux'

function ConcernPrd(props) {
   const [initState, setInitState] = useState(props.products);
    //const initState = props.products;
    const renderContent = () => {
        return initState.map((item, index) => {
            return <ConcernPrdItem item={item}/>
        })
    }

    const plusSlider = (idx) => {
        let newList = [...initState];
        if (idx == 1) {
            let [firstElement, ...list] = newList;
            list.push(firstElement);
            newList = list;
        }
        else {
            newList.unshift(newList[newList.length - 1]);
            newList.pop();
            
            // console.log(newList);
        }
        setInitState(newList);
    }
    return (
        <section id="concern-product">
            <h3>Sản phẩm liên quan</h3>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-2">
                        <img
                            src="/images/trang-chu/backButton.png"
                            alt=""
                            className="img-fluid"
                            onClick={()=>plusSlider(1)}
                        />
                    </div>
                    {renderContent()}
                    <div className="col-md-2">
                        <img
                            src="/images/trang-chu/nextButton.png"
                            className="img-fluid"
                            alt=""
                            onClick={()=>plusSlider(-1)}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        products: state.sanphamtuongtu
    }
}

export default connect(mapStateToProps,null)(ConcernPrd);