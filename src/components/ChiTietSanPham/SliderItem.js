import React from 'react'
function SliderItem(props) {
    const {item} = props;
    return (
        <div className="slick-item">
            <img
                src={item.image}
                className="img-fluid"
                alt=""
            />
        </div>
    )
}

export default SliderItem