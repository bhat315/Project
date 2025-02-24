// server/src/services/binanceService.js
import WebSocket from 'ws';
import axios from 'axios';
import { EventEmitter } from 'events';

class BinanceService extends EventEmitter {
  constructor() {
    super();
    this.baseURL = 'https://fapi.binance.com';
    this.wsBaseURL = 'wss://fstream.binance.com/ws';
    this.connections = new Map();
  }

  // REST API Methods
  async getOrderBook(symbol) {
    try {
      const response = await axios.get(`${this.baseURL}/fapi/v1/depth`, {
        params: {
          symbol: symbol.toUpperCase(),
          limit: 100
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching order book:', error);
      throw error;
    }
  }

  async getRecentTrades(symbol) {
    try {
      const response = await axios.get(`${this.baseURL}/fapi/v1/trades`, {
        params: {
          symbol: symbol.toUpperCase(),
          limit: 50
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching recent trades:', error);
      throw error;
    }
  }

  // WebSocket Methods
  subscribeToMarketData(symbol) {
    const streams = [
      `${symbol.toLowerCase()}@trade`,
      `${symbol.toLowerCase()}@depth`,
      `${symbol.toLowerCase()}@kline_1m`
    ];
    
    const wsUrl = `${this.wsBaseURL}/${streams.join('/')}`;
    const ws = new WebSocket(wsUrl);

    ws.on('open', () => {
      console.log(`WebSocket connected for ${symbol}`);
    });

    ws.on('message', (data) => {
      try {
        const message = JSON.parse(data);
        this.emit('market_data', {
          type: message.e,
          data: message
        });
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    });

    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });

    ws.on('close', () => {
      console.log(`WebSocket disconnected for ${symbol}`);
      setTimeout(() => this.subscribeToMarketData(symbol), 5000);
    });

    this.connections.set(symbol, ws);
    return ws;
  }

  unsubscribeFromMarketData(symbol) {
    const ws = this.connections.get(symbol);
    if (ws) {
      ws.close();
      this.connections.delete(symbol);
    }
  }
}

export const binanceService = new BinanceService();

// server/src/services/binanceService.js
// import WebSocket from 'ws';

// export const subscribeToMarketData = (callback) => {
//   const ws = new WebSocket('wss://fstream.binance.com/ws/btcusdt@trade');
  
//   ws.on('message', (data) => {
//     try {
//       const parsedData = JSON.parse(data);
//       callback(parsedData);
//     } catch (error) {
//       console.error('Error parsing market data:', error);
//     }
//   });

//   return {
//     unsubscribe: () => {
//       if (ws.readyState === WebSocket.OPEN) {
//         ws.close();
//       }
//     }
//   };
// };