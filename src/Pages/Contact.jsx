import React, { useState } from 'react';
import './Contact.css';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', formData);

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='contact-page' id='contact'>
            <div className="contact-container" id="Contact-container">
                <h1>CONTACT</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter Your Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter Your Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            style={{color: 'black', padding: '0.75rem'}}
                            name="message"
                            placeholder='Enter Your Message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" >Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
