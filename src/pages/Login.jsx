import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
            toast("Account not exist",{
                type:"warning",
            });
            return
        }
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;
        if(userName !== signUpData.userName || password !== signUpData.password){
            toast("username/password didnot match",{
                type:"warning",
            });
            return;
        }
        toast("login successfull",{
            type:"success",
        });
        setItem({...signUpData, isLogin:true})
        Navigate("/");

    }
  return (
    <div>
        <div className="w-full min-h-dvh pt-10">
            <div className="card">
                <h4 className='text-center text-2xl font-bold'> Log In</h4>
                <form className="w-full *:w-full *:mb-3 *:rounded-lg" onSubmit={handleLogin}>

                    <label htmlFor="user-name">User Name</label>
                    <input type="text" id='user-name' className="p-2 bg-zinc-300" ref={userNameRef} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' className="p-2 bg-zinc-300" ref={passwordRef} />

                    <input type="submit" value="Submit" className="btn mt-3" />
                </form>
                <p className='text-center'><Link to="/signup">Create an account? signup</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login