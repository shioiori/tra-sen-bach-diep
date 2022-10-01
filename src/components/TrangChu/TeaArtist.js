import React from 'react'
import BuyNow from './BuyNow'
import { connect } from 'react-redux';
import { useState } from 'react';

function TeaArtist(props) {
    const [initState, setInitState] = useState(props.teaArtist);

    const renderContent = () => {
        return initState.map((item, index) => {
            let element = <div className="col-xs-12 col-md-2">
            <a href="">
                <img
                    src={item.image}
                    className="img-fluid"
                    alt=""
                />
            </a>
            <div className="each-info">
                <h5>{item.name}</h5>
                <p>
                    {item.info}
                </p>
            </div>
        </div>
            return element;
        })
    }
    return (
        <section id="tea-artist">
            <h3>Nghệ nhân trà đạo</h3>
            <div className="container">
                <div className="row justify-content-center">
                    {renderContent()}
                </div>
            </div>
            <BuyNow/>
        </section>

    )
}

const mapStateToProps = (state) => {
    return {
        teaArtist: state.nghenhantradao
    }
}

export default connect(mapStateToProps,null)(TeaArtist);