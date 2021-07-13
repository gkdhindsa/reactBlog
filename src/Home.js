
import BlogList from "./BlogList"
import useFetch from "./useEffect"
const Home = () => {
    const {data, isPending, error}=useFetch('http://localhost:8000/blogs')
    console.log(data)

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && < BlogList blogs={data} title={"All blogs"} />}
           
        </div>
     );
}
 
export default Home;