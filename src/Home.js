import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {

  const {data: blogs, isPending , error} = useFetch('http://localhost:8000/blogs');

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

 
  return ( 
    <div className="home">
      { error && <div>{ error }</div> }
      {isPending && <div>Loding...</div>}
      {blogs && <BlogList blogs={blogs} />}
  </div>
  );
}
 
export default Home;