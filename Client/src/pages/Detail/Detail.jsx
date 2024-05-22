import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { dataContext, useDataContext } from '../../context/context'
import {Link, useParams} from 'react-router-dom'


const Detail = () => {
  const {addToWishlist,addToBasket}= useContext(dataContext)

const {id} = useParams()
const[detail,setDetail]=useState({})
console.log(id)
useEffect(()=>{
axios.get(`http://localhost:7777/api/colo/${id}`).then((res)=>{
  setDetail(res.data.data)
  console.log(res)
})
},[])
  return (
<>
<div className="col-lg-3 col-md-4 col-sm-6 col-12">
                       <div className="all-crud">
                           <div className="img-crud">
                               <img style={{ width: "100%", height: "100%" }} src={detail.imgSrc} alt="" />
                           </div>
                           <div className="curd-title">
                               <span>{detail.name}</span>
                               <p>${detail.price}</p>
                           </div>
                           <button className='btn btn-primary' onClick={()=>{
                               addToWishlist(detail)
                           }}>Wishlist</button>
                           <button className='btn btn-success' onClick={()=>{
                               addToBasket(detail)
                           }}>Basket</button>
                           <button className='btn btn-warning'>
                            <Link to={"/"}>Go Back</Link>
                           </button>
                       </div>
                   </div>
</>
  )
}

export default Detail