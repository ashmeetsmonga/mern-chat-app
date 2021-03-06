const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

app.use("/api/user", userRoutes);

app.get("/api/chat/:id", (req, res) => {
	const singleChat = chats.find((c) => c._id === req.params.id);
	res.send(singleChat);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));
