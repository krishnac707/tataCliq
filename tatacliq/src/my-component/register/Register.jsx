import React, { useContext, useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/Data.context';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { setLoginSignup, setLoginButton, loginbutton, loginSignup } = useContext(DataContext);
    const [dropdownmenu, setdropdownmenu] = useState(false);
    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: 'Buyer' });
    const router = useNavigate();

    const formValue = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const selectRole = (event) => {
        setUserData({ ...userData, ["role"]: event.target.value })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            if (userData.role == "Buyer") {
                const userArray = JSON.parse(localStorage.getItem("Users")) || [];
                console.log(userArray, "24");
                const userObj = {
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                    role: userData.role,
                    cart: []
                }
                userArray.push(userObj);
                localStorage.setItem("Users", JSON.stringify(userArray));
                toast.success("Registration Successfull");
                router("/login");
                setLoginSignup(false);
            }
            else {
                const users = JSON.parse(localStorage.getItem("Users")) || [];
                users.push(userData);
                localStorage.setItem("Users", JSON.stringify(users));
                toast.success("Registration Successfull");
                router("/login");
            }
        }
        else {
            toast.error("please fill all data");
        }
    }

    const handleSignup = () => {
        setLoginSignup(false);
        setLoginButton(true);
    }

    return loginSignup &&
        <div id='login-div-css' className='register-body'>
            <div className='inner-login-div-css'>
                <div className='inner-login-heading-div-css'>
                    <div className='inner-login-button-div-css'>
                        <img className='inner-login-button-css' onClick={() => setLoginSignup(false)} src="https://www.tatacliq.com/src/mobile-number-login/images/close_icon.svg" alt="" />
                    </div>
                    <h1 className='welcome-login-heading-css'>Welcome to Tata CLiQ</h1>
                </div>
                <div className='login-form-div-css'>
                    <form onSubmit={formSubmit}>
                        <input type="text" className='login-form-input-css' name='name' onChange={formValue} placeholder='Enter Name' /><br />
                        <input type="email" className='login-form-input-css' name='email' onChange={formValue} placeholder='Enter Email' /><br />
                        <input type="password" className='login-form-input-css' name='password' onChange={formValue} placeholder='Enter Password' /><br />
                        <select className='form-select-css' onChange={selectRole}>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                        <input type="submit" className='login-form-submit-button-css' value="Submit" />
                    </form>
                    <div>
                        <h5>Already have account then<span><button className='login-form-signup-button-css' onClick={handleSignup}>Sign in from here</button></span>  </h5>
                    </div>
                </div>
            </div>
        </div>

}

export default Register