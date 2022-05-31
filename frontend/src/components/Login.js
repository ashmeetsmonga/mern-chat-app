import React, { useState } from "react";

const classes = {
	Input:
		"outline-none border-2 border-primary rounded p-2 w-full text-gray-800 text-sm mb-3",
	Label: "font-bold text-gray-800",
};

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className='flex flex-col w-3/5 bg-white py-10 px-16 rounded-lg'>
			<div>
				<div className={classes.Label}>Email</div>
				<input
					className={classes.Input}
					type='text'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</div>
			<div>
				<div className={classes.Label}>Password</div>
				<input
					className={classes.Input}
					type='password'
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</div>

			<button className='bg-primary text-white p-2 rounded mt-4'>Login</button>
			<button
				className='bg-primary text-white p-2 rounded mt-4'
				onClick={() => {
					setEmail("guestUser@gmail.com");
					setPassword("123456");
				}}
			>
				Get Guest User Credentials
			</button>
		</div>
	);
};

export default Login;
