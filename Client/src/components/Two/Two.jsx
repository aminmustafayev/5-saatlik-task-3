import React from 'react'
import './two.scss'

const Two = () => {
    return (
        <>
            <div className="two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="all-two">
                                <div className="two-img">
                                    <img style={{ width: "100%", height: "100%" }} src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp" alt="" />
                                <div className="two-btn">
                                    <button className='btn btn-outline-light'>Women</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="all-two">
                                <div className="two-img">
                                    <img style={{ width: "100%", height: "100%" }} src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg.webp" alt="" />
                                <div className="two-btn">
                                    <button className='btn btn-outline-light'>ACCESSORIES'S</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="all-two">
                                <div className="two-img">
                                    <img style={{ width: "100%", height: "100%" }} src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg.webp" alt="" />
                                <div className="two-btn">
                                    <button className='btn btn-outline-light'>Men</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Two