// server/src/models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['LIMIT', 'MARKET'],
    required: true,
  },
  side: {
    type: String,
    enum: ['BUY', 'SELL'],
    required: true,
  },
  price: {
    type: Number,
    required: function() { return this.type === 'LIMIT'; }
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'FILLED', 'CANCELED'],
    default: 'PENDING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

orderSchema.index({ userId: 1, createdAt: -1 });
export const Order = mongoose.model('Order', orderSchema);