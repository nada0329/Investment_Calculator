import React from 'react'
import calculateYearlyData from './Services/calculateYearlyData'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import waterfallTheme from './theme';  // Import your theme

import  { useState } from 'react';



export default function App() {

  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

 
    
  // Example usage
  const data = calculateYearlyData(initialInvestment,annualInvestment,expectedReturn,duration);
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
                  <TextField
                    label="Initial Investment"
                    type="number"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Annual Investment"
                    type="number"
                    value={annualInvestment}
                    onChange={(e) => setAnnualInvestment(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Expected Return (%)"
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Duration (years)"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                  />
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

