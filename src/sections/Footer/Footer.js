import React from "react";
import "./Footer.css";
import logo from "../../Asserts/footlogo.png";
import { LiaDiscord } from "react-icons/lia";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export const Footer = () => {
	return (
		<div>
			<div className="footer">
				<div className="footersec">
					<img className="footlogo" src={logo} alt="" />
					<span>Plutope Private Limited</span>
					<div className="footicons">
						<LiaDiscord size={30}></LiaDiscord>
						<div style={{ width: "15px" }}></div>
						<AiOutlineInstagram size={30}></AiOutlineInstagram>
						<div style={{ width: "15px" }}></div>
						<FiTwitter size={30}></FiTwitter>
					</div>
				</div>
				<div className="footersec">
					<span className="footh">Legal</span>
					<span>Privacy Notice</span>
					<span>Terms of use</span>
				</div>
				<div className="footersec">
					<span className="footh">Let's Chat</span>
					<span>Have a support quesiton?</span>
					<span
						className="getintouch"
						onClick={() => {
							window.location = "mailto:support@plutope.io";
						}}
					>
						Get In touch
					</span>
				</div>
			</div>
			<img className="footlogomob" src={logo} alt="" />
			<div className="footermobile">
				<div className="footersec">
					<span className="footh">Legal</span>
					<span
						onClick={(e) => {
							e.preventDefault();
							window.location =
								"https://docs.google.com/document/d/1SyAvTXwXT9eAnOUfgekwYtn6kejd6NoL1y8g8qImjvU/edit?usp=drivesdk";
						}}
					>
						Privacy Notice
					</span>
					<span
						onClick={(e) => {
							e.preventDefault();
							window.location =
								"https://docs.google.com/document/d/1Ctlb01w7d_qnrnr_tdmK4gZm3Ur3GZ5euOBx11dsZi0/edit?usp=drivesdk	";
						}}
					>
						Terms of use
					</span>
					<div className="footicons">
						<LiaDiscord
							onClick={() => {
								window.location = "https://discord.gg/h3BnnxJAA5**";
							}}
							size={30}
						></LiaDiscord>
						<div style={{ width: "15px" }}></div>
						<AiOutlineInstagram
							onClick={() => {
								window.location = "https://www.instagram.com/plutope/**";
							}}
							size={30}
						></AiOutlineInstagram>
						<div style={{ width: "15px" }}></div>
						<FiTwitter
							onClick={() => {
								window.location = "https://twitter.com/Plutopeio**";
							}}
							size={30}
						></FiTwitter>
					</div>
				</div>
				<div className="footersec">
					<span className="footh">Let's Chat</span>
					<span>Have a support quesiton?</span>
					<span
						className="getintouch"
						onClick={() => {
							window.location = "mailto:support@plutope.io";
						}}
					>
						Get In touch
					</span>
				</div>
			</div>
		</div>
	);
};
