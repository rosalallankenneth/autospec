import React from "react";
import { useSession } from "next-auth/react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import MainLayout from "@/layouts/MainLayout";

const Dashboard = () => {
	const { data: session } = useSession();
	const userFullName = session?.user?.name as string;

	return (
		<Box>
			<Typography variant="h3" mb={3}>
				Hello, {userFullName}!
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={4}>
					<Paper>4</Paper>
				</Grid>
				<Grid item xs={12} lg={4}>
					<Paper>4</Paper>
				</Grid>
				<Grid item xs={12} lg={4}>
					<Paper>4</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper>12</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

Dashboard.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default Dashboard;
