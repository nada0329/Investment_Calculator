export default function calculateYearlyData(initialInvestment, annualInvestment, expectedReturn, duration) {
  const yearlyData = [];
  let previousInvestmentValue = initialInvestment;
  let totalInterest = 0;

  for (let year = 1; year <= duration; year++) {
    const currentInvestmentValue = 
      (initialInvestment * Math.pow(1 + expectedReturn/100, year)) +
      (annualInvestment * (Math.pow(1 + expectedReturn/100, year) - 1) / (expectedReturn/100));
    
    const yearlyInterest = currentInvestmentValue - (previousInvestmentValue + annualInvestment);
    totalInterest += yearlyInterest;
    const totalInvestedCapital = initialInvestment + (annualInvestment * year);

    yearlyData.push({
      year,
      investmentValue: currentInvestmentValue,
      yearlyInterest,
      totalInterest,
      investedCapital: totalInvestedCapital
    });

    previousInvestmentValue = currentInvestmentValue;
  }
  
  return yearlyData;
}