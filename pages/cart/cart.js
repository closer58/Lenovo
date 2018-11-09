// pages/cart/cart.js
const app = getApp()

Page({
  data: {
    cart:[],
  },
  
  
  decCart(e) { 
    app.decCart(e.currentTarget.dataset.id); 
    this.setData({
      cart:app.cart, 
    })
  },
  reduceToCart(e){
    app.reduceToCart(e.currentTarget.dataset.id)
    this.setData({
      cart: app.cart,
    })
  },
  onLoad: function (options) { 
  },
  onReady: function () {
  },
  onShow: function () {
    this.setData({
      cart:app.cart
    })
  },

  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {

  }
})