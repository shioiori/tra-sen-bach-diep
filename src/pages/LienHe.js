import React, { useState } from 'react'

function LienHe() {
    let contactInfo = JSON.parse(localStorage.getItem("Contact Info"));
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [content, setContent] = useState('');

    const submitForm = () => {
        alert("Chúng tôi đã nhận được thông tin của bạn!")
        let info = {
            name: name,
            email: email,
            tel: tel,
            content: content
        }
        localStorage.setItem("Contact Info", JSON.stringify(info));
    }

    return (
        <section id="contact">
            <div className="container-fluid">
                <div className="send-info">
                    <h3>Liên hệ với chúng tôi</h3>
                    <input type="text" name="name" placeholder="Họ tên" onChange={(e) => setName(e.target.value)}/>
                    <br />
                    <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <br />
                    <input type="text" name="tel" placeholder="Số điện thoại" onChange={(e) => setTel(e.target.value)}/>
                    <br />
                    <input type="text" name="content" placeholder="Nội dung" onChange={(e) => setContent(e.target.value)}/>
                    <br />
                    <button type="submit" onClick={() => submitForm()}>Gửi</button>
                </div>
            </div>
        </section>

    )
}

export default LienHe