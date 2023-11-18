import React from "react";
import { Box } from "@mui/material";
import MainLayout from "@/layouts/MainLayout";

const Transactions = () => {
	return <Box>Transactions</Box>;
};

Transactions.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default Transactions;
