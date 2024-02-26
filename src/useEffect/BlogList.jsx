import React from 'react'

const BlogList = ({blog}) => {
  return (
    <div>
      {blog.map((blog, idx)=>(

       <>
        {/* <h1>{blog.title}</h1> 
       <img src={blog.thumbnailUrl} alt="" /> */}
       {/* <h1>{blog.address.geo.lat}</h1> */}
       <h1>{blog.title}</h1>
       <img src={blog.url} alt="" />
       
       </>
    ))}
    </div>
  )
}

export default BlogList;
