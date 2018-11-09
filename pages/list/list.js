// pages/list/list.js
import ajax from '../../utils/request';

const app= getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodity:[],
    
  },
  page: 1,

  toDetail(e){
    
    var {
      id,
      title,
      price,
      img
    }=e.currentTarget.dataset
    
    wx.navigateTo({
      
      url: `/pages/detail/detail?title=${title}&price=${price}&img=${img}&id=${img}`,
        
      
    })
    
  },
  addToCart(e){
   
    wx.showToast({
      title: '添加成功',
    });
   const item= this.data.commodity.filter(commodity =>commodity.id
    === e.currentTarget.dataset.id)[0];
   
   app.addToCart(item);
   console.log(item)
   
  },
  refreshCommodity(){
    if(this.data.page===1){
      return;
    }
    this.setData({
      page:1,
      commodity: [],

    },()=>{
      this.loadcommodity();
    })
  },
  loadcommodity(){
    const t = new Date().getTime();
    ajax.get(`recomm/search/item.json?keyword=%E8%81%94%E6%83%B3%E7%AC%94%E8%AE%B0%E6%9C%AC&page_uuid=cdec9be893fd4fda8b51c7f05ce7fbc8&page=${this.page}`)
      .then(resp => {
        this.setData({
          commodity: this.data.commodity.concat(resp.data.commodity)

        });
        this.page++;
      })

  },
  loadMore(){
    this.loadcommodity();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.loadcommodity();
    

  
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