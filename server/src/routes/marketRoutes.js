// server/src/routes/marketRoutes.js
import express from 'express';
import { getOrderBook, getRecentTrades } from '../controllers/marketController';

const router = express.Router();

router.get('/orderbook/:symbol', getOrderBook);
router.get('/trades/:symbol', getRecentTrades);

export default router;