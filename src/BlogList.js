const BlogList = ({blogs,title,handleDelete}) => {
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            <hr/>
            <br/>
            {blogs.map((blog)=>(
                <a href={`/blog/${blog.id}`}>
                     <div className="blog-preview" key={blog.id}>
                        <h1>{blog.title}</h1>
                        <p>posted by {blog.author}</p>
                     </div>
                </a>
        ))}
        <br/>
        </div>
     );
}
 
export default BlogList;