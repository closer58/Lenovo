
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  addToCart(e) {
    
    wx.showToast({
      title: '添加成功',
    });
    const item = this.data
    // const dd = {
    //   ...item,
    //   image_url:item.img
    // };
    // console.log(dd)
    app.addToCart(item);
    // console.log(item)
   
  },
  tobuy(e) {
    var {
      title,
      price,
      img
    } = e.currentTarget.dataset
  
    wx.navigateTo({

      url: `/pages/buy/buy?title=${title}&price=${price}&img=${img}`,
      
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.showLoading({
      title: '加载中…',
    });
    wx.request({
      url:"https://re.m.jd.com/recomm/search/item.json?                keyword=%E8%81%94%E6%83%B3%E7%AC%94%E8%AE%B0%E6%9C%AC&          page_uuid=cdec9be893fd4fda8b51c7f05ce7fbc8&page=3",
      
      success:(resp)=>{
        
        this.setData({
          title: this.options.title,
          price:this.options.price,
          img:this.options.img,
        })
        
      },
      complete:()=>{
        wx.hideLoading();
      },
     
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