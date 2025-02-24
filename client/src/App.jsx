// client/src/App.jsx
import React from "react";
import TradingViewChart from "./components/TradingView/TradingViewChart";
import OrderBook from "./components/OrderBook/OrderBook";
import TradeHistory from "./components/TradeHistory/TradeHistory";
import TradingPanel from "./components/TradingPanel/TradingPanel";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <TradingViewChart />
          </div>
          <div className="col-span-4">
            <OrderBook />
          </div>
          <div className="col-span-8">
            <TradingPanel />
          </div>
          <div className="col-span-4">
            <TradeHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
