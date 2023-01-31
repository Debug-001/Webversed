import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Prem from "./pages/Prem";
import Pay_basic from "./pages/Pay_basic";
import Pay_pre from "./pages/Pay_pre";
import Basic from "./pages/Basic";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/home" element={<Home/>} />
				<Route path="/contact" element={<Contact/>} />
				<Route path="/prem" element={<Prem/>} />
				<Route path="/pay_basic" element={<Pay_basic />} />
				<Route path="/pay_pre" element={<Pay_pre/>} />
				<Route path="/basic" element={<Basic/>} />
				<Route path="/pricing" element={<Pricing/>} />
				<Route path="/services" element={<Services/>} />
			</Routes>
		</>
	);
}

export default App;
