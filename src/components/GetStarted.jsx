import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className='p-5 flex flex-col justify-center gap-5 items-center'>
      <div className='flex justify-center items-center gap-5'>
        <div className='w-[280px] border-b border-gray-400'></div>
        <h1 className='md:text-3xl text-nowrap text-xl text-gray-800 font-bold'>Start Analyzing Your Notes Free</h1>
        <div className='w-[280px] border-b border-gray-400'></div>
      </div>
      <Link to={'/create'} className='px-8 py-2 rounded-lg shadow-lg font-semibold hover:scale-105 shadow-gray-500 bg-blue-700 active:scale-75 transition-all duration-300 text-lg text-white'>
        Get Started Free
      </Link>
    </div>
  )
}

export default GetStarted