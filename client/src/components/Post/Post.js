import "./Post.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState ,useEffect} from "react";
import axios from "axios";
import {format} from "timeago.js"

export default function Post( {post} ) {
    //console.log(post)
    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const [user,setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
    const likeHandler =()=>{
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
    }

    useEffect (() => {
      const  fetchUser = async () =>{
        //console.log(post.userId);
        const res = await axios.get(`users/${post.userId}`)
        //console.log(res)
        setUser(res.data)
      }
      fetchUser();},[post.userId])
   
    
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" 
            src={user.profilePicture || PF+"person/default.png"}
            alt="  "/>
            <span className="postUsername">
                {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post?.img} alt="" />
        </div>
        <div className="postBottom"> 
          <div className="postBottomLeft" >
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            {/* <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" /> */}
            <span className="postLikeCounter">{like}  likes it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
