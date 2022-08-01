import React from "react";
import { Grid } from "@mui/material";
import Base from "../layouts/base";

function Home() {
	return (
		<Base>
			<Grid
				container
				width="100%"
				height="100vh"
				justifyContent="center"
				alignItems="center"
			>
				Home
			</Grid>
		</Base>
	);
}

export default Home;
