import './App.css';
import React, {useEffect, useState} from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import {nanoid} from "nanoid"
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';

function App() {
  const [data,setData] = useState([])
  
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
  const createPost = async (newBody,newTitle,setNewBody,setNewTitle) => {
    const newPost = {
      id: data.legth+1,
      title: newTitle,
      body: newBody,
      userId:nanoid()
    }
    const response = await axios.post(API_URL,newPost)
    const results = await response.data
    console.log(results)
    setData([...data,results])
    setShow(false) 
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
    <CreatePost show={show} setShow={setShow} createPost={createPost}/>
    <Posts data={data} updatePost={updatePost} deletePost={deletePost} />
    </>
  );
}

export default App;
