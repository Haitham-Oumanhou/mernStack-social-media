import "./Feed.css"
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../dummyData";


export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
