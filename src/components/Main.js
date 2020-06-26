import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Items from "./Items";
import BottomNav from "./BottomNav";
import Headers from "./Headers";
import Nav from "./Nav";
const useStyles = makeStyles((theme) => ({
	root: { minHeight: "100vh", background: "#F7F7F7" },
	header: {
		width: "100%",
		background: "#F4F4F4",
		borderBottomLeftRadius: 35,
		borderBottomRightRadius: 35,
		boxShadow: "5px 4px 21px 7px rgba(230,230,230,1)",
		position: "fixed",
		zIndex: theme.zIndex.drawer + 1,
	},
}));
function Main() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Box className={classes.header}>
				<Headers />
				<Nav />
			</Box>
			<Items />
			<BottomNav />
		</div>
	);
}

export default Main;
