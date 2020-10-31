// pages/joke/joke.js
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
      url: `http://api.avatardata.cn/Joke/QueryJokeByTime?key=7ef5f11aacd048239d546f17e218719f&page=${this.data.Pageno}&rows=10&sort=asc&time=1418745237`,
      success :(res) =>{
        // console.log(res.data.result)
        //保存数据
        this.setData({//累计 展开运算符 
              jokes:[...this.data.jokes,...res.data.result]
        })
        //隐藏里面得loading
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
  //监控上拉到底部
  onReachBottom(){
//显示loading
wx.showLoading({
  title: '加载中',
})
  // wx.hideLoading()
//发送异步请求
//更新当前第几页
  let _pageno = this.data.pageno 
 this.setData({
  pageno:_pageno+1
 },()=>{
  //页码更新了发送异步请求
  this.initData()

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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})