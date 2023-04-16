// pages/createPaper/createPaper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchParams: "",
    otherPaperList: [
      { id: 1111, title: "测试测试测试测试测试测试测试", questionNum: 12 },
      { id: 2222, title: "测试", questionNum: 12 },
      { id: 3333, title: "测试", questionNum: 12 },
      { id: 4444, title: "测试", questionNum: 12 },
      { id: 5555, title: "测试", questionNum: 12 },
    ],
  },

  // 从空白创建
  createPaper() {
    wx.showToast({
      title: '从空白创建',
      icon: 'none'
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})