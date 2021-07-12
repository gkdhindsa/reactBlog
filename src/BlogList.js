const BlogList = ({blogs, title, HandleDelete})=>{
    
    // const HandleDelete = (id)=>{
    //     const newBlogs=blogs.filter((blog)=> blog.id!==id)  
    //     setBlogs(newBlogs)
    // }
    return (

        <div>
            <h1>{title}</h1>
            {
                blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>
                <button onClick={()=>HandleDelete(blog.id)}>Delete Blog</button>
                </div>
                    ))
            }
        </div>
       
    )
}

export default BlogList