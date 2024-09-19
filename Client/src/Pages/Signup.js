import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';  // Correct import
import "bootstrap-icons/font/bootstrap-icons.css";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import './Signup.css';

function EmailModal(props) {
    return (
        <Modal {...props} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>Enter Your Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <Button variant="primary" onClick={props.onNext}>Continue</Button>
                </form>
            </Modal.Body>
        </Modal>
    );
}

function OtpModal(props) {
    const [otp, setOtp] = useState('');  // State for OTP

    const handleChange = (otp) => {
        setOtp(otp);
    };
    const navigate=useNavigate();
    function onhandleSubmit(e){
        e.preventDefault();
        navigate("/");
    }

    return (
        <Modal {...props} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>Enter OTP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={6}
                    separator={<span>-</span>}
                    inputStyle={{
                        width: '2rem',
                        height: '2rem',
                        margin: '0 0.5rem',
                        fontSize: '1.5rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(0,0,0,0.3)',
                    }}
                    renderInput={(props) => <input {...props} />}
                />
                <div className="mt-3">
                    <Button variant="success" onClick={onhandleSubmit}>Submit</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Get Started</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-grid gap-6">
                    <Button variant="light" size="lg" style={{ position: 'relative' }}>
                        <span className='modal-icon'><FcGoogle /></span>
                        <span style={{ display: 'block', width: '100%', fontSize: '16px' }}>Continue With Google</span>
                    </Button>
                </div>
                <div className="d-grid gap-6">
                    <Button variant="light" size="lg" style={{ position: 'relative' }} onClick={props.onEmailClick}>
                        <span className='modal-icon'><AiOutlineMail /></span>
                        <span className='modal-text'>Continue With Email</span>
                    </Button>
                </div>
                <div className="d-grid gap-6">
                    <Button variant="light" size="lg" style={{ position: 'relative' }}>
                        <span className='modal-icon-facebook'><FaFacebook /></span>
                        <span className='modal-text'>Continue With Facebook</span>
                    </Button>
                </div>
                <div className='modal-para'>
                    <p>I agree to the Terms & Conditions & Privacy Policy</p>
                </div>
            </Modal.Body>
        </Modal>
    );
}

const Signup = () => {
    const [modalShow, setModalShow] = useState(false);
    const [emailModalShow, setEmailModalShow] = useState(false);
    const [otpModalShow, setOtpModalShow] = useState(false);

    const handleEmailClick = () => {
        setModalShow(false);
        setEmailModalShow(true);
    };

    const handleOtpModal = () => {
        setEmailModalShow(false);
        setOtpModalShow(true);
    };

    const handleSubmit = (otp) => {
        setOtpModalShow(false);
        alert(`OTP Submitted: ${otp}`);
    };

    return (
        <>
            <Button className='btn-custom' variant="light" onClick={() => setModalShow(true)}>
                Signup
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onEmailClick={handleEmailClick}
            />

            <EmailModal
                show={emailModalShow}
                onHide={() => setEmailModalShow(false)}
                onNext={handleOtpModal}
            />

            <OtpModal
                show={otpModalShow}
                onHide={() => setOtpModalShow(false)}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default Signup;
