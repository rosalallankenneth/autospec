import { Box, Grid, Paper } from '@mui/material';
import React from 'react';

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
  )
}

export default Dashboard;