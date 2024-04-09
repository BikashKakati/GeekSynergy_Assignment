import React from 'react'

const Loader = ({inital=true}) => {
    return (
        <div className={`${inital && "h-dvh w-dvh "} flex items-center justify-center`}>
            <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
            </div>
        </div>
    )
}

export default Loader