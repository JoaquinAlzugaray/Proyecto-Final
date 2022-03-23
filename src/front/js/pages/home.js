import React from "react";
import "../../styles/home.css";
import LoginForm from "../component/formLogin";
import Jumbotron from "../component/Jumbotron";
import PasswordRecovery from "../component/PasswordRecovery";


const Home = () => {
	return(
		<div className="text-center mt-5">
		{/* <Jumbotron/> */}
		<PasswordRecovery />
		</div>
	)	
};
	


export default Home;