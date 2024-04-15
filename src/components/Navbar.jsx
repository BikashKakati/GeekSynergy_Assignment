import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { toast } from 'react-toastify';
const USER_KEY = "SIGNUP_TOKEN";

const Navbar = () => {
  const { getItem, setItem } = useLocalStorage(USER_KEY);
  const [openMenu, setOpenMenu] = useState(false);

  const signUpData = getItem();
  const Navigate = useNavigate();
  function handleLogout() {
    toast("logout completed", {
      type: "success",
    });
    setItem({ ...signUpData, isLogin: false });
    Navigate("/login");
  }
  return (
    <nav className='relative py-4 px-3 md:px-10 bg-white flex items-center justify-between'>
      <h1 className='font-bold text-lg md:text-2xl text-slate-800 cursor-pointer text-nowrap'>
        <Link to={"/"}>MovieZilla</Link>
      </h1>
      {signUpData.isLogin &&
        <ul className='flex items-center gap-4 md:gap-8'>
          <li><button className='btn py-1 px-2 md:px-4' onClick={handleLogout}>Log Out</button></li>
          <li className='text-sm md:text-base cursor-pointer' onClick={()=>{setOpenMenu(prev=>!prev)}}>Company Info</li>
        </ul>}
      <div className={`z-10 p-3 w-full md:w-[20rem] bg-red-500 absolute ${!openMenu ? "right-[-20rem]" : "right-0"} bottom-0 translate-y-full *:text-white transition-all`}>
        <p><span className='font-bold text-xl'>Company:</span> Geeksynergy Technologies Pvt Ltd</p>
        <p><span className='font-bold text-xl'>Address:</span> Sanjayanagar, Bengaluru-56</p>
        <p><span className='font-bold text-xl'>Phone:</span> XXXXXXXXX09</p>
        <p><span className='font-bold text-xl'>Email:</span> XXXXXX@gmail.com</p>
      </div>
    </nav>
  )
}

export default Navbar