import React, { useState } from 'react'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons/faX'

export default function Menu({ menubar,setmenubar }) {

    let [search,setsearch]=useState('')

    // this is for preventing it from geting reload
    let noreload=(event)=>{
        setsearch('')
        event.preventDefault()
    }


    return (
        <div className={`menubox ${menubar ? 'activemenu' : ''}`}  >
            <div className='w-[100%] h-[24%] bg-[#57FBFF] border-b-2 border-black upperbox'>

                <form className='form' onSubmit={noreload}>
                    <i className='search'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></i>
                    <input onChange={(event)=>setsearch(event.target.value)} value={search} className='w-[87%] mx-auto h-[50px] rounded-lg shadow-lg p-5 text-center' type='text' placeholder='search' ></input>
                    <i className='cross' onClick={()=>setmenubar(false)}><FontAwesomeIcon icon={faX} ></FontAwesomeIcon></i>

                </form>

            </div>

            <div className='w-[100%] h-full bg-white'>

                <div className='w-[full] h-[130px] -z-50 border-b-2  text-center border-black bg-white'>

                    <h1> pictures of our product</h1>
                </div>
                <Category></Category>

            </div>


            <div className='w-[100%] h-[15%] bg-[#57FBFF] border-b-2 border-black '></div>
        </div>
    )
}



function Category() {

    return (

        <div>
            <ul className='bg-white pt-2'>
                <li className='w-[320px] h-[50px] border-b-2'>Home</li>
                <li className='w-[320px] h-[50px] border-b-2'>Home</li>
                <li className='w-[320px] h-[50px] border-b-2'>Home</li>
                <li className='w-[320px] h-[50px] border-b-2'>Home</li>
                <li className='w-[320px] h-[50px] border-b-2'>Home</li>
            </ul>
        </div>
    )
}