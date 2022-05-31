import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

const HomePage = () => {
	return (
		<div className='relative flex w-full h-full'>
			<h1 className='title absolute font-bold uppercase text-primary'>Chatz</h1>
			<div className='bg-primary basis-full flex justify-center items-center'>
				<Login />
			</div>
			<div className='basis-full flex justify-center items-center'>
				<Signup />
			</div>
		</div>
	);
};

export default HomePage;
