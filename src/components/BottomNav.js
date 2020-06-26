import React from "react";
import { ReactComponent as Home } from "../_icon/home_on.svg";
import { ReactComponent as Promotion } from "../_icon/promotion.svg";
import { ReactComponent as CustomerService } from "../_icon/customer-service.svg";
import { ReactComponent as Profile } from "../_icon/profile.svg";
import {
	makeStyles,
	BottomNavigation,
	BottomNavigationAction,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	bottomNavIcon: { height: 30 },
	bottomNav: {
		width: "100vw",
		position: "fixed",
		bottom: 0,
		height: 70,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
	},
}));
function BottomNav() {
	const classes = useStyles();
	const [bottomNav, setBottomNav] = React.useState(0);
	return (
		<BottomNavigation
			value={bottomNav}
			onChange={(e, newValue) => {
				setBottomNav(newValue);
			}}
			className={classes.bottomNav}
			showLabels>
			<BottomNavigationAction
				label='首页'
				icon={<Home className={classes.bottomNavIcon} />}
			/>
			<BottomNavigationAction
				label='促销'
				icon={<Promotion className={classes.bottomNavIcon} />}
			/>
			<BottomNavigationAction
				label='客人服务'
				icon={<CustomerService className={classes.bottomNavIcon} />}
			/>
			<BottomNavigationAction
				label='个人中心'
				icon={<Profile className={classes.bottomNavIcon} />}
			/>
		</BottomNavigation>
	);
}

export default BottomNav;
