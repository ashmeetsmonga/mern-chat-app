import { Route } from "react-router-dom";
import ChatPage from "./ChatPage";
import HomePage from "./HomePage";

function App() {
	return (
		<div className='w-screen h-screen'>
			<Route path='/' exact component={HomePage} />
			<Route path='/chats' component={ChatPage} />
		</div>
	);
}

export default App;
