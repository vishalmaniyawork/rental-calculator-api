var express = require("express");
const router = express.Router();
var pmt = require("formula-pmt");

router.get("/", (req, res) => {
  console.log(req.query);
  const { asking_price, down_payment, rate, loan_years } = req.query;

  const morgage_amount = pmt(
    rate / 1200,
    loan_years * 12,
    -(asking_price * (100 - down_payment)) / 100
  );

  const proprty_tax_yearl = ((asking_price / 100) * 0.8833).toFixed(2);
  const proprty_tax_monthly = (proprty_tax_yearl / 12).toFixed(2);
  const insurance_monthly = 200;

  const monthly_payment = (
    +morgage_amount +
    +proprty_tax_monthly +
    +insurance_monthly
  ).toFixed(2);
  const revenue = (monthly_payment * 12).toFixed(2);

  const down_payment_amount = ((asking_price * down_payment) / 100).toFixed(2);

  const lawyer_fees = 1000;

  const welcome_tax = (250 + 2000 + (asking_price - 250000) * 0.015).toFixed(2);
  const inspection_fees = 500;

  const cash_needed = (
    +down_payment_amount +
    +lawyer_fees +
    +welcome_tax +
    +inspection_fees
  ).toFixed(2);

  const cash_needed_pp = (cash_needed / 3).toFixed(2);

  const data = {
    asking_price,
    down_payment,
    rate,
    loan_years,
    proprty_tax_yearl,
    proprty_tax_monthly,
    insurance_monthly,
    monthly_payment,
    revenue,
    down_payment_amount,
    lawyer_fees,
    welcome_tax,
    inspection_fees,
    cash_needed,
    cash_needed_pp
  };
  res.header("Access-Control-Allow-Origin", "*");
  res.json(data);
});

module.exports = router;
