import React from "react";

import {
	Button,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export type ThemeToggleButtonProps = {
	ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
	const {
		ColorModeContext = React.createContext({ toggleColorMode: () => {} }),
	} = props;
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	const mobileCheck = useMediaQuery("(min-width: 900px)");

	return (
		<Button
			color="inherit"
			component="label"
			variant="text"
			onClick={colorMode.toggleColorMode}
			sx={{ px: mobileCheck ? 2 : 0 }}
			startIcon={
				theme.palette.mode === "dark" ? (
					<Brightness4Icon />
				) : (
					<Brightness7Icon />
				)
			}
		>
			{mobileCheck && `${theme.palette.mode}`}
		</Button>
	);
};

export default ThemeToggleButton;
