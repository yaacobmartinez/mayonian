import React from "react";
import { makeStyles, Typography, Divider } from "@material-ui/core";
import { ReactComponent as Messages } from "../_icon/messages.svg";
import { ReactComponent as Deposit } from "../_icon/deposit.svg";
import { ReactComponent as Withdrawal } from "../_icon/withdrawal.svg";
import { ReactComponent as Transfer } from "../_icon/transfer.svg";
const useStyles = makeStyles((theme) => ({
	headerImg: {
		width: "100%",
		height: "20vh",
		objectFit: "cover",
		borderRadius: 20,
	},
	headerContent: { padding: theme.spacing(1), textAlign: "center" },
	bannerText: {
		color: "#67BAF4",
		fontSize: 15,
		padding: theme.spacing(1.5, 0),
	},
	username: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: theme.spacing(0, 2, 1, 2),
	},
	headerDivider: { margin: theme.spacing(0, 3) },
	headerBtns: {
		padding: theme.spacing(1.5, 2),
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	icon: { height: 20 },
}));
function Headers() {
	const classes = useStyles();
	return (
		<div className={classes.headerContent}>
			<img
				src='/images/banner-image3.png'
				alt='banner'
				className={classes.headerImg}
			/>
			<Typography className={classes.bannerText}>
				尊敬的会员〜中华人民共和国银行已完成维护工作
			</Typography>
			<div className={classes.username}>
				<Typography variant='body2'>u2testraki</Typography>
				<Typography variant='body2'>
					中心 : ¥ <span style={{ fontSize: 20 }}>44.0</span>{" "}
				</Typography>
			</div>
			<Divider className={classes.headerDivider} />
			<div className={classes.headerBtns}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<Messages className={classes.icon} style={{ marginRight: 10 }} />
					信息
				</div>
				<div style={{ display: "flex", alignItems: "center" }}>
					<Deposit className={classes.icon} style={{ marginRight: 10 }} />
					充值
				</div>
				<div style={{ display: "flex", alignItems: "center" }}>
					<Withdrawal className={classes.icon} style={{ marginRight: 10 }} />
					提款
				</div>
				<div style={{ display: "flex", alignItems: "center" }}>
					<Transfer className={classes.icon} style={{ marginRight: 10 }} />
					转让
				</div>
			</div>
		</div>
	);
}

export default Headers;
