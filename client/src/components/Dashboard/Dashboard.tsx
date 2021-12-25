import { useEffect } from 'react';
import Messages from "../Messages/Messages";
import SendMessage from "../SendMessage/SendMessage";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from 'react-redux';
import { ACTION } from '../../actions/types';

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("Dashboard");
		dispatch({ type: ACTION.INITIALIZE_SOCKET });
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
