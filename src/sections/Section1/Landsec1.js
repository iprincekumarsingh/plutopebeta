import React, { useEffect } from "react";
import "./Landsec1.css";
import logo from "../../Asserts/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Landsec1 = () => {
	useEffect(() => {
		AOS.init({ once: true });
		AOS.refresh();
	}, []);
	return (
		<div className="landsec1">
			<img src={logo} data-aos="fade-down" alt="" />
			<span className="landsec1header" data-aos="fade-right">
				Beta Testing <br /> is <span style={{ color: "#FF9595" }}>LIVE!</span>{" "}
			</span>
			<span data-aos="fade-left" className="landsec1subtitile">
				<span style={{ fontWeight: "700" }}>$3500 </span>
				worth of <br /> USDT up for Grabs!!!
			</span>
		</div>
	);
};
