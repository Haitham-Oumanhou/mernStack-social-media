import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";

export default function Rightbar() {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.png" alt="" />
            <span className="birthdayText">
              <b>kita</b> and <b>3 other friends</b> have a birhday today.
            </span>
          </div>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    );
  }