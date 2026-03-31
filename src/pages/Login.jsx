import { useState } from 'react'
import { AuthCon } from '../contexts/auth.context'
import useAuth from '../hooks/auth.hook'
import { Link } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'
const Login = () => {

  const { user, loader } = AuthCon();
  const { login } = useAuth()

  const model = {
    username: '',
    email: '',
    password: ''
  }


  const [formData, setFormData] = useState(model)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState({})

  const handelInput = (e) => {
    const input = e.target
    const value = input.value
    const name = input.name
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validate = () => {
    let newError = {}

    if (!formData.email.includes('@')) newError.email = 'Valid email required'
    if (formData.password.length !== 6) newError.password = 'Min 6 characters'

    setError(newError)
    return Object.keys(newError).length === 0
  }

  const handelSign = async (e) => {
    e.preventDefault();

    if (!validate()) return

    login(formData)

    setFormData(model)
  }


  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-indigo-500 p-8'>
      <form className='flex flex-col gap-4 md:w-4/12 w-full bg-white/30 backdrop-blur-xl p-6 rounded-lg' onSubmit={handelSign}>
        <h1 className='text-center font-bold text-2xl text-white'>Login</h1>

        <div className='flex flex-col gap-2'>
          <label className='font-semibold text-white'>Email</label>
          <input
            type="text"
            onChange={handelInput}
            value={formData.email}
            name='email'
            placeholder='Enter your email here'
            className='w-full p-2 rounded-lg outline-none border border-gray-300 focus:border-gray-400' />
          {error.email && <p className='text-sm text-red-500 mt-1 font-semibold'>{error.email}</p>}
        </div>

        <div className='flex flex-col gap-2 '>
          <label className='font-semibold text-white'>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            onChange={handelInput}
            value={formData.password}
            name='password'
            placeholder='************'
            className='w-full p-2 rounded-lg  outline-none border border-gray-300 focus:border-gray-400' />
          {error.password && <p className='text-sm text-red-500 mt-1 font-semibold'>{error.password}</p>}
        </div>

        <span
          className='absolute top-[204px] left-[360px] cursor-pointer text-blue-500 font-semibold'
          onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>

        <div className='flex justify-center items-center'>
          <button className='px-4 py-2 bg-indigo-500 text-white rounded-lg font-semibold focus:border-indigo-500
          '>{loader ? <LoaderCircle className="animate-spin" size={15} /> : 'Submit'}</button>
        </div>

        <div className="text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <Link to="/sign" className="text-blue-600 hover:underline font-medium">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login