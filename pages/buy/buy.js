// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  onGetLocation() {
    wx.getLocation({
      success: (res) => {
        wx.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${res.latitude},${res.longitude}&key=5XZBZ-C3TH6-DT6SQ-MGY4L-6XWPS-TRBGR&get_poi=1`,
          success: (resp) => {
            console.log(resp.data.result)
            this.setData({
              locationCity: resp.data.result.address
            })
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  payIt(e) {
   wx.showModal({
     title: '请扫二维码支付',
     content: '跳转中...',
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  wx.showToast({
    title: '下单成功',
  })
   this.setData({
     title:this.options.title,
     price:this.options.price,
     img:this.options.img
   })
    
      
   
  
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})