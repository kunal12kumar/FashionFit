import React from 'react'
import './Header.css'
import NewRegister from './pages/NewRegister'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login pb-9 '>

      <div className='w-[55%] h-[80%] my-auto mx-auto text-center py-[40px] font-serif text-[18px] '>

        <h1 className='m-4 font-bold text-3xl'>LOGIN</h1>
        <h1 className='m-4'>Please Enter your Email and Password</h1>

        <div className='w-[90%] h-[90%] border-[1.5px] border-black shadow-2xl box'>
          <input type="text" placeholder='Email' className='inputbox' ></input>
          <input type="text" placeholder='Password' className='inputbox'></input>
          <button className='inputbox bg-red-300 hover:scale-95' >LOGIN</button>
        </div>
        
        <h1 className='m-4'>Don't have account?</h1>
        <span className='cursor-pointer m-2'><Link to={'/NewRegister'}>Create One</Link></span>
      </div>

    </div>
  )
}
