import "./Share.css"

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LabelIcon from '@mui/icons-material/Label';
import PlaceIcon from '@mui/icons-material/Place';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState();
  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    try {
      await axios.post("/posts", newPost)
    } catch (err) {

    }
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "person/default.png"} alt="" />
          <input
            placeholder={"What's in your mind " + user.username + " ?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <AddPhotoAlternateIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Media</span>
              <input
                style={{ display: "none" }}
                type="file" id="file"
                accept=".png, .jpeg, .jpg, .webp"
                onChange={(e) => setFile(e.target.files[0])} />
            </label>
            <div className="shareOption">
              <LabelIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Hashtag</span>
            </div>
            <div className="shareOption">
              <PlaceIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Place</span>
            </div>
            <div className="shareOption">
              <AddReactionIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Reaction</span>
            </div>
          </div>
          <button className="shareButton" typer="submit">Share</button>
        </form>
      </div>
    </div>
  )
}
