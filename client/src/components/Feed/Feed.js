import "./Feed.css"
import Share from "../Share/Share";
import Post from "../Post/Post";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Feed({username}) {
  const [posts,setPosts] = useState([]);  

  useEffect (() => {
    const  fetchPosts = async () =>{
      const res = username 
      ? await axios.get("/posts/profile/" + username) 
      : await axios.get("/posts/timeline/647df9f2c9ecd75856df0208");
      setPosts(res.data);
      console.log(res)
    }
    fetchPosts();
  },[username])
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>

        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}

      </div>
    </div>
  )
}
