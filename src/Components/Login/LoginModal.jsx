import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function LoginModal({showModal}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(showModal);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleClose = () => setShow(false);
    console.log(show)
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-btn">
                    Login
                </button>
            </form>
            </Modal.Body>
        </Modal>
    );
}

