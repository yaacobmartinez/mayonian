import React from "react";
import { makeStyles, Grid, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: 340,
		paddingBottom: 70,
	},
	item: {
		padding: theme.spacing(1, 2),
	},
}));
const items = [
	{ img: "/images/items/BTI.png", alt: "bti", link: "/u/bti" },
	{ img: "/images/items/IM-sports.png", alt: "imsports", link: "/u/im-sports" },
	{ img: "/images/items/sports.png", alt: "sports", link: "/u/sports" },
	{ img: "/images/items/AG.png", alt: "ag", link: "/u/ag" },
	{ img: "/images/items/EB.png", alt: "eb", link: "/u/eb" },
	{
		img: "/images/items/IM-esports.png",
		alt: "imesports",
		link: "/u/im-esports",
	},
	{ img: "/images/items/KY.png", alt: "ky", link: "/u/ky" },
	{ img: "/images/items/CQ.png", alt: "cq", link: "/u/cq" },
	{ img: "/images/items/PT.png", alt: "pt", link: "/u/pt" },
	{ img: "/images/items/MG.png", alt: "mg", link: "/u/mg" },
];
function Items() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container style={{ position: "relative", zIndex: 0 }}>
				{items.map((_) => (
					<Grid item xs={12} sm={6} className={classes.item} key={_.alt}>
						<Button>
							<img src={_.img} alt={_.alt} style={{ width: "100%" }} />
						</Button>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default Items;
