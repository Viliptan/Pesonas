import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import Facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";

function BottomBar() {
	return (
		<Box
			width="100vw"
			height="30vh"
			display="flex"
			flexDirection="row"
			sx={{ backgroundColor: "#144F70" }}
		>
			{/* first */}
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				width="25%"
				height="100%"
			>
				<img src={Logo} alt="logo" height={200} width={200} />
				<Typography color="white" variant="overline">
					Copyright @2021 All rights reserved
				</Typography>
			</Box>
			{/* second */}
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="flex-end"
				alignItems="flex-start"
				width="35%"
				height="100%"
				sx={{ ml: "5%" }}
			>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="space-around"
					width="80%"
					height="45%"
				>
					<Typography color="white">
						Address: 8-1, Jalan Bandar Lima Belas, Pusat Bandar
						Puchong, 47180 Puchong, Selangor
					</Typography>
					<Typography color="white">Phone: +6012-374 7740</Typography>
					<Typography color="white">
						Email: a_p_p_pesonas@yahoo.com
					</Typography>
				</Box>
				<Box
					width="50%"
					height="40%"
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<img src={Facebook} alt="facebook" height={40} width={40} />
					<img src={whatsapp} alt="whatsapp" height={40} width={40} />
					<img
						src={instagram}
						alt="instagram"
						height={40}
						width={40}
					/>
				</Box>
			</Box>
			{/* third */}
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="flex-end"
				alignItems="flex-start"
				width="20%"
				height="100%"
			>
				<Box height="85%" width="100%">
					<Typography
						fontWeight="bold"
						color="white"
						sx={{ mb: "5%" }}
					>
						Company
					</Typography>
					<Typography color="white">Our Service</Typography>
					<Typography color="white">About Us</Typography>
					<Typography color="white">Contact Us</Typography>
				</Box>
			</Box>
			{/* fourth */}
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="flex-end"
				alignItems="flex-start"
				width="20%"
				height="100%"
			>
				<Box height="85%" width="100%">
					<Typography
						fontWeight="bold"
						color="white"
						sx={{ mb: "5%" }}
					>
						Our Services
					</Typography>
					<Typography color="white">Job Chances</Typography>
					<Typography color="white">Cleaning Service</Typography>
					<Typography color="white">Hire Now</Typography>
					<Typography color="white">Consultation</Typography>
					<Typography color="white">Price and Package</Typography>
					<Typography color="white">FAQ</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default BottomBar;
