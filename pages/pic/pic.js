// pages/pic/pic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageno:1,
    jokes:[]
  },
  initData(){//发送请求
    wx.request({
      url: `http://api.avatardata.cn/Joke/NewstImg?key=7ef5f11aacd048239d546f17e218719f&page=${this.data.pageno}&rows=10`,
      success :(res) =>{
        // console.log(res.data.result)
        //保存数据
        this.setData({
              jokes:[...this.data.jokes,...res.data.result]
        })
        //隐藏loading
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.initData()
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
        //显示loading
        wx.showLoading({
          title: '加载中',
        })
        //更新页码
        let {pageno} = this.data
        this.setData({
          _pageno:pageno+1
        },()=>{
          this.initData()
        })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})