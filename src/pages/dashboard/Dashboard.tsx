import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import MainLayout from "@/layouts/MainLayout";

const Dashboard = () => {
	return (
		<Box>
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
