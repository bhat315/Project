// client/src/components/TradingPanel/PositionInfo.jsx
import React from "react";

const PositionInfo = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Position Information</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-gray-700 p-3 rounded">
          <div className="text-gray-400">Position Size</div>
          <div className="font-medium">0.000 BTC</div>
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <div className="text-gray-400">Entry Price</div>
          <div className="font-medium">$0.00</div>
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <div className="text-gray-400">Leverage</div>
          <div className="font-medium">1x</div>
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <div className="text-gray-400">PNL</div>
          <div className="font-medium">$0.00</div>
        </div>
      </div>
    </div>
  );
};

export default PositionInfo;
