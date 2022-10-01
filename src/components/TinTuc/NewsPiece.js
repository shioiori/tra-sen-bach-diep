import React, { useState } from 'react'
import { connect } from "react-redux";

function NewsPiece(props) {
    // const [title, setTitle] = useState(props.title);
    // const [content, setContent] = useState(props);
    // const [image, setImage] = useState('');
    console.log(props);
    return (
        <div className="col-md-4">
            <div className="news-item">
                <img src={props.news.image} alt="" />
                <a href="">{props.news.title}</a>
                <p>{props.news.content}
                </p>
            </div>
        </div>

    )
}

export default NewsPiece
