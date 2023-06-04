import "./Share.css"

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LabelIcon from '@mui/icons-material/Label';
import PlaceIcon from '@mui/icons-material/Place';
import AddReactionIcon from '@mui/icons-material/AddReaction';

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.png" alt="" />
          <input
            placeholder="What's in your mind Bocchi?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <AddPhotoAlternateIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Media</span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Hashtag</span>
                </div>
                <div className="shareOption">
                    <PlaceIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Place</span>
                </div>
                <div className="shareOption">
                    <AddReactionIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Reaction</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
