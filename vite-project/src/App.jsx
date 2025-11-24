import React from 'react'
import calculateYearlyData from './Services/calculateYearlyData'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import Grid from '@mui/material/Grid';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import waterfallTheme from './theme';  // Import your theme


export default function App() {

  const data = calculateYearlyData(15000,900,20,10);
  console.log(data);


  return (
    <ThemeProvider theme={waterfallTheme}>
      <CssBaseline />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            {/* Add your main title here */}
              Investment Calculator
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 3 }}>
                {/* Input section will go here */}
                <Typography variant="h6">Input Parameters</Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 3 }}>
                {/* Results table will go here */}
                <Typography variant="h6">Investment Growth</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
    </ThemeProvider>    
);
}

