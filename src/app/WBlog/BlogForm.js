'use client'
import React, { useState } from 'react';
import axios from 'axios';

function BlogForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            message: message
        };

        try {
            const response = await axios.post('url', data);
            console.log(response.data);

            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <form className="form-one row gutter-20" onSubmit={handleOnSubmit}>
            <div className="col-md-6 wow animated fadeInUp" data-wow-delay="0s" data-wow-duration="1500ms">
                <div className="form-one__group">
                    <input type="text" name="name" placeholder="Your Name" className="form-one__input" value={name} onChange={handleNameChange} />
                </div>
            </div>
            <div className="col-md-6 wow animated fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">
                <div className="form-one__group">
                    <input type="email" name="email" placeholder="Email Address" className="form-one__input" value={email} onChange={handleEmailChange} />
                </div>
            </div>
            <div className="col-12 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                <div className="form-one__group">
                    <textarea name="message" cols={30} rows={10} placeholder="Write a Message" className="form-one__message form-one__input" value={message} onChange={handleMessageChange} />
                </div>
            </div>
            <div className="col-12 wow animated fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms">
                <div className="form-one__btn-box">
                    <button type="submit" className="form-one__btn trevlo-btn trevlo-btn--base">
                        <span>Leave a Comment</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default BlogForm
