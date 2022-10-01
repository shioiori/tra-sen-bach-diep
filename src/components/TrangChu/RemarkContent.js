import React, { useState } from 'react'
import { render } from 'react-dom'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function RemarkContent(props) {
    const [initState, setInitState] = useState(props.products);

    const renderContent = () => {
        return initState.map((item, index) => {
            let element = <div className="col-2 col-xs-2 col-sm-2 col-md-2 ">
            <Link to="/sanpham/chitietsanpham" state={item.name}>
                <img
                    src={item.image}
                    className="img-fluid"
                    alt=""
                />
            </Link>
            <p>{item.name}</p>
        </div>
            return element;
        })
    }

    const plusSlider = (idx) => {
        let newList = [...initState];
        if (idx == 1){
            let [firstElement, ...list] = newList;
            list.push(firstElement);
            setInitState(list);
        }
        else {
            newList.unshift(newList[newList.length-1]);
            newList.pop();
            setInitState(newList);
            // console.log(newList);
        }
    }

    return (
        <section id="remark-content">
            <h3>Sản phẩm nổi bật</h3>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-2 col-xs-2 col-sm-2 col-md-2 justify-content-end">
                        <img
                            src="./images/trang-chu/backButton.png"
                            alt=""
                            onClick={()=>plusSlider(1)}
                        />
                    </div>
                    {renderContent()}
                    <div className="col-2 col-xs-2 col-sm-2 col-md-2">
                        <img
                            src="./images/trang-chu/nextButton.png"
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
    return {
        products: state.spnoibat
    }
}

export default connect(mapStateToProps,null)(RemarkContent);