import React from "react";
import { SessionProvider } from "next-auth/react";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";

import type { AppProps } from "next/app";
import { Page } from "@/types/Pages";

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

type Props = AppProps & {
	Component: Page;
};

const App = ({ Component, pageProps: { session, ...pageProps } }: Props) => {
	const getLayout = Component.getLayout ?? ((page) => page);
	const [mode, setMode] = React.useState<"light" | "dark">("dark");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = React.useMemo(
		() => createTheme(mode === "light" ? lightTheme : darkTheme),
		[mode]
	);

	theme.typography.h3 = {
		fontSize: "1.2rem",
		"@media (min-width:600px)": {
			fontSize: "1.5rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "2.4rem",
		},
	};

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<SessionProvider session={session}>
					<CssBaseline />
					{getLayout(<Component {...pageProps} />)}
				</SessionProvider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
