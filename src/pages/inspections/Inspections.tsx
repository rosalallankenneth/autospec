import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import MainLayout from "@/layouts/MainLayout";

const Inspections = () => {
	return (
		<>
			<Head>
				<title>Inspections | Autospec</title>
				<meta name="description" content="Vehicle Inspection Report System" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box>Inspections</Box>
		</>
	);
};

Inspections.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default Inspections;
