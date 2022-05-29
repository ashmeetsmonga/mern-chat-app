import React, { useEffect, useState } from "react";

const ChatPage = () => {
	const [chats, setChats] = useState([]);

	const fetchChats = async () => {
		const res = await fetch("/api/chat");
		const data = await res.json();
		setChats(data);
	};

	useEffect(() => {
		fetchChats();
	}, []);

	return (
		<div>
			{chats.map((chat) => (
				<div key={chat._id}>{chat.chatName}</div>
			))}
		</div>
	);
};

export default ChatPage;
