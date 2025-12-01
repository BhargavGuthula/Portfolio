import React, { useState } from 'react';
import { db, collection, addDoc } from './Firebase/FirebaseConfig.js';
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


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await addDoc(collection(db, "contacts"), {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            createdAt: new Date()
        });

        alert("Message sent!");

        setFormData({
            name: "",
            email: "",
            message: ""
        });

    } catch (error) {
        console.error("Error sending message: ", error);
        alert("Failed to send message");
    }
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
                            style={{ color: 'black', padding: '0.75rem' }}
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
