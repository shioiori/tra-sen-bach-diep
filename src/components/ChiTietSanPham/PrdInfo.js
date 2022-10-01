import React from 'react'
import Linked from './Linked'
import PrdIntro from './PrdIntro'
import Slider from './Slider'
import Tutorial from './Tutorial'
import PrdImage from './PrdImage'

function PrdInfo() {
    return (
        <section id="detailed-product">
            <div className="product-info">
                <div className="container">
                    <Linked />
                    <div className='content'>
                        <Slider />
                        <PrdImage />
                        <PrdIntro />
                    </div>
                </div>
            </div>
            <Tutorial/>
        </section>
    )
}

export default PrdInfo
