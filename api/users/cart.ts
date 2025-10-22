import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/api';
const token = localStorage.getItem('auth_token');
const headers = { Authorization: `Bearer ${token}` };

const cartApi = {
  index(userCartId: string) {
    return axios.get(`${API_URL}/carts/${userCartId}`, {
      headers: headers,
    });
  },

  addToCart(productId: string, quantity = 1) {
    return axios.post(
      `${API_URL}/cart_items`,
      { product_id: productId, quantity },
      { headers: headers }
    );
  },

  updateCartItem(itemId: string, quantity: number) {
    return axios.patch(
      `${API_URL}/cart_items/${itemId}`,
      { cart_item: { quantity } },
      { headers: headers }
    );
  },

  deleteCartItem(itemId: string) {
    return axios.delete(`${API_URL}/cart_items/${itemId}`, { headers: headers });
  },
};

export default cartApi;
