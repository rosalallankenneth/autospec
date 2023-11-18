import React from "react";
import { Box } from "@mui/material";
import MainLayout from "@/layouts/MainLayout";

const Settings = () => {
	return <Box>Settings</Box>;
};

Settings.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default Settings;
