import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams,Link } from "react-router-dom";

const PostDetails = () => {
    const [postData,setPostData] = useState([])
    const API_URL = "https://jsonplaceholder.typicode.com/posts"
    const {id} = useParams()
    useEffect(()=>{
        const fetchPost = async () => {
            const response = await axios.get(`${API_URL}/${id}`)
            const res = await response.data
            setPostData([res])
        }
        fetchPost()
    },[id])
    return (
        <>
          {postData.map((post)=>{
          return (
           <div key={post.id} style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh",width:"50%",marginLeft:"400px"}}>
              <p  className="border-none"><span>Title: </span>{post.title}</p>
              <p><span>Body: </span>{post.body}</p>
              <Link to="/" style={{cursor:"pointer"}}>Back</Link>
            </div>
          )
        })}
        </>
    )
}
export default PostDetails;