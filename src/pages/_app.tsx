import React from "react";
import { SessionProvider } from "next-auth/react";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";

import type { AppProps } from "next/app";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
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

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<SessionProvider session={session}>
					<CssBaseline />
					<Component
						{...pageProps}
						ColorModeContext={ColorModeContext}
					/>
				</SessionProvider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
