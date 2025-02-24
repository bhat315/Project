// server/src/routes/orderRoutes.js
import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController';

const router = express.Router();

router.post('/', createOrder);
router.get('/:userId', getOrders);

export default router;