import React from "react"
import { Link } from "react-router-dom"

const Posts = (props) => {
    return (
        <>
        {props.data.map((post)=>{
          return (
           <div className='text-center border m-3 p-2 post-container' key={post.id}>
              <p  className="border-none"><span>Title: </span>{post.title}</p>
              <p><span>Body: </span>{post.body}</p>
              <button onClick={()=>props.updatePost(post.id)}>Update Post</button>
              <button onClick={()=>props.deletePost(post.id)}>Delete Post</button> 
              <Link to={`/post/${post.id}`} style={{cursor:"pointer"}}>Details </Link>
            </div>
          )
        })}
        </>
    )
}
export default Posts