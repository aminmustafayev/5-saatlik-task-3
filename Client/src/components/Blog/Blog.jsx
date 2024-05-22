import React from 'react'
import './blog.scss'
const Blog = () => {
  return (
    <>
    <div className="blog">
        <div className="container">
        <div className="blog-text">
            <h1>Latest Blogs</h1>
        </div>
            <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="all-blog">
                <div className="img-blog">
                    <img style={{width:"100%",height:"100%"}} src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg.webp" alt="" />
                </div>
            </div>
        </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="all-blog">
                <div className="img-blog">
                    <img style={{width:"100%",height:"100%"}} src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg.webp" alt="" />
                </div>
            </div>
        </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="all-blog">
                <div className="img-blog">
                    <img style={{width:"100%",height:"100%"}} src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg.webp" alt="" />
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog