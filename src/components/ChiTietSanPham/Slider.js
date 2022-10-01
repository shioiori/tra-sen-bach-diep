import React from 'react'
import SliderItem from './SliderItem';
import {useState} from 'react'
import {connect} from 'react-redux'
import {act_update_item} from '../../actions/actions'

function Slider(props) {
    const [initState, setInitState] = useState(props.products);
    //const initState = props.products;
    const renderContent = () => {
        return initState.map((item, index) => {
            return <SliderItem item={item}/>
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
        props.updateItem(newList[0].name);
    }
    return (
        <div className="slick">
            <div className="slick-item">
                <img
                    src="/images/chitietsanpham/backbtn.png"
                    className="img-fluid"
                    alt=""
                    onClick={() => plusSlider(1)}
                />
            </div>
            {renderContent()}
            <div className="slick-item">
                <img
                    src="/images/chitietsanpham/nextbtn.png"
                    className="img-fluid"
                    alt=""
                    onClick={() => plusSlider(-1)}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.slider
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateItem: (name) => {
            dispatch(act_update_item(name))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Slider);