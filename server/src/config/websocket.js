// server/src/config/websocket.js
import { WebSocketServer } from 'ws';
import { subscribeToMarketData } from '../services/binanceService';

export const initializeWebSocket = (server) => {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws) => {
    console.log('New WebSocket connection');

    // Subscribe to Binance market data
    const marketDataSubscription = subscribeToMarketData((data) => {
      if (ws.readyState === ws.OPEN) {
        ws.send(JSON.stringify(data));
      }
    });

    ws.on('close', () => {
      console.log('Client disconnected');
      marketDataSubscription.unsubscribe();
    });
  });

  return wss;
};