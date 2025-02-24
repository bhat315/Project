// client/src/components/TradingPanel/TradingPanel.jsx
import React, { useState } from "react";
import OrderForm from "./OrderForm";
import PositionInfo from "./PositionInfo";

const TradingPanel = () => {
  const [orderType, setOrderType] = useState("LIMIT");
  const [side, setSide] = useState("BUY");

  const handleSubmitOrder = async (orderData) => {
    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      console.log("Order placed:", data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex space-x-2 mb-4">
            <button
              className={`px-4 py-2 rounded ${
                orderType === "LIMIT" ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setOrderType("LIMIT")}
            >
              Limit
            </button>
            <button
              className={`px-4 py-2 rounded ${
                orderType === "MARKET" ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setOrderType("MARKET")}
            >
              Market
            </button>
          </div>
          <div className="flex space-x-2 mb-4">
            <button
              className={`w-1/2 py-2 rounded ${
                side === "BUY" ? "bg-green-600" : "bg-gray-700"
              }`}
              onClick={() => setSide("BUY")}
            >
              Buy
            </button>
            <button
              className={`w-1/2 py-2 rounded ${
                side === "SELL" ? "bg-red-600" : "bg-gray-700"
              }`}
              onClick={() => setSide("SELL")}
            >
              Sell
            </button>
          </div>
          <OrderForm
            orderType={orderType}
            side={side}
            onSubmit={handleSubmitOrder}
          />
        </div>
        <PositionInfo />
      </div>
    </div>
  );
};

export default TradingPanel;
