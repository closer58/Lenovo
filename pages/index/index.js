Page({
  data: {
    commodity:[],
    focus: false,
    inputValue: '',
    iconsize: [20],
    iconColor: ['red'],
    iconType: ['success'],
    imgUrls: [
"https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/space/pic/item/10dfa9ec8a136327c27e88f39d8fa0ec09fac75b.jpg",
      'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/space/pic/item/5fdf8db1cb1349541cc9a2a45a4e9258d0094a1e.jpg',
      'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/space/pic/item/f9198618367adab4c980518387d4b31c8601e49a.jpg',
     " https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541420798633&di=58d84eefb0ee7be2c81ede3e3b719666&imgtype=0&src=http%3A%2F%2Fcase.52design.com%2FUpfiles%2F201005%2FL100523164978.jpg",
      "https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/space/pic/item/e7cd7b899e510fb354953d57d533c895d0430c65.jpg"

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  toDetail(e) {

    var {
      id,
      title,
      price,
      img
    } = e.currentTarget.dataset

    wx.navigateTo({

      url: `/pages/detail/detail?title=${title}&price=${price}&img=${img}&id=${img}`,


    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad:function(options){
    wx.request({
      url: 'https://re.m.jd.com/recomm/search/item.json?keyword=%E5%8D%8E%E7%A1%95%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&page_uuid=a3897060acf846dc9178d12a6163244e&page=1',

      success:(resp)=>{
        
         this.setData({
            commodity:resp.data.commodity
            
          })
      },
      
      

      

      
    })
  }
})