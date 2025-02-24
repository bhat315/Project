// client/src/components/TradingPanel/OrderForm.jsx
import React, { useState } from "react";

const OrderForm = ({ orderType, side, onSubmit }) => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      type: orderType,
      side,
      price: orderType === "LIMIT" ? parseFloat(price) : null,
      quantity: parseFloat(quantity),
      symbol: "BTCUSDT",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {orderType === "LIMIT" && (
        <div>
          <label className="block text-sm font-medium mb-1">Price (USDT)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-gray-700 rounded px-3 py-2"
            step="0.01"
            required
          />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium mb-1">Amount (BTC)</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full bg-gray-700 rounded px-3 py-2"
          step="0.00001"
          required
        />
      </div>
      <button
        type="submit"
        className={`w-full py-3 rounded font-medium ${
          side === "BUY"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {side === "BUY" ? "Buy" : "Sell"}{" "}
        {orderType === "LIMIT" ? "Limit" : "Market"}
      </button>
    </form>
  );
};

export default OrderForm;
