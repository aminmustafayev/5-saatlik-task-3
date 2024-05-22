import React, { useContext } from 'react'
import './crud.scss'
import { dataContext, useDataContext } from '../../context/context'
import { Link } from 'react-router-dom'
const Crud = () => {
const{coloData,addToWishlist,addToBasket}=useContext(dataContext)
console.log(coloData)
    return (
        <>
            <div className="crud">
                <div className="container">
                    <div className="crud-text">
                        <h1>New Arrivals</h1>

                    </div>
                    <div className="row">
                       { coloData?.map((item,idx)=>{
                       return( <div key={idx} className="col-lg-3 col-md-4 col-sm-6 col-12">
                       <div className="all-crud">
                           <div className="img-crud">
                               <img style={{ width: "100%", height: "100%" }} src={item.imgSrc} alt="" />
                           </div>
                           <div className="curd-title">
                               <span>{item.name}</span>
                               <p>${item.price}</p>
                           </div>
                           <button className='btn btn-primary' onClick={()=>{
                               addToWishlist(item)
                           }}>Wishlist</button>
                           <button className='btn btn-success' onClick={()=>{
                               addToBasket(item)
                           }}>Basket</button>
                           <button className='btn btn-warning'>
                            <Link to={`/${item._id}`}>Detail</Link>
                           </button>
                       </div>
                   </div>)
                       })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crud