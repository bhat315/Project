// server/src/controllers/orderController.js
import { Order } from '../models/Order';
import { validateOrder } from '../utils/validation';

export const createOrder = async (req, res) => {
  try {
    const orderData = validateOrder(req.body);
    const order = new Order(orderData);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId })
      .sort({ createdAt: -1 })
      .limit(100);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};