import { ThemeOptions, createTheme } from "@mui/material";

const theme = createTheme();

// theme.typography.h3 = {
// 	fontSize: "1.2rem",
// 	"@media (min-width:600px)": {
// 		fontSize: "1.5rem",
// 	},
// 	[theme.breakpoints.up("md")]: {
// 		fontSize: "2.4rem",
// 	},
// };

const commonSettings: ThemeOptions = {
	typography: {
		h3: {
			fontSize: "1.2rem",
			"@media (min-width:600px)": {
				fontSize: "1.5rem",
			},
			[theme.breakpoints.up("md")]: {
				fontSize: "2.4rem",
			},
		},
	},
};

export default commonSettings;
