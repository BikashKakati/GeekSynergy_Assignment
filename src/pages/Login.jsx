import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
const USER_KEY = "SIGNUP_TOKEN";

const Login = () => {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const {getItem, setItem} = useLocalStorage(USER_KEY);
    const Navigate = useNavigate();

    function handleLogin (e){
        e.preventDefault();

        // getting userdata from localstorage 
        const signUpData = getItem();
        if(!signUpData){
            alert("Account not exist");
            return
        }
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;
        if(userName !== signUpData.userName || password !== signUpData.password){
            alert("user name or password didnot match");
            return;
        }
        setItem({...signUpData, isLogin:true})
        Navigate("/");

    }
  return (
    <div>
        <div className="w-full min-h-dvh pt-20">
            <div className="form-box">
                <h4 className='text-center text-2xl font-bold'> Log In</h4>
                <form className="w-full *:w-full *:mb-3 *:rounded-lg" onSubmit={handleLogin}>

                    <label htmlFor="user-name">User Name</label>
                    <input type="text" id='user-name' className="p-2 bg-zinc-300" ref={userNameRef} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' className="p-2 bg-zinc-300" ref={passwordRef} />

                    <input type="submit" value="Submit" className="submit-btn mt-3" />
                </form>
                <p className='text-center'><Link to="/signup">Create an account? signup</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login