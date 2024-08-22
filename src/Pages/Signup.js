import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap-icons/font/bootstrap-icons.css";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import './Signup.css'
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Get Started
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-grid gap-6">
                    <Button variant="light" size="lg" style={{ position: 'relative' }}>
                        <span className='modal-icon' >
                            <FcGoogle />
                        </span>
                        <span style={{ display: 'block', width: '100%', fontSize: '16px' }}>
                            Continue With Google
                        </span>
                    </Button>
                </div>
                <div className="d-grid gap-6">
                    <Button variant="light" size="lg" style={{ position: 'relative' }}>
                        <span className='modal-icon'>
                            <AiOutlineMail />
                        </span>
                        <span className='modal-text'>
                            Continue With Email
                        </span>
                    </Button>
                </div>

                <div className="d-grid gap-6">
                    <Button variant="light" size="lg" style={{ position: 'relative' }}>
                        <span className='modal-icon-facebook'>
                            <FaFacebook /> 
                        </span>
                        <span className='modal-text'>
                            Continue With Facebook
                        </span>
                    </Button>
                </div>

             <div className='modal-para'>
                <p>
                I agree to the Terms & Conditions & Privacy Policy
                </p>
             </div>
            </Modal.Body>
        </Modal>
    );
}

const Signup = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button className='btn-custom' variant="light" onClick={() => setModalShow(true)}>
                Signup
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
// const Signup = () => {
//   return (
//     <>
//       <Form style={{margin:20}}>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="name@example.com" />
//       </Form.Group>
//       <Form.Label htmlFor="inputPassword5">Password</Form.Label>
//       <Form.Control
//         type="password"
//         id="inputPassword5"
//         aria-describedby="passwordHelpBlock"
//       />
//       <Form.Text id="passwordHelpBlock" muted>
//         Your password must be 8-20 characters long, contain letters and numbers,
//         and must not contain spaces, special characters, or emoji.
//       </Form.Text>
//     </Form>
//     </>
//   )
// }

export default Signup
