import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import './header.scss'

const Header = () => {
  return (
    <>
    <header>
        <nav>
            <div className="container">
                <div className="nav">
                    <div className="nav-one">
                        <a>Colo</a>
                        <span>Shop</span>
                    </div>
                    <div className="ul">
                        <ul>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/wishlist"}>Wishlist</Link>
                            </li>
                            <li>
                                <Link to={"/basket"}>Basket</Link>
                            </li>
                            <li>
                                <Link to={"/add"}>Add</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-icon">
                    <CiSearch />
                    <IoPersonSharp />
                    <SlBasket />
                    </div>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header