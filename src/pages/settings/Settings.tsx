import React from "react";
import { Box } from "@mui/material";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";

const Settings = () => {
	return (
		<>
			<Head>
				<title>Settings | Autospec</title>
				<meta name="description" content="Vehicle Inspection Report System" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box>Settings</Box>
		</>
	);
};

Settings.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default Settings;
