import React, { useEffect } from 'react'
import { useState } from 'react'
import BlogList from './BlogList'
function FakeApi() {
    const [blog,setBlog]= useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then ((res)=>res.json())
        .then ((data)=> {
            console.log(data);
            setBlog(data);
    })
},[blog])
    
  return (
    <div>
      {blog && <BlogList blog={blog}/> }
    </div>
  )
}

export default FakeApi
