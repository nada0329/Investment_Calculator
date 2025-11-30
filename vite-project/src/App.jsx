import React from "react";
import calculateYearlyData from "./Services/calculateYearlyData";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import waterfallTheme from "./theme"; // Import your theme

import { useState } from "react";

export default function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);
  const [errors, setErrors] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });
  const [errorExist, setErrorExist] = useState(false);

  // Example usage
  const data = calculateYearlyData(
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  );
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
                onChange={(e) => {
                  const newValue = Number(e.target.value);
                  if (!isNaN(newValue)) {
                    setInitialInvestment(newValue);
                    if (newValue < 0) {
                      setErrorExist(true);
                      setErrors({
                        ...errors,
                        initialInvestment:
                          "Initial investment cannot be negative",
                      });
                    } else {
                      setErrorExist(false);
                      setErrors({
                        ...errors,
                        initialInvestment: "",
                      });
                    }
                  } else {
                    //setInitialInvestment(0);
                    setInitialInvestment(newValue);
                    setErrorExist(true);
                    setErrors({
                      ...errors,
                      initialInvestment: "Invalid input",
                    });
                  }
                }}
                fullWidth
                margin="normal"
                error={errorExist && errors.initialInvestment !== ""}
                helperText={errors.initialInvestment}
              />
              <TextField
                label="Annual Investment"
                type="number"
                value={annualInvestment}
                onChange={(e) => {
                  const newValue = Number(e.target.value);
                  if (!isNaN(newValue)) {
                    setAnnualInvestment(newValue);
                    if (newValue < 0) {
                      setErrorExist(true);
                      setErrors({
                        ...errors,
                        annualInvestment:
                          "Annual investment cannot be negative",
                      });
                    } else {
                      setErrorExist(false);
                      setErrors({
                        ...errors,
                        annualInvestment: "",
                      });
                    }
                  } else {
                    setAnnualInvestment(newValue);
                    setErrorExist(true);
                    setErrors({
                      ...errors,
                      annualInvestment: "Invalid input",
                    });
                  }
                }}
                fullWidth
                margin="normal"
                error={errorExist && errors.annualInvestment !== ""}
                helperText={errors.annualInvestment}
              />
              <TextField
                label="Expected Return (%)"
                type="number"
                value={expectedReturn}
                onChange={(e) => {
                  const newValue = Number(e.target.value);
                  if (!isNaN(newValue)) {
                    setExpectedReturn(newValue);
                    if (newValue < 0) {
                      setErrorExist(true);
                      setErrors({
                        ...errors,
                        expectedReturn: "Expected return cannot be negative",
                      });
                    } else if (newValue > 100) {
                      setErrorExist(true);
                      setErrors({
                        ...errors,
                        expectedReturn: "only 100% is allowed",
                      });
                    } else {
                      setErrorExist(false);
                      setErrors({
                        ...errors,
                        expectedReturn: "",
                      });
                    }
                  } else {
                    setExpectedReturn(newValue);
                    setErrorExist(true);
                    setErrors({
                      ...errors,
                      expectedReturn: "Invalid input",
                    });
                  }
                }}
                fullWidth
                margin="normal"
                error={errorExist && errors.expectedReturn !== ""}
                helperText={errors.expectedReturn}
              />
              <TextField
                label="Duration (years)"
                type="number"
                value={duration}
                onChange={(e) => {
                  const newValue = Number(e.target.value);
                  if (!isNaN(newValue)) {
                    setDuration(newValue);
                    if (newValue < 0) {
                      setErrorExist(true);
                      setErrors({
                        ...errors,
                        duration: "Duration cannot be negative",
                      });
                    } else {
                      setErrorExist(false);
                      setErrors({
                        ...errors,
                        duration: "",
                      });
                    }
                  } else {
                    setDuration(newValue);
                    setErrorExist(true);
                    setErrors({
                      ...errors,
                      duration: "Invalid input",
                    });
                  }
                }}
                fullWidth
                margin="normal"
                error={errorExist && errors.duration !== ""}
                helperText={errors.duration}
              />
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3 }}>
              {/* Results table will go here */}
              <Typography variant="h6">Investment Growth</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* We'll add column headers here */}
                      <TableCell sx={{ fontWeight: 'bold' }}>Year</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Investment Value</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Yearly Interest</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Total Interest</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Invested Capital</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* We'll map through your data here */}
                    {!errorExist &&
                      data.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.year}</TableCell>
                          <TableCell>{item.investmentValue}</TableCell>
                          <TableCell>{item.yearlyInterest}</TableCell>
                          <TableCell>{item.totalInterest}</TableCell>
                          <TableCell>{item.investedCapital}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
