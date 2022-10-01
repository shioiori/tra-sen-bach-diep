import React, { useState } from 'react'
import {act_filter_tag} from "../../actions/actions"
import {connect} from 'react-redux'

function PrdType(props) {
    const [tagList, setTagList] = useState([]);
    const handleClick = (e) => {
        let name = e.target.name;
        let newList = [...tagList];
        let idx = newList.indexOf(name);
        if (idx == -1) newList.push(name);
        else newList.splice(idx,1);
        setTagList(newList);
        props.filterTag(newList);
    }
    return (
        <div className="type-product select" onClick={()=>handleClick}>
            <h5>Loại sản phẩm</h5>
            <input type="checkbox" name="traxanhthainguyen" id="" onClick={(e)=>handleClick(e)}/> Trà xanh Thái Nguyên
            <br />
            <input type="checkbox" name="traoolong" id="" onClick={(e)=>handleClick(e)}/> Trà Oolong
            <br />
            <input type="checkbox" name="trashantuyet" id="" onClick={(e)=>handleClick(e)}/> Trà Shan tuyết
            <br />
            <input type="checkbox" name="trasen" id="" onClick={(e)=>handleClick(e)}/> Trà sen
            <br />
            <input type="checkbox" name="tralai" id="" onClick={(e)=>handleClick(e)}/> Trà lài
            <br />
            <input type="checkbox" name="trathaoduoc" id="" onClick={(e)=>handleClick(e)}/> Trà thảo dược
            <br />
            <input type="checkbox" name="dungcuphatra" id="" onClick={(e)=>handleClick(e)}/> Dụng cụ pha trà
            <br />
            <input type="checkbox" name="nuocphatra" id="" onClick={(e)=>handleClick(e)}/> Nước pha trà
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        filterTag: (tag) => {
            dispatch(act_filter_tag(tag))
        }
    }
}

export default connect(null, mapDispatchToProps)(PrdType);