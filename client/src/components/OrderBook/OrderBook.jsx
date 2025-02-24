// import React, { useState, useEffect } from "react";
// import { useWebSocket } from "../../hooks/useWebSocket";
// import OrderBookRow from "./OrderBookRow";

// const OrderBook = () => {
//   const [asks, setAsks] = useState([]);
//   const [bids, setBids] = useState([]);
//   const { lastMessage } = useWebSocket("ws://localhost:5000/orderbook");

//   useEffect(() => {
//     if (lastMessage?.type === "orderbook") {
//       setAsks(lastMessage.asks);
//       setBids(lastMessage.bids);
//     }
//   }, [lastMessage]);

//   return (
//     <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
//       <h2 className="text-xl font-semibold text-white text-center mb-4">Order Book</h2>

//       {/* Order Book Headers */}
//       <div className="grid grid-cols-3 text-gray-400 text-xs font-medium uppercase py-2 border-b border-gray-700">
//         <div className="text-center">Price</div>
//         <div className="text-center">Amount</div>
//         <div className="text-center">Total</div>
//       </div>

//       {/* Order Book Content */}
//       <div className="overflow-y-auto max-h-60">
//         {/* Sell Orders (Asks) */}
//         <div className="space-y-1">
//           {asks.map((ask) => (
//             <OrderBookRow key={ask.price} data={ask} type="ask" />
//           ))}
//         </div>

//         {/* Midpoint Separator */}
//         <div className="my-2 text-center text-gray-500 text-sm border-y border-gray-700 py-1">
//           Market Price
//         </div>

//         {/* Buy Orders (Bids) */}
//         <div className="space-y-1">
//           {bids.map((bid) => (
//             <OrderBookRow key={bid.price} data={bid} type="bid" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderBook;
import React, { useState, useEffect } from "react";
import { useWebSocket } from "../../hooks/useWebSocket";
import OrderBookRow from "./OrderBookRow";

const OrderBook = () => {
  const [asks, setAsks] = useState([]);
  const [bids, setBids] = useState([]);
  const { lastMessage } = useWebSocket("ws://localhost:5000/orderbook");

  useEffect(() => {
    if (lastMessage?.type === "orderbook") {
      setAsks(lastMessage.asks);
      setBids(lastMessage.bids);
    }
  }, [lastMessage]);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-white text-center mb-4">
        Order Book
      </h2>

      {/* Order Book Headers */}
      <div className="grid grid-cols-3 text-gray-400 text-xs font-medium uppercase py-2 border-b border-gray-700">
        <div className="text-center">Price</div>
        <div className="text-center">Amount</div>
        <div className="text-center">Total</div>
      </div>

      {/* Order Book Content */}
      <div className="overflow-y-auto max-h-60">
        {/* Sell Orders (Asks) */}
        <div className="space-y-1">
          {asks.map((ask) => (
            <OrderBookRow key={ask.price} data={ask} type="ask" />
          ))}
        </div>

        {/* Midpoint Separator */}
        <div className="my-2 text-center text-gray-500 text-sm border-y border-gray-700 py-1">
          Market Price
        </div>

        {/* Buy Orders (Bids) */}
        <div className="space-y-1">
          {bids.map((bid) => (
            <OrderBookRow key={bid.price} data={bid} type="bid" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
