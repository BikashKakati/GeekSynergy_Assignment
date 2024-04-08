import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { toast } from 'react-toastify';
const USER_KEY = "SIGNUP_TOKEN";

const Navbar = () => { 
   const {getItem, setItem} = useLocalStorage(USER_KEY);
   const signUpData = getItem();
   const Navigate = useNavigate();
    function handleLogout(){
        toast("logout completed",{
          type:"success",
      });
        setItem({...signUpData, isLogin:false});
        Navigate("/login");
    }
  return (
    <nav className='py-4 px-3 md:px-10 bg-white flex items-center justify-between'>
        <h1 className='font-bold text-xl md:text-2xl text-slate-800 cursor-pointer text-nowrap'>
            <Link to={"/"}>Movie Zilla</Link>
        </h1>
        {signUpData.isLogin &&
          <ul className='flex items-center gap-4 md:gap-8'>
            <li><button className='btn py-2 px-2 md:px-4' onClick={handleLogout}>Log Out</button></li>
            <li className='text-sm md:text-base'><Link to={"/company-info"}>Company Info</Link></li>
        </ul>}
    </nav>
  )
}

export default Navbar