import { CopyrightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* large screen */}
      <div className='md:flex hidden justify-center items-center gap-5 p-8 bg-indigo-600 text-white'>
        <label className='flex justify-center items-center gap-2 cursor-pointer'>
          <CopyrightIcon size={18} />
          2026 NoteCraft AI
        </label>

        <div className='h-[20px] border border-gray-400'></div>

        <label className='cursor-pointer'>
          <a href="#Home">
            About
          </a>
        </label>

        <div className='h-[20px] border border-gray-400'></div>

        <label className='cursor-pointer'>
          <Link to={'/privatePolicy'}>
            Privacy policy
          </Link>
        </label>

        <div className='h-[20px] border border-gray-400'></div>

        <label className='cursor-pointer'>
          <Link to={'/contact'}>
            Contact
          </Link>
        </label>

        <div className='h-[20px] border border-gray-400'></div>

        <label className='cursor-pointer'>
          Github
        </label>
      </div>

      {/* small screen */}
      <div className='flex md:hidden justify-center items-center text-nowrap gap-5 p-4 text-[10px] bg-indigo-600 text-white'>
        <label className='flex justify-center items-center gap-2 cursor-pointer text-nowrap'>
          <CopyrightIcon size={18} />
          2026 NoteCraft AI
        </label>


        <label className='cursor-pointer'>
          <a href="#Home">
            About
          </a>
        </label>


        <label className='cursor-pointer'>
          <Link to={'/privatePolicy'}>
            Privacy policy
          </Link>
        </label>


        <label className='cursor-pointer'>
          <Link to={'/contact'}>
            Contact
          </Link>
        </label>


        <label className='cursor-pointer'>
          Github
        </label>
      </div>
    </>
  )
}

export default Footer