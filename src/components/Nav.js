import React from "react";
import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	headerMenu: {
		padding: theme.spacing(2, 0),
		background: "#f4f4f4",
		width: "100vw",
		borderBottomLeftRadius: 35,
		borderBottomRightRadius: 35,
		zIndex: 100,
	},
	menu: {
		margin: theme.spacing(0, 1),
		position: "absolute",
		bottom: 0,
		padding: theme.spacing(1, 0),
		height: 15,
		width: "95vw",
		background: "#fff",
		borderRadius: 20,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		"& .MuiButton-root:hover": {
			background: "#2ca2f5",
		},
	},
	menuItem: { fontSize: 11, margin: theme.spacing(2, 0.5), color: "#9EA2A9" },
	allBtn: {
		background: "#46AEF7",
		borderRadius: 20,
		color: "#fff",
		padding: theme.spacing(1, 3),
	},
}));
function Nav() {
	const classes = useStyles();
	return (
		<div className={classes.headerMenu}>
			<div className={classes.menu}>
				<Button className={classes.allBtn}>全部</Button>
				<div className={classes.menuItem}>体育赛事</div>
				<div className={classes.menuItem}>真正的人</div>
				<div className={classes.menuItem}>电子竞赛</div>
				<div className={classes.menuItem}>电子游戏</div>
				<div className={classes.menuItem}>国际象棋</div>
			</div>
		</div>
	);
}

export default Nav;
