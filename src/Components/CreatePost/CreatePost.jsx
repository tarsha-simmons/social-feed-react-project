import { useState } from "react";
import './CreatePost.css'

const CreatePost = (props) => {
    const [username, setUsername] = useState ("");
    const [postBody, setBody] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        
        let newPost = {
        username: username,
        postBody: postBody,
        timestamp: Date()
        }
        props.createNewPost(newPost);
    }
    return (
        <div>
    <form onSubmit={handleSubmit}>
    
        <label className='form-label'>Name</label>
        <input type="text" className='form-control' value={userName} onChange={(event) => setUserName(event.target.value)}/>
        <label className='form-label'>Post</label>
        <textarea className='form-control' value={postBody} onChange={(event) => setPostBody(event.target.value)}>placeholder</textarea>
        <button className='btn btn-info' type='submit'>Create</button>
</form>
</div>

    );
}

    export default CreatePost;