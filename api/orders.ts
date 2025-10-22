import axios from 'axios';

const API_URL = 'http://localhost:3000/api';
const token = localStorage.getItem('auth_token');
export default {
  getUserOrders() {
    return axios.get(`${API_URL}/orders`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  },
  placeOrder(address: string, paymentMethod: string, cartItems: any) {
    return axios.post(
      `${API_URL}/orders`,
      {
        order: {
          address,
          payment_method: paymentMethod,
          cart_items: cartItems.map((item: any) => ({
            product_id: item.product.id,
            quantity: item.quantity,
          })),
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};
