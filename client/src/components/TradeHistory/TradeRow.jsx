// // client/src/components/TradeHistory/TradeRow.jsx
// import React from "react";

// const TradeRow = ({ trade }) => {
//   const { price, amount, timestamp, side } = trade;

//   return (
//     <div className="grid grid-cols-3 gap-2 text-sm">
//       <div className={side === "BUY" ? "text-green-500" : "text-red-500"}>
//         ${price.toFixed(2)}
//       </div>
//       <div>{amount.toFixed(8)}</div>
//       <div className="text-gray-400">
//         {new Date(timestamp).toLocaleTimeString()}
//       </div>
//     </div>
//   );
// };

// export default TradeRow;
// client/src/components/TradeHistory/TradeRow.jsx
import React from "react";

const TradeRow = ({ trade }) => {
  const { price, size, time, side } = trade;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  return (
    <div className="grid grid-cols-3 gap-2 text-sm hover:bg-gray-700">
      <div className={side === "buy" ? "text-green-500" : "text-red-500"}>
        ${parseFloat(price).toFixed(2)}
      </div>
      <div>{parseFloat(size).toFixed(8)}</div>
      <div className="text-gray-400">{formatTime(time)}</div>
    </div>
  );
};

export default TradeRow;
