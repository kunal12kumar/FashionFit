import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Category } from '../Menu'

// In this we will display product we have and all its image
export default function Product() {

  let [product, setproduct] = useState([])
  let [catname,setcatname]=useState('')



  let getproductdetails=(()=>{

    return(
      axios.get(`https://dummyjson.com/products/category/${catname}`)
      .then((Response)=>Response.data)
      .then((res)=>{
        console.log(res.products)
        setproduct(res.products)
      })
    )
  })


  let getProducts = () => {

    axios.get('https://dummyjson.com/products?sortBy=title&order=asc')
      .then((Response) => Response.data)
      .then((res) => {
        setproduct(res.products)
      })



  }
  

  

  useEffect(() => {

      getProducts()
      
  },[])

  
  useEffect(()=>{
    if (catname!=''){
      console.log(catname)
      getproductdetails()
    }

  },[catname])

  let productitems = product.map((v, i) => {
  

    return (
      <Prodbox object={v} key={i} setcatname={setcatname} catname={catname}></Prodbox>
      
    )

    


  })
  

  





  return (
    <div className='prodbox w-full h-full grid lg:grid-cols-4 gap-3 grid-cols-2'>


      {productitems}

    </div>
  )
}


function Prodbox({ object,setcatname,catname}) {

  // let obj=props.id
  // console.log(obj)

  return (
    <div className=' overflow-hidden  border-2 border-red rounded-lg h-[300px] shadow m-3 bg-[#3D9DD9] prod cursor-pointer hover:scale-90' onClick={()=>setcatname(object.category)}>
      <img className='w-[85%] mx-auto h-[65%] rounded-lg' src={object.thumbnail}></img>
      <h1 className='text' >{object.price}</h1>
      <h1 className='text underline' >{catname!=''? `${object.title}`:`${object.category}`}</h1>
    </div>
  )

}
