type CalculatorProps = {
  stopLoss: number;
  takeProfit: number;
  profit: number;
  loss: number;
  buyPrice: number;
  setBuyPrice: (value: number) => void;
  orderType: string;
  setOrderType: (value: string) => void;
};

const Calculator = ({
  stopLoss,
  takeProfit,
  profit,
  loss,
  buyPrice,
  setBuyPrice,
  orderType,
  setOrderType,
}: CalculatorProps) => {
  return (
    <div className="h-screen flex-col lg:flex justify-center items-center  bg-black text-white">
      <div className="border border-neutral-800 text-primary rounded-sm p-4 flex flex-col gap-4 text-lg">
        <div className=" rounded-sm p-4 flex gap-4 text-lg text-center text-secondary-light">
          <button
            className={`${
              orderType === "buy" ? "bg-primary" : ""
            } p-2 text-base tracking-wide rounded-sm w-full font-light uppercase`}
            onClick={() => setOrderType("buy")}
          >
            Buy
          </button>
          <button
            className={`${
              orderType === "sell" ? "bg-primary" : ""
            } p-2 text-base items-center tracking-wide rounded-sm w-full font-light uppercase flex justify-between`}
            onClick={() => setOrderType("sell")}
          >
            <p>Sell</p>
          </button>
        </div>
        <hr className="border-neutral-800" />
        <div className=" text-primary rounded-sm p-4 flex flex-col gap-4 text-lg">
          <input
            type="number"
            className="bg-neutral-900 border-neutral-800 border px-3 py-1.5 rounded-sm text-text"
            placeholder="Enter buy price"
            onChange={(e) => {
              if (e.target.value.startsWith("0")) {
                e.target.value = e.target.value.slice(1);
              }
              if (e.target.value === "") setBuyPrice(0);
              else setBuyPrice(parseFloat(e.target.value));
            }}
            value={buyPrice}
          />
        </div>
        <div className="flex justify-between font-semibold items-center">
          <p>Stop Loss</p>
          <p className="font-medium text-secondary">
            {stopLoss} <span className="text-red-500">- {loss}</span>
          </p>
        </div>
        <div className="flex justify-between font-semibold items-center">
          <p>Take Profit</p>
          <p className="font-medium  text-secondary">
            {takeProfit}{" "}
            <span className="text-green-500 font-semibold">+ {profit}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
