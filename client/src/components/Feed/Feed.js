import "./Feed.css"
import Share from "../Share/Share";
import Post from "../Post/Post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";



export default function Feed({username}) {
  const [posts,setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect (() => {
    const  fetchPosts = async () =>{
      const res = username 
      ? await axios.get("https://skulga-api.onrender.com/api/posts/profile/" + username) 
      : await axios.get("https://skulga-api.onrender.com/api/posts/timeline/" + user._id );
      setPosts(res.data);
      console.log(res)
    }
    fetchPosts();
  },[username,user._id])
  
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
