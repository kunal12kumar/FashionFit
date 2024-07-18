import React, { useState } from 'react'
import Header from '../Header'
import { ToastContainer } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'



export default function NewRegister() {

    let [addnewuserdata,setaddnewuserdata]=useState(
        {
            firstname:'',
            lastname:'',
            uemail:'',
            upassword:''
        }
    )

    let getnewValue=(event)=>{
        let oldnewdata={...addnewuserdata}
        let inputname=event.target.name
        let inputvalue=event.target.value
        oldnewdata[inputname]=inputvalue
        setaddnewuserdata(oldnewdata)
    }

    let [allnewuserdata,setallnewuserdata]=useState([

    ])

    let notreload=(event)=>{
        let dataofnewuser={
            firstname:addnewuserdata.firstname,
            lastname:addnewuserdata.lastname,
            uemail:addnewuserdata.uemail,
            upassword:addnewuserdata.upassword
        }

        let toaddnewdatainarray=[...allnewuserdata,dataofnewuser]
        setallnewuserdata(toaddnewdatainarray)
        console.log(setallnewuserdata)

        setaddnewuserdata({
            firstname:'',
            lastname:'',
            uemail:'',
            upassword:''
        })


        event.preventDefault()
    }
    let [pdisplay,setpdisplay]=useState(true)









    return (
        <div>
            <Header></Header>
            <form onSubmit={notreload}>
                <ToastContainer></ToastContainer>
                <div className='login pb-9 '>

                    <div className='w-[55%] h-[80%] my-auto mx-auto text-center py-[40px] font-serif text-[18px] '>

                        <h1 className='m-4 font-bold text-3xl'>REGISTER</h1>
                        <h1 className='m-4'>Please Fill The Form Below</h1>

                        <div className='w-[90%] h-[95%] border-[1.5px] border-black shadow-2xl box'>
                            <input type="text" onChange={getnewValue}  value={addnewuserdata.firstname} name='firstname' placeholder='First Name' className='inputbox' required  ></input>
                            <input type="text"  onChange={getnewValue} value={addnewuserdata.lastname} name='lastname'   placeholder='Last Name' className='inputbox' required  ></input>
                            <input type="text" onChange={getnewValue} value={addnewuserdata.uemail} name='uemail'   placeholder='Email' className='inputbox'  required ></input>
                            <input type={pdisplay? 'text':'password'}  onChange={getnewValue} value={addnewuserdata.upassword} name='upassword'  placeholder='Password' className='inputbox' required ></input>
                            <span className='passworddisplaynew' onClick={()=>setpdisplay(!pdisplay)}><FontAwesomeIcon  icon={pdisplay? faEye:faEyeSlash}></FontAwesomeIcon></span>
                            <button  className='inputbox bg-red-300 hover:scale-90' >CREATE MY ACCOUNT</button>
                        </div>

                        <h1 className='m-4 pr-11'>By creating an account, you agree to our terms and privacy policy.</h1>

                    </div>

                </div>
            </form>
        </div>
    )
}
