import React from 'react';
import Index from './pages/Index';	
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

//Css 
import "./assets/css/style.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";

function App() {
	return (
		<div className="App">			
			<Index /> 
			<Toaster /> 
		</div>	
	);
}

export default App;
