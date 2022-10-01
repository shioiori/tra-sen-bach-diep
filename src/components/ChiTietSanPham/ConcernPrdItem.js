import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {act_update_item} from '../../actions/actions'

function ConcernPrdItem(props) {
    const {item} = props;
    return (
        <div className="col-md-2">
            <div className="product-item">
                <div className="star-rate">
                    <div className="rate">
                        <img src="/images/san-pham/star.png" alt="" />
                        ({item.rate})
                    </div>
                    <div className="new">
                        <p>New</p>
                    </div>
                </div>
                <Link to={"/sanpham/chitietsanpham"} state={item.name} onClick={()=>props.updateItem(item.name)}>
                    <img
                        src={item.image}
                        className="img-fluid"
                        alt=""
                    />
                </Link>
                <Link to={"/sanpham/chitietsanpham"} state={item.name} onClick={()=>props.updateItem(item.name)}>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateItem: (name) => {
            dispatch(act_update_item(name))
        }
    }
}

export default connect(null,mapDispatchToProps)(ConcernPrdItem);