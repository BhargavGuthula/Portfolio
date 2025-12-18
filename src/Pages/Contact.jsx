import React, { useState } from 'react';
import { db, collection, addDoc } from './Firebase/FirebaseConfig.js';
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
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

    const SOCIAL_LINKS = {
        github: 'https://github.com/BhargavGuthula',
        linkedin: 'https://www.linkedin.com/in/bhargava-sai-guthula-7b3132242/',
        Instagram: '',
        email: 'mailto:youremail@gmail.com'
    };

    return (
        <div className='contact-page' id='contact'>
            <h1>Get In Touch</h1>
            <div className='connect-container'>
                <h3>Lets connect</h3>
                <p>I'm always intrested hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out</p>
                <button
                    className="resume"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "../public/Bhargav_Resume (6).pdf"; 
                        link.download = "Bhargava_Resume.pdf";
                        link.click();
                    }}
                >
                    Download Resume
                </button>
                <h4>Connect with me </h4>
                <div className="social-buttons">
                    <a className="social-btn github" href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /> <span>GitHub</span> </a>
                    <a className="social-btn linkedin" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <CiLinkedin /> <span>LinkedIn</span></a>
                    <a className="social-btn Instagram" href={SOCIAL_LINKS.Instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"> <FaInstagram /> <span>Instagram</span></a>
                </div>
            </div>
            <div className="contact-container" id="Contact-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <p className='label'>Name</p>
                        <input
                            type="text"
                            name="name"
                            placeholder='Your Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <p className='label'>Email</p>
                        <input
                            type="email"
                            name="email"
                            placeholder='your.email@example.com'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <p className='label'>Message</p>
                        <textarea
                            style={{ color: 'black', padding: '0.75rem' }}
                            name="message"
                            placeholder='Message....'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" >Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
