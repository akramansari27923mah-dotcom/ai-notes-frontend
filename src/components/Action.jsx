import React from 'react'

const Action = () => {
    return (
        <div id='Action' className='p-5 flex flex-col justify-center gap-5 items-center'>
            <div className='flex justify-center items-center gap-5'>
                <div className='w-[420px] border-b border-gray-400'></div>
                <h1 className='md:text-4xl text-xl text-nowrap font-bold text-gray-800'>See It In Action</h1>
                <div className='w-[420px] border-b border-gray-400'></div>
            </div>

            <div className='flex md:flex-row flex-col gap-10'>
                <img className='w-[400px] rounded-lg transition-all duration-300 hover:scale-105 active:scale-75' src="prompt.png" alt="Prompt" />
                <img className='w-[400px] rounded-lg transition-all duration-300 hover:scale-105 active:scale-75' src="preview.png" alt="" />
            </div>
        </div>
    )
}

export default Action