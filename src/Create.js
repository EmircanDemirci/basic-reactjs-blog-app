import { useState } from "react";
import { useNNavigate, useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [author, setAuthor] = useState("venoox");
    const [isPending , setIsPending] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        let blog = {title,body,author};
        fetch("http://localhost:8000/blogs/" , {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            console.log("blog eklendi");
            setIsPending(false);
            navigate("/")
        })

        e.preventDefault();
    }
    return ( 
        <div className="create">
            <div className="form">
                <h1>Create</h1>
                <form onSubmit={(e)=>handleSubmit(e)} >
                    <input id="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" type="text" required/>
                    <textarea id="body" value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Body" type="text" required/>
                    <select id="cars" value={author} onChange={(e)=>setAuthor(e.target.value)}>
                        <option value="volvo">venoox</option>
                        <option value="saab">napoleon</option>
                    </select>
                    {!isPending && <input type="submit" value="Gönder"/>}
                    {isPending && <input type="submit" disabled value="Gönder"/> }
                </form>
            </div>
        </div>
     );
}
 
export default Create;