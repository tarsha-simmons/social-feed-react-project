import { useState } from "react";

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
        props.addNewPost(newPost)
    }
    <form onSubmit={handleSubmit}>
    <div className='mb-3'>
        <label className='form-label'>Name</label>
        <input type="text" className='form-control' value={userName} onChange={(event) => setUserName(event.target.value)}/>
        <label className='form-label'>Post</label>
        <textarea className='form-control' value={postBody} onChange={(event) => setPostBody(event.target.value)}>placeholder</textarea>
        <button className='btn btn-info' type='submit'>Create</button>
    </div>
</form>
}

    export default CreatePost;