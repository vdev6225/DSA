import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { store } from '../../Helpers/Store/Store';
import PostApiCall from '../../Helpers/Api/PostApi';
import { notification } from 'antd';

export default function LoginModal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { show,setShow, modalType,setModalType } = useContext(store)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleClose = () => setShow(false);
    const onlogin = (event) => {
        event.preventDefault()
        if (email !== "") {
          if (password !== "") {
            onsubmit();
          } else {
            notification.error({
              message: `Notification error`,
              description: "Please Enter Password",
            });
          }
        } else {
          notification.error({
            message: `Notification error`,
            description: "Please Enter Name",
          });
        }
      };
    const onsubmit = () => {
        PostApiCall.postRequest(
          {
            username: email,
            password: password,
            action: "login",
            actiondate: "",
          },
          "AuthenticateUser"
        ).then((results) => {
          results.json().then((obj) => {
            if (results.status === 200 || results.status === 201) {
              sessionStorage.setItem("access", obj.token);
            } else {
              notification.error({
                message: `Notification error`,
                description: obj.data,
              });
            }
          });
        });
      };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                {modalType === "Login" ?
            <form className="login-form" onSubmit={onlogin}>
                <h2>Login</h2>
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
            <p className='mt-2'>Don't have an account ? <span onClick={()=>{setModalType("Register")}}>Register</span></p>
            </form>
            :
            <form className="login-form" onSubmit={onlogin}>
                <h2>Register</h2>
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
                    <label>Full Name</label>
                    <input
                        type="text"
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
                <div className="input-group">
                    <label>Re - Enter Password</label>
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
                <p className='mt-2'>Already have an account ? <span onClick={()=>{setModalType("Login")}}>Login</span></p>
            </form>
            }
            </Modal.Body>
        </Modal>
    );
}

