import React, { useState } from 'react'

function BuyNow() {
    let buyTel = JSON.parse(localStorage.getItem("Buy tel"));

    const [tel, setTel] = useState('');

    const submitForm = () => {
        alert("Chúng tôi đã nhận được thông tin của bạn!")
        let info = {
            tel: tel
        }
        localStorage.setItem("Buy tel", JSON.stringify(info));
    }

    return (
        <div className="buy-now">
            <h3>Mua ngay</h3>
            <div className="container">
                <input type="text" name="tel" placeholder="Số điện thoại/Email" onChange={(e)=>setTel(e.target.value)}/>
                <button type='submit' onClick={()=>submitForm()}>Gửi</button>
            </div>
        </div>
    )
}

export default BuyNow