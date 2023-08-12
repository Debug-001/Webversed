import React from "react";
import { useState } from 'react'
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Prem from "./pages/Prem";
import Pay_basic from "./pages/Pay_basic";
import Pay_pre from "./pages/Pay_pre";
import Basic from "./pages/Basic";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About"
import Card from "./pages/Card";
import Card2 from "./pages/Card2";
import Card3 from "./pages/Card3";
import Card4 from "./pages/Card4";
import Card5 from "./pages/Card5";
import CardInfo from "./pages/CardInfo"

function App() {
	const [infoData, setInfoData] = useState(CardInfo);
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/prem" element={<Prem />} />
				<Route path="/pay_basic" element={<Pay_basic />} />
				<Route path="/pay_pre" element={<Pay_pre />} />
				<Route path="/basic" element={<Basic />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/services" element={<Services />} />
				<Route path="/card" element={<Card infoData={infoData} />} />
				<Route path="/card2" element={<Card2 />} />
				<Route path="/card3" element={<Card3 />} />
				<Route path="/card4" element={<Card4 />} />
				<Route path="/card5" element={<Card5 />} />
			</Routes>
		</>
	);
}

export default App;
