'use client'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Enquiry.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Ensure this is called in your main app file to avoid accessibility issues
// Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '55%',
        left: '50%',
        right: 'auto',
        zIndex: '9999',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'justify', // Text justification
        maxWidth: '100%',
        width: '40%',
        maxHeight: '80vh', // Limiting maximum height to 80% of viewport height
        overflowY: 'auto', // Enable vertical scrolling if content exceeds modal height
        '@media (max-width: 768px)': {
            width: '95%!important',
        },
        '@media (max-width: 480px)': {
            width: '95%!important',
        },
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        padding: '2px',
        border: 'none',
        color: 'red',
        backgroundColor: 'transparent',
        zIndex: '99999',
    },
};

const Enquiry = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2 * 60 * 1000); // 2 minutes in milliseconds

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post('https://www.banarasialoopapad.in/enquiry-submit', formData)
            .then((response) => {
                toast.success('Enquiry submitted successfully!');
                alert(JSON.stringify(response))
                setFormData({ name: '', phone: '', email: '', message: '' }); // Clear the form fields
                closeModal();
            })
            .catch((error) => {
                toast.error('Failed to submit enquiry. Please try again later.');
            });
            const response = await axios.post('/api/packageenquiry',formData)
            console.log(response.data);
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '5%',
                right: '5%',
                zIndex: 99999,
                display: 'flex',
            }}
        >
            <ToastContainer />
            <button className="btn btn-primary" onClick={openModal}>
                Enquiry/Booking
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Enquiry Form"
                style={customStyles}
            >
                <button style={customStyles.closeButton} onClick={closeModal}>
                    <strong>X</strong>
                </button>
                <h2 style={{ color: '#13a5b6' }}>More Info for Booking</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            <strong>Contact Person</strong>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">
                            <strong>Phone</strong>
                        </label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">
                            <strong>Your Requirement</strong>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="text-center mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ padding: '5px 10px', width: '100%' }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Enquiry;
