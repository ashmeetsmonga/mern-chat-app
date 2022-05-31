import React, { useState } from "react";

const classes = {
	Input:
		"outline-none border-2 border-primary rounded p-2 w-full text-gray-800 text-sm mb-3",
	Label: "font-bold text-gray-800",
};

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [pic, setPic] = useState("");

	const postDetails = (pic) => {};

	return (
		<div className='flex flex-col w-2/5'>
			<div>
				<div className={classes.Label}>Name</div>
				<input
					className={classes.Input}
					type='text'
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			</div>
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
			<div>
				<div className={classes.Label}>Confirm Password</div>
				<input
					className={classes.Input}
					type='password'
					onChange={(e) => setConfirmPassword(e.target.value)}
					value={confirmPassword}
				/>
			</div>
			<div>
				<div className={classes.Label}>Upload your Pic</div>
				<input
					className={classes.Input}
					type='file'
					accept='image/*'
					onChange={(e) => postDetails(e.target.files[0])}
				/>
			</div>
			<button className='bg-primary text-white p-2 rounded mt-4'>
				Sign Up
			</button>
		</div>
	);
};

export default Signup;
