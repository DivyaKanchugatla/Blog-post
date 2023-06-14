import React ,{useState} from "react";

const CreatePost = (props) => {
    const [newTitle,setNewTitle] = useState("")
    const [newBody,setNewBody] = useState("")
    return (
        <>
          <div className='header text-center'>
           <h3>Your Post</h3>
           {!props.show?<button className='btn btn-primary mt-3' onClick={()=>props.setShow(true)}>Create Post</button>:
           (<div><input type="text" placeholder="Enter Title Text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
           <input type="text" placeholder="Enter Body Text" value={newBody} onChange={(e)=>setNewBody(e.target.value)}/>
           <button onClick={()=>props.createPost(newBody,newTitle,setNewBody,setNewTitle)}>Save</button>
           </div>)}
        </div>
        </>
    )
}
export default CreatePost;