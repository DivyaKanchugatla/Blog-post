import './App.css';
import React, {useEffect, useState} from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import {nanoid} from "nanoid"

function App() {
  const [data,setData] = useState([])
  const [newTitle,setNewTitle] = useState("")
  const [newBody,setNewBody] = useState("")
  const [show,setShow] = useState(false)

  
  const API_URL = "https://jsonplaceholder.typicode.com/posts"
  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await axios.get(API_URL)
      const results = await response.data
      setData(results)
    }
    fetchPosts();
  },[])
  const createPost = async () => {
    const newPost = {
      id: data.legth+1,
      title: newTitle,
      body: newBody,
      userId:nanoid()
    }
    const response = await axios.post(API_URL,newPost)
    const results = await response.data
    setData([...data,results])
    setShow(false)
    console.log(results)
    setNewBody("")
    setNewTitle("")
  }
  const deletePost = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`)
    const result = await response.data
    console.log(result)
    const newData = data.filter((each)=>each.id!==id)
    setData(newData)
  }
  const updatePost = async (id) => {
    const newPost = {
      id:id,
      title:"updated",
      body:"changed",
      userId:nanoid()
    }
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,newPost)
    const res = await response.data
    console.log(res)
    const newData = data.map((each)=>{
      return each.id === id ? newPost : each
    })
    setData(newData)
  }
  return (
    <>
       <div className='header text-center'>
           <h3>Your Post</h3>
           {!show?<button className='btn btn-primary mt-3' onClick={()=>setShow(true)}>Create Post</button>:
           (<div><input type="text" placeholder="Enter Title Text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
           <input type="text" placeholder="Enter Body Text" value={newBody} onChange={(e)=>setNewBody(e.target.value)}/>
           <button onClick={createPost}>Save</button>
           </div>)}
        </div>
        {data.map((post)=>{
          return (
           <div className='text-center border m-3 p-2 post-container' key={post.id}>
              <p  className="border-none"><span>Title: </span>{post.title}</p>
              <p><span>Body: </span>{post.body}</p>
              <button onClick={()=>updatePost(post.id)}>Update Post</button>
              <button onClick={()=>deletePost(post.id)}>Delete Post</button> 
              
            </div>
          )
        })}
    </>
  );
}

export default App;
