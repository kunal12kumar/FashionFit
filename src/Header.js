import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Menu from './Menu'


export default function Header() {

    // this is for the  displaying of menubar 
    let [menubar,setmenubar]=useState(false)

    return (
        <div>
            {/* this is for the discount message part on the top */}
            <div className='m-full h-full md:h-[60px] bg-gradient-to-r from-[#d284a0] to-[#7fa7da]'>
                <h1 className='text-center font-serif text-[20px] font-bold p-3'>10 % Discount on shopping of 5000 and above</h1>

            </div>

            {/* this is for the nav bar in which search bar login page and other things */}
            <div className='bg-[#57FBFF] w-full h-[90px] navb px-9 my-auto '>
                {/* this is for the menu bar */}
                <div>
                    <h1 className='text' onClick={()=>setmenubar(!menubar)}>MENU</h1>
                </div>
                {/* this is for the home */}
                <div>
                    <h1 className='text ml-32'><Link to={'/'}>FaShiOn FiT</Link></h1>
                </div>

                {/* this is for the about contact us and login page */}
                <div className='navb1'>
                    <h1 className='text'>Search bar</h1>
                    <h1 className='text'><Link to={'/Login'}>Login</Link></h1>
                    <h1 className='text'>CART</h1>
                </div>
                

            </div>
            <Menu menubar={menubar} setmenubar={setmenubar}></Menu>
        </div>
    )
}



