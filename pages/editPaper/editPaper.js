// pages/editPaper/editPaper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addPopupVisible: false,
    questionList: [],
    baseList: [
      { id: "1", icon: "", text: "单选题", url: "../../components/radio/radio", },
      { id: "2", icon: "", text: "多选题", url: "", },
      { id: "3", icon: "", text: "填空题", url: "", },
      { id: "4", icon: "", text: "图片上传", url: "", },
    ],
    templateList: [
      { id: "1", icon: "", text: "姓名", url: "", },
      { id: "2", icon: "", text: "性别", url: "", },
      { id: "3", icon: "", text: "手机", url: "", },
      { id: "4", icon: "", text: "日期", url: "", },
      { id: "5", icon: "", text: "地区", url: "", },
    ],
    batchList: [
      { id: "1", icon: "", text: "题库选题", url: "", },
      { id: "2", icon: "", text: "文本导入", url: "", },
    ]
  }, 

  // tab change
  onChange(event) {
    if (event.detail) {
      switch (event.detail) {
        case "add": 
          this.setData({
            addPopupVisible: true,
          });
          break;
      }
    }
    
  },

  // 弹出层关闭
  onPopupClose() {
    this.setData({
      addPopupVisible: false,
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