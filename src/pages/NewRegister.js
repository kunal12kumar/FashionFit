import React from 'react'

export default function NewRegister() {
    return (
        <div>
            <div className='login pb-9 '>

                <div className='w-[55%] h-[80%] my-auto mx-auto text-center py-[40px] font-serif text-[18px] '>

                    <h1 className='m-4 font-bold text-3xl'>REGISTER</h1>
                    <h1 className='m-4'>Please Fill The Form Below</h1>

                    <div className='w-[90%] h-[95%] border-[1.5px] border-black shadow-2xl box'>
                        <input type="text" placeholder='First Name' className='inputbox' ></input>
                        <input type="text" placeholder='Last Name' className='inputbox' ></input>
                        <input type="text" placeholder='Email' className='inputbox' ></input>
                        <input type="text" placeholder='Password' className='inputbox'></input>
                        <button className='inputbox bg-red-300 hover:scale-90' >CREATE MY ACCOUNT</button>
                    </div>

                    <h1 className='m-4 pr-11'>By creating an account, you agree to our terms and privacy policy.</h1>
                    
                </div>

            </div>
        </div>
    )
}
