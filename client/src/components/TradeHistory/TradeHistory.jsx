// // client/src/components/TradeHistory/TradeHistory.jsx
// import React, { useState, useEffect } from "react";
// import { useWebSocket } from "../../hooks/useWebSocket";
// import TradeRow from "./TradeRow";

// const TradeHistory = () => {
//   const [trades, setTrades] = useState([]);
//   const { lastMessage } = useWebSocket("ws://localhost:5000/trades");

//   useEffect(() => {
//     if (lastMessage?.type === "trade") {
//       setTrades((prevTrades) => [lastMessage, ...prevTrades].slice(0, 50));
//     }
//   }, [lastMessage]);

//   return (
//     <div className="bg-gray-800 p-4 rounded-lg">
//       <h2 className="text-lg font-semibold mb-4">Recent Trades</h2>
//       <div className="grid grid-cols-3 gap-2 text-sm font-medium mb-2">
//         <div>Price</div>
//         <div>Amount</div>
//         <div>Time</div>
//       </div>
//       <div className="space-y-1">
//         {trades.map((trade) => (
//           <TradeRow key={trade.id} trade={trade} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TradeHistory;
// client/src/components/TradeHistory/TradeHistory.jsx
import React, { useState, useEffect } from "react";
import { useWebSocket } from "../../hooks/useWebSocket";
import TradeRow from "./TradeRow";

const TradeHistory = () => {
  const [trades, setTrades] = useState([]);
  const { lastMessage } = useWebSocket("ws://localhost:5000/trades");

  useEffect(() => {
    if (lastMessage?.type === "trade") {
      setTrades((prevTrades) => [lastMessage.data, ...prevTrades].slice(0, 50));
    }
  }, [lastMessage]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Recent Trades</h2>
      <div className="grid grid-cols-3 gap-2 text-sm font-medium mb-2">
        <div>Price</div>
        <div>Size</div>
        <div>Time</div>
      </div>
      <div className="space-y-1">
        {trades.map((trade) => (
          <TradeRow key={trade.id} trade={trade} />
        ))}
      </div>
    </div>
  );
};

export default TradeHistory;
