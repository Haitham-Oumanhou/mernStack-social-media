import "./Sidebar.css"

import NewspaperIcon from '@mui/icons-material/Newspaper';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <NewspaperIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatBubbleIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideoIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon  className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
        
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="SidebarFriend">
            <img className="SidebarFriendImg" src="/assets/person/1.png" alt=""/>
            <span className="sidebarFriendName">Bocchi san</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
