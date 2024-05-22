import React from 'react'
import './best.scss'
const Best = () => {
  return (
   <>
   <div className="best">
    <div className="container">
        <div className="best-text">
            <h1>Best Sellers</h1>
        </div>
        <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="all-best">
                <div className="img-best">
                    <img style={{width:"100%",height:"100%"}} src="https://preview.colorlib.com/theme/coloshop/images/product_4.png.webp" alt="" />
                </div>
                <div className="best-title">
                    <p>
                    DYMO LabelWriter 450 Turbo Thermal Label Printer
                    </p>
                    <a>$450</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="all-best">
                <div className="img-best">
                    <img style={{width:"100%",height:"100%"}} src="https://preview.colorlib.com/theme/coloshop/images/product_2.png.webp" alt="" />
                </div>
                <div className="best-title">
                    <p>
                    DYMO LabelWriter 450 Turbo Thermal Label Printer
                    </p>
                    <a>$450</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="all-best">
                <div className="img-best">
                    <img style={{width:"100%",height:"100%"}} src="https://preview.colorlib.com/theme/coloshop/images/product_3.png.webp" alt="" />
                </div>
                <div className="best-title">
                    <p>
                    DYMO LabelWriter 450 Turbo Thermal Label Printer
                    </p>
                    <a>$450</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="all-best">
                <div className="img-best">
                    <img style={{width:"100%",height:"100%"}} src="https://preview.colorlib.com/theme/coloshop/images/product_1.png.webp" alt="" />
                </div>
                <div className="best-title">
                    <p>
                    DYMO LabelWriter 450 Turbo Thermal Label Printer
                    </p>
                    <a>$450</a>
                </div>
            </div>
        </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Best