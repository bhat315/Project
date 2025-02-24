

// server/src/controllers/marketController.js
import { binanceService } from '../services/binanceService';

export const getOrderBook = async (req, res) => {
  try {
    const { symbol } = req.params;
    const orderBook = await binanceService.getOrderBook(symbol);
    res.json(orderBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRecentTrades = async (req, res) => {
  try {
    const { symbol } = req.params;
    const trades = await binanceService.getRecentTrades(symbol);
    res.json(trades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


