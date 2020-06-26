import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { zhCN } from "@material-ui/core/locale";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";

const theme = createMuiTheme(
	{
		typography: {
			fontFamily: [
				"Poppins",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
		},
	},
	zhCN
);
function App() {
	return (
		<div>
			<Router>
				<ThemeProvider theme={theme}>
					<Switch>
						<Route exact path='/' component={Main} />
					</Switch>
				</ThemeProvider>
			</Router>
		</div>
	);
}

export default App;
