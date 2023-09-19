import React, { useEffect } from "react";
import "./Landsec2.css";
import sec2box1 from "../../Asserts/sec2box1.png";
import sec2box2 from "../../Asserts/sec2box2.png";
import sec2box3 from "../../Asserts/sec2box3.png";
import sec2price from "../../Asserts/sec2price.png";
import bigcards1 from "../../Asserts/bigcards1.png";
import bigcards2 from "../../Asserts/bigcards2.png";
import bigcards3 from "../../Asserts/bigcards3.png";
import sec3text from "../../Asserts/sec3text.png";
import sec3btn from "../../Asserts/reportbugbtn.png";
import manphoto from "../../Asserts/manphoto.png";
import google from "../../Asserts/gplay.png";
import apple from "../../Asserts/appstore.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Landsec2 = () => {
	useEffect(() => {
		AOS.init({ once: true });
		AOS.refresh();
	}, []);
	return (
		<div className="landsec2">
			<span className="landsec2title" data-aos="fade-down">
				How to <br /> <span style={{ fontWeight: "700" }}>Participate?</span>{" "}
			</span>
			<div className="sec2boxes">
				<div className="sec2box1cont">
					<img
						src={sec2box1}
						className="sec2box11"
						data-aos="fade-right"
						alt=""
					/>
					<img
						src={google}
						alt=""
						onClick={(e) => {
							e.preventDefault();
							window.location =
								"https://portal.testapp.io/apps/install/d31eK16w0V1Wg";
						}}
						className="gogoleimage"
					/>
					<img
						src={apple}
						alt=""
						className="appleimage"
						onClick={(e) => {
							e.preventDefault();

							window.location = "https://testflight.apple.com/join/2yDMHRSz";
						}}
					/>
				</div>
				<div className="sec2box1cont">
					{" "}
					<img src={sec2box2} alt="" data-aos="fade-left" />
				</div>
				<div className="sec2box1cont">
					<img src={sec2box3} alt="" data-aos="fade-right" />
				</div>
			</div>
			<div className="sec2price" data-aos="fade-down">
				<img src={sec2price} alt="" />
			</div>
			<div className="bigcards">
				<img src={bigcards1} alt="" data-aos="fade-right" />
				<img src={bigcards2} alt="" data-aos="fade-left" />
				<img src={bigcards3} alt="" data-aos="fade-right" />
			</div>
			<div className="sec3text">
				<img data-aos="fade-down" src={sec3text} alt="" />
				<a
					data-aos="flip-left"
					style={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
					href="https://forms.zohopublic.in/ashish26/form/ReportaBug/formperma/HMkaprv7pR_fitEL6bz15_5vgO43M1fy8uxVTD9V2Fg"
					target="_blank"
				>
					<img className="reportbtn" src={sec3btn} alt="" />
				</a>
			</div>
			<div className="man">
				<img data-aos="fade-down" src={manphoto} alt="" />
			</div>
		</div>
	);
};
