import axios from 'axios'
import React, { useEffect, useState } from 'react'

// In this we will display product we have and all its image
export default function Product() {

  let [product, setproduct] = useState([])


  let getProducts = () => {

    axios.get('https://dummyjson.com/products?sortBy=title&order=asc')
      .then((Response) => Response.data)
      .then((res) => {
        console.log(res.products[0])
        setproduct(res.products)
      })

  }

  useEffect(() => {

    getProducts()

  }, [product])

  let productitems = product.map((v, i) => {

    return (
      <Prodbox object={v} key={i}></Prodbox>
    )


  })



  return (
    <div className='prodbox w-full h-full grid grid-cols-4 gap-3'>

      {productitems}

    </div>
  )
}


function Prodbox({ object }) {
  console.log(object)


  // let obj=props.id
  // console.log(obj)

  return (
    <div className=' border-2 border-red rounded-lg h-[300px] shadow m-3 bg-[#987bca] prod cursor-pointer'>
      <img className='w-[85%] mx-auto h-[65%] rounded-lg' src={object.thumbnail}></img>
      <h1 className='text' >{object.price}</h1>
      <h1 className='text underline' >{object.category}</h1>
    </div>
  )

}
