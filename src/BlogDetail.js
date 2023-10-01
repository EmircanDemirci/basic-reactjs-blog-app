import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetail = () => {
    const {id} = useParams()
    const {data:blog , isPending, error} = useFetch("http://localhost:8000/blogs/" + id);
    const navigate = useNavigate();

    const handleClick = ()=>{
        fetch("http://localhost:8000/blogs/" + blog.id , {
            method:"DELETE"
        }).then(()=>{
            navigate("/")
        })
    }
    return ( 
        <div className="detail">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <div className="blog-detail">
                    <hr/>
                    <div className="blog-header">
                        <h1>{blog.title}</h1>
                        <p><a href="#">{blog.author}</a> tarafından oluşturuldu.</p>
                    </div>
                    <hr/>
                    <br/>
                    <div className="blog-text">
                        <p>{blog.body}</p>
                    </div>
                    <div className="delete">
                        <a onClick={handleClick}>Sil</a>
                    </div>
                
                </div>

            )}
        </div>
     );
}
 
export default BlogDetail;