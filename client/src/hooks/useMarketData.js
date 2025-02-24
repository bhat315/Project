// client/src/hooks/useMarketData.js
import { useState, useEffect } from 'react';
import { useWebSocket } from './useWebSocket';

export const useMarketData = (symbol) => {
  const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });
  const [trades, setTrades] = useState([]);
  const [price, setPrice] = useState(null);
  
  const { lastMessage } = useWebSocket(`ws://localhost:5000/market/${symbol}`);

  useEffect(() => {
    if (!lastMessage) return;

    const { type, data } = lastMessage;

    switch (type) {
      case 'trade':
        setPrice(parseFloat(data.p));
        setTrades(prev => [data, ...prev].slice(0, 50));
        break;
      case 'depth':
        setOrderBook(prev => ({
          bids: [...data.b].sort((a, b) => b[0] - a[0]),
          asks: [...data.a].sort((a, b) => a[0] - b[0])
        }));
        break;
      default:
        break;
    }
  }, [lastMessage]);

  // Initial data fetch
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [orderBookRes, tradesRes] = await Promise.all([
          fetch(`/api/market/orderbook/${symbol}`),
          fetch(`/api/market/trades/${symbol}`)
        ]);
        
        const [orderBookData, tradesData] = await Promise.all([
          orderBookRes.json(),
          tradesRes.json()
        ]);

        setOrderBook({
          bids: orderBookData.bids,
          asks: orderBookData.asks
        });
        setTrades(tradesData);
        if (tradesData.length > 0) {
          setPrice(parseFloat(tradesData[0].price));
        }
      } catch (error) {
        console.error('Error fetching initial market data:', error);
      }
    };

    fetchInitialData();
  }, [symbol]);

  return {
    orderBook,
    trades,
    price
  };
};