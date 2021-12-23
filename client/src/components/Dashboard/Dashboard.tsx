import Messages from "../Messages/Messages";
import SendMessage from "../SendMessage/SendMessage";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
	return (
	  <div className="dashboard">
  		<div className="grid-container">
  			<div className="sidebar-grid">
  				<Sidebar />
  			</div>

  			<div className="messages-grid">
  				<Messages />
  			</div>

  			<div className="send-messages-grid">
  				<SendMessage />
  			</div>
      </div>
    </div>
	)
};

export default Dashboard;
