import "./Feed.css"
import Share from "../Share/Share";
import Post from "../Post/Post";
import { useEffect, useState } from "react";
import axios from "axios"



export default function Feed() {
  const [posts,setPosts] = useState([]);  
  useEffect (() => {
    const  fetchPosts = async () =>{
      const res = await axios.get("posts/timeline/647a776bab448ca9bf0b599c")
      setPosts(res.data)
      //console.log(res)
    }
    fetchPosts();
  },[])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>

       {posts.map((p) => (
          <Post key={p.id} post={p} />
       ))}
      </div>
    </div>
  )
}
