import { Link } from "react-router-dom"
const BlogList = ({blogs, title})=>{
    
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
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>
                
                </div>
                    ))
            }
        </div>
       
    )
}

export default BlogList