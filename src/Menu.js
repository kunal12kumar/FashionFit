import React, { useEffect, useState } from 'react'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons/faX'
import axios from 'axios'

export default function Menu({ menubar, setmenubar }) {

    let [search, setsearch] = useState('')

    // this is for preventing it from geting reload
    let noreload = (event) => {
        setsearch('')
        event.preventDefault()
    }

   

    let [category,setcategory]=useState([])

    let URL="https://dummyjson.com/products/category-list"

    let getCategory = () => {

        // calling api by axios method

        axios.get(URL)
            .then((Response) => Response.data)
            .then((res) => {
                setcategory(res)

            })
        

    }

    useEffect(()=>{
        getCategory()
    },[])

    



    return (
        <div className={`menubox ${menubar ? 'activemenu' : ''}`}  >
            <div className='w-[100%] h-[24%] bg-[#57FBFF] border-b-2 border-black upperbox'>

                <form className='form' onSubmit={noreload}>
                    <i className='search'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></i>
                    <input onChange={(event) => setsearch(event.target.value)} value={search} className='w-[87%] mx-auto h-[50px] rounded-lg shadow-lg p-5 text-center' type='text' placeholder='search' ></input>
                    <i className='cross' onClick={() => setmenubar(false)}><FontAwesomeIcon icon={faX} ></FontAwesomeIcon></i>

                </form>

            </div>

            <div className='w-[100%] h-full bg-white overflow-hidden hover:overflow-auto'>

                <div className='w-[full] h-[130px] -z-50 border-b-2  text-center border-black bg-white'>

                    <h1> pictures of our product</h1>
                </div>
                { category.map((v,i)=>{
                     
                     return (
                        <Category value={v} key={i}></Category>
                     )
                })
            }

            </div>
            <div className='w-[100%] h-[15%]  bg-[#57FBFF] border-b-2 border-black '></div>
        </div>
    )
}



export function Category({value,setcatname}) {

    return (
        <ul className='bg-white pt-2'>
            <li className='w-[320px] h-[50px] font-serif uppercase   border-b-2 pl-4 cursor-pointer' onClick={()=>setcatname({value})}>{value}</li>

        </ul>

    )
}


// Getting data of category by api 

