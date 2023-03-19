function calculate() {
  // Get the input values
  const basicSalary = document.getElementById('basic-salary').value;
  const benefits = document.getElementById('benefits').value || 0;

  // Calculate gross pay
  const grossPay = Number(basicSalary) + Number(benefits);

  // Calculate Payee Tax
  let payeeTax = 0;
  if (grossPay <= 24000) {
    payeeTax = 0;
  } else if (grossPay <= 40166) {
    payeeTax = ((grossPay - 24000) * 0.1);
  } else if (grossPay <= 57733) {
    payeeTax = ((grossPay - 40166) * 0.15) + 1616.6;
  } else if (grossPay <= 76900) {
    payeeTax = ((grossPay - 57733) * 0.2) + 3643.95;
  } else if (grossPay <= 96267) {
    payeeTax = ((grossPay - 76900) * 0.25) + 6360.2;
  } else if (grossPay <= 115933) {
    payeeTax = ((grossPay - 96267) * 0.3) + 9795.45;
  } else {
    payeeTax = ((grossPay - 115933) * 0.35) + 13954.55;
  }

  // Calculate NHIF deductions
  let nhifDeductions = 0;
  if (grossPay <= 5999) {
    nhifDeductions = 150;
  } else if (grossPay <= 7999) {
    nhifDeductions = 300;
  } else if (grossPay <= 11999) {
    nhifDeductions = 400;
  } else if (grossPay <= 14999) {
    nhifDeductions = 500;
  } else if (grossPay <= 19999) {
    nhifDeductions = 600;
  } else if (grossPay <= 24999) {
    nhifDeductions = 750;
  } else if (grossPay <= 29999) {
    nhifDeductions = 850;
  } else if (grossPay <= 34999) {
    nhifDeductions = 900;
  } else if (grossPay <= 39999) {
    nhifDeductions = 950;
  } else if (grossPay <= 44999) {
    nhifDeductions = 1000;
  } else if (grossPay <= 49999) {
    nhifDeductions = 1100;
  } else if (grossPay <= 59999) {
    nhifDeductions = 1200;
  } else if (grossPay <= 69999) {
    nhifDeductions = 1300;
  } else if (grossPay <= 79999) {
    nhifDeductions = 1400;
  } else if (grossPay <= 89999) {
    nhifDeductions = 1500;
  } else if (grossPay <= 99999) {
    nhifDeductions = 1600;
  } else {
    nhifDeductions = 1700;
  }

  // Calculate NSSF deductions
  const nssfDeductions = Math.min(grossPay * 0.06, 1080);

  // Calculate net salary
  const netSalary = grossPay - payeeTax - nhifDeductions - nssfDeductions;
  
  // Update the HTML with the results
  document.getElementById('payee-tax').innerHTML = payeeTax.toFixed(2);
  document.getElementById('nhif-deductions').innerHTML = nhifDeductions.toFixed(2);
  document.getElementById('nssf-deductions').innerHTML = nssfDeductions.toFixed(2);
  document.getElementById('net-salary').innerHTML = netSalary.toFixed(2);
  }