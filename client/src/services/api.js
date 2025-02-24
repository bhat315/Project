// client/src/services/api.js
const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  async getOrders(userId) {
    const response = await fetch(`${API_BASE_URL}/orders/${userId}`);
    return response.json();
  },

  async createOrder(orderData) {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    return response.json();
  },

  async getTrades(symbol) {
    const response = await fetch(`${API_BASE_URL}/trades/${symbol}`);
    return response.json();
  },
};
