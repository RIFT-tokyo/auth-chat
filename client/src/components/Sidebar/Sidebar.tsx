import ChannelList from "./ChannelList";

const Sidebar = () => {
  return (
    <div className="sidebar">
		  <ChannelList />
    </div>
  )
}

export default Sidebar;

/*
Room list
  * RoomA
  * RoomB
  * RoomC
----------
Member list
  * MemberA
  * MemberB
  * MemberC
----------
<a>Profile</a>
<a>Settings</a>
*/