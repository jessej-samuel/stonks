import { useEffect, useState } from "react";
import "./App.css";
import Calculator from "./Calculator";

// let stopLoss, takeProfit, profit, loss;
const lossThreshold = 0.01;
const profitThreshold = 0.03;

function App() {
  const [buyPrice, setBuyPrice] = useState(0);
  const [orderType, setOrderType] = useState("buy");

  // let stopLoss, takeProfit, profit, loss;

  useEffect(() => {
    setBuyPrice(0);
    setOrderType("buy");
  }, []);

  return (
    <Calculator
      stopLoss={calculateStopLoss(buyPrice, lossThreshold, orderType)}
      takeProfit={calculateTakeProfit(buyPrice, profitThreshold, orderType)}
      profit={calculateProfit(buyPrice, profitThreshold)}
      loss={calculateLoss(buyPrice, lossThreshold)}
      buyPrice={buyPrice}
      setBuyPrice={setBuyPrice}
      orderType={orderType}
      setOrderType={setOrderType}
    />
  );
}

const calculateStopLoss = (
  buyPrice: number,
  percent: number,
  orderType: string
) => {
  if (orderType === "buy") return round(buyPrice - buyPrice * percent);
  if (orderType === "sell") return round(buyPrice + buyPrice * percent);
  return 0; // default
};

const calculateTakeProfit = (
  buyPrice: number,
  percent: number,
  orderType: string
) => {
  if (orderType === "buy") return round(buyPrice + buyPrice * percent);
  if (orderType === "sell") return round(buyPrice - buyPrice * percent);
  return 0; // default
};

const calculateProfit = (buyPrice: number, percent: number) => {
  return round(buyPrice * percent);
};

const calculateLoss = (buyPrice: number, percent: number) => {
  return round(buyPrice * percent);
};

// type handleBuyPriceChangeEventType = {
//   target: {
//     value: string;
//   };
// };
// const handleBuyPriceChange = (
//   e: handleBuyPriceChangeEventType,
//   orderType: string
// ) => {

//   if (e.target.value.startsWith("0")) {
//     e.target.value = e.target.value.slice(1);
//   }

//   const buyPrice = parseFloat(e.target.value);
//   if (orderType === "buy") {
//     stopLoss = calculateStopLoss(buyPrice, lossThreshold);
//     takeProfit = calculateTakeProfit(buyPrice, profitThreshold);
//     profit = round(buyPrice * profitThreshold);
//     loss = round(buyPrice * lossThreshold);
//   }
//   if (orderType === "sell") {
//     stopLoss = calculateStopLoss(buyPrice, profitThreshold);
//     takeProfit = calculateTakeProfit(buyPrice, lossThreshold);
//     profit = round(buyPrice * lossThreshold);
//     loss = round(buyPrice * profitThreshold);
//   }
// };

// const calculateStopLoss = (buyPrice: number, percent: number) => {
//   return round(buyPrice - buyPrice * percent);
// };

// const calculateTakeProfit = (buyPrice: number, percent: number) => {
//   return round(buyPrice + buyPrice * percent);
// };

const round = (value: number) => {
  return Math.round((value + Number.EPSILON) * 100) / 100;
};
export default App;
