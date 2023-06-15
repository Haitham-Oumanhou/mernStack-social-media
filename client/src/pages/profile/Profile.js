import "./profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] = useState({})
  const username  = useParams().username;


  useEffect (() => {
    const  fetchUser = async () =>{
      //console.log(post.userId);
      const res = await axios.get(`https://skulga-api.onrender.com/api/users?username=${username}`)
      //console.log(res)
      setUser(res.data)
    }
    fetchUser();
  },[username])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={ user.coverPicture || PF+"/post/3.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture? PF+user.profilePicture : PF+"/person/default.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}