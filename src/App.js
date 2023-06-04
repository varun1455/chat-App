import './App.css';
import Username from './components/inputdisplayname';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChatRoom  from './components/chatbox';

// import { useEffect } from 'react';

function App() {
	return (
		<div className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
			<Router>
				<Routes>
					<Route index element={<Username />} />
					<Route path="chat/" element={<ChatRoom />} />
					<Route path="*" element={<h1>404 Not found</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;