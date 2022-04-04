import brands from '@/data/brands.json'
import productsData from '@/data/products.json'
import Vue from 'vue'

export const state = () => ({
  cart: {},
  brands,
  products: productsData
})

export const mutations = {
  SET_CART(state, item) {
    Vue.set(state, 'cart', item)
  },
  SET_PRODUCT(state, { item, productId }) {
    Vue.set(state.cart, productId, item)
  },
  EDIT_PRODUCT(state, productId) {
    Vue.delete(state.cart, productId)
  }
}

export const actions = {
  addProductToCart({commit, state}, productId) {
    const product = state.products.find(i => i.id === productId)
    const item = {
      ...product,
      qty: state.cart[productId] ? state.cart[productId].qty + 1 : 1 
    }
    commit('SET_PRODUCT', { item, productId })
  },
  editProduct({commit}, product) {
    commit('SET_PRODUCT', { item: product, productId: product.id })
  },
  removeProductFromCart({commit}, productId) {
    commit('EDIT_PRODUCT', productId)
  },
  emptyCart({commit}) {
    commit('SET_CART', {})
  }
}

export const getters = {
  getCart(state) {
    return { ...state.cart}
  },
  getCartSize(state) {
    return Object.values(state.cart).reduce((prev, current) => prev + current.qty, 0)
  },
  getCartItem: (state) => (productId) => {
    return state.cart[productId]
  },
  getBrandName: (state) => (brandId) => {
    const brand = state.brands.find(item => item.id === brandId)
    return brand.name
  },
  getProductsByBrand: (state) => (brandId) => {
    return state.products.filter(item => item.brandId === brandId)
  }
}