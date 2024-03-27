// store.ts

import { createStore } from 'vuex';

export default createStore({
  modules: {
    cart: {
      state: {
        items: [],
      },
      mutations: {
        addItem(state, product) {
          const existingProduct = state.items.find(item => item.id === product.id);
          if (existingProduct) {
            existingProduct.quantity++;
          } else {
            state.items.push({ ...product, quantity: 1 });
          }
        },
      },
      actions: {
        addToCart({ commit }, product) {
          commit('addItem', product);
        },
      },
      getters: {
        cartItems(state) {
          return state.items;
        },
      },
    },
  },
});
