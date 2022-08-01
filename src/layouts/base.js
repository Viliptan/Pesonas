import React from "react";
import { Grid } from "@mui/material";
import TopBar from "../components/topBar";
import BottomBar from "../components/bottomBar";

function Base(props) {
	return (
		<Grid container width="100%" height="100vh">
			<TopBar />
			{props.children}
			<BottomBar />
		</Grid>
	);
}

export default Base;
