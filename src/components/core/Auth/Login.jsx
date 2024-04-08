import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../../services/operations/authAPI'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [isPassVisible, setIsPassVisible] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }


  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <div>
        <form onSubmit={handleOnSubmit} className='flex items-center justify-center w-full px-5'>
         <div className='w-[450px] p-6 mt-5 rounded-md shadoww'>
          <div className='pb-3'>
            <h3 className='text-[#008080] font-bold text-2xl'>Login</h3>
          </div>

            <label htmlFor='email'>
                <p className='flex mb-1 text-sm text-[#008080]'>
                    Email <span className='flex text-pink-200'>*</span>
                </p>
                <input 
                required
                type="text"
                name='email'
                id='email'
                placeholder='Email'
                value={email}
                onChange={handleOnChange}
                className='w-full rounded-md bg-slate-50 p-[12px] text-black border  border-[#a855f7] mb-2 hover:border-[#7e22ce] focus:border-[#008080] select-none'
                 />
            </label>

            <label htmlFor='password' className='relative'>
                <p className='flex mb-1 text-sm text-[#008080]'>
                    Password <span className='flex text-pink-200'>*</span>
                </p>
                <input 
                required
                type= {isPassVisible ? "text" : "password"}
                name='password'
                id='password'
                placeholder='Password'
                value={password}
                onChange={handleOnChange}
                className='w-full rounded-md bg-slate-50 p-[12px] text-black border  border-[#a855f7] mb-2 hover:border-[#7e22ce] focus:border-[#008080] select-none'
                 />
                 <span 
                  className='absolute mt-3 cursor-pointer right-2'
                  onClick={() => setIsPassVisible((prev) => (!prev))} 
                  >
                  {isPassVisible ? <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiFillEye fontSize={24} fill="#AFB2BF" />}
                 </span>

            </label>
            
            <button 
            type='submit'
            className='px-5 py-2 mt-3 rounded-sm bg-[#008080] text-white text-sm
             hover:bg-[#7e22ce] duration-200 ease-in-out hover:drop-shadow-xl'>
                LOGIN
            </button>

            <div className='mt-2'>
              <p>Don't have an account? 
                <Link to='/signup'>
                <span className='text-[#008080] font-bold ml-1'>Register Now</span>  
                </Link>
              </p>
            </div>
        </div>
      </form>
    </div>
  )
}
