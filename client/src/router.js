/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Product from './views/Product.vue'
import EditProduct from './views/EditProduct.vue'
import AddProduct from './views/AddProduct.vue'
import Reviews from './views/Reviews.vue'
import Seller from './views/Sellers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/products/add',
      name: 'addproduct',
      component: AddProduct
    },
    {
      path: '/products/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/products/:id/seller',
      name: 'sellers',
      component: Seller
    },
    {
      path: '/products/:id/reviews',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/products/:id/edit',
      name: 'editproduct',
      component: EditProduct
    }
  ]
})
