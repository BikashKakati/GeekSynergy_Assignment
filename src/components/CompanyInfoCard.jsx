import React from 'react'
import { Link } from 'react-router-dom'

const CompanyInfoCard = ({ openMenu, setOpenMenu }) => {
    return (
        <div className={`z-10 p-3 w-full md:w-[22rem] bg-red-500 absolute ${!openMenu ? "-right-full" : "right-0"} rounded-lg bottom-0 translate-y-full *:text-white transition-all`}>
            <p><span className='font-bold text-xl'>Company:</span> Geeksynergy Technologies Pvt Ltd</p>
            <p><span className='font-bold text-xl'>Address:</span> Sanjayanagar, Bengaluru-56</p>
            <p><span className='font-bold text-xl'>Phone:</span> XXXXXXXXX09</p>
            <p><span className='font-bold text-xl'>Email:</span> XXXXXX@gmail.com</p>
            <p className='mt-10 text-right' onClick={()=>{setOpenMenu(prev=>!prev)}}><Link to="company-info">view more</Link></p>
        </div>
    )
}

export default CompanyInfoCard