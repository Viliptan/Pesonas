import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function TopBar() {
	return (
		<Box
			width="100vw"
			height="10vh"
			display="flex"
			flexDirection="row"
			sx={{ backgroundColor: "#144F70" }}
		>
			{/* Logo */}
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="flex-end"
				width="60%"
				height="100%"
			>
				<Box
					display="flex"
					flexDirection="row"
					width="75%"
					height="100%"
				>
					<img src={Logo} alt="logo" height={80} width={80} />
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-around"
						sx={{ ml: "5%" }}
					>
						<Typography color="white" variant="h6">
							AGENSI PEKERJAAN
						</Typography>
						<Typography color="white" variant="h4">
							PESONAS
						</Typography>
					</Box>
				</Box>
			</Box>
			{/* Navigation */}
			<Box
				width="40%"
				height="100%"
				display="flex"
				flexDirection="row"
				justifyContent="space-evenly"
				alignItems="center"
			>
				<Typography component={Link} to="/" color="white" variant="h6">
					Our Service
				</Typography>
				<Typography component={Link} to="/about-us" color="white" variant="h6">
					About Us
				</Typography>
				<Typography component={Link} to="/contact-us" color="white" variant="h6">
					Contact Us
				</Typography>
			</Box>
		</Box>
	);
}

export default TopBar;
