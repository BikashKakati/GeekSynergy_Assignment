import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLocalStorage } from '../hooks/useLocalStorage';
const USER_KEY = "SIGNUP_TOKEN";
const profession = ["Software Developer", "Doctor", "Teacher"];

const Signup = () => {
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const phoneRef = useRef();
    const professionRef = useRef();
    const {setItem} = useLocalStorage(USER_KEY);
    const Navigate = useNavigate();

    function handleSignup(e) {
        e.preventDefault();
        const userName = userNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const phone = phoneRef.current.value;
        const profession = professionRef.current.value;

        if(!userName || !email || !password || !phone){
            toast("Please fill required details",{
                type:"warning",
            });
            return;
        }
        const newUser = {
            userName, email, password, phone, profession,isLogin:false,
        }
        // saving at local storage
        setItem(newUser);
        toast("Sign up completed",{
            type:"success",
        });
        Navigate("/login");
    }
    return (
        <div className="w-full min-h-dvh pt-10">
            <div className="card ">
                <h4 className='text-center text-2xl font-bold'>Sign Up</h4>
                <form className="w-full *:w-full *:mb-3 *:rounded-lg" onSubmit={handleSignup}>
                    <label htmlFor="user-name">User Name</label>
                    <input type="text" id='user-name' className="p-2 bg-zinc-300" ref={userNameRef} />

                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' className="p-2 bg-zinc-300" ref={emailRef} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' className="p-2 bg-zinc-300" ref={passwordRef} />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id='phone' className="p-2 bg-zinc-300" ref={phoneRef} />

                    <label htmlFor="profession">Select Profession</label>
                    <select id='profession' className='bg-zinc-300 py-2 px-3' ref={professionRef}>
                        {
                            profession.map((ele,index)=>{
                                return <option key={index} value={ele.toLowerCase()}>{ele}</option>
                            })
                        }
                    </select>

                    <input type="submit" value="Submit" className="btn mt-3" />
                </form>
                <p className='text-center'><Link to="/login">Already have an account?</Link></p>
            </div>
        </div>
    )
}

export default Signup