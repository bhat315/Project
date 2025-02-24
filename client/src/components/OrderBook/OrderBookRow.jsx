// // client/src/components/OrderBook/OrderBookRow.jsx
// import React from "react";

// const OrderBookRow = ({ data, type }) => {
//   const { price, amount, total } = data;
//   const colorClass = type === "ask" ? "text-red-500" : "text-green-500";

//   return (
//     <div className="grid grid-cols-3 gap-2 text-sm hover:bg-gray-700">
//       <div className={colorClass}>${price.toFixed(2)}</div>
//       <div>{amount.toFixed(8)}</div>
//       <div>{total.toFixed(2)}</div>
//     </div>
//   );
// };

// export default OrderBookRow;
import React from "react";

const OrderBookRow = ({ data, type }) => {
  const rowColor =
    type === "ask"
      ? "text-red-400 bg-red-900/20"
      : "text-green-400 bg-green-900/20";

  return (
    <div
      className={`grid grid-cols-3 text-sm p-2 rounded transition hover:bg-gray-800 ${rowColor}`}
    >
      <div className="text-center">{data.price}</div>
      <div className="text-center">{data.amount}</div>
      <div className="text-center">{data.total}</div>
    </div>
  );
};

export default OrderBookRow;
