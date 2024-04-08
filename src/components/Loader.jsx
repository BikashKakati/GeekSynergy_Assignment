import React from 'react'

const Loader = () => {
    return (
        <div className='h-dvh w-dvh flex items-center justify-center'>
            <div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
            </div>
        </div>
    )
}

export default Loader