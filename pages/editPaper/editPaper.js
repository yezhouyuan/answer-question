// pages/editPaper/editPaper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addPopupVisible: false,
    // 是否选中
    selected: false,
    selectedIndex: -1,
    curPaper: "",

    // 题型模板数据
    baseList: [
      { id: "1", icon: "", text: "单选题", title: "", value: "", type: "1", url: "../../components/radio/radio", },
      { id: "2", icon: "", text: "多选题", title: "", value: "", type: "2", url: "", },
      { id: "3", icon: "", text: "填空题", title: "", value: "", type: "3", url: "", },
      { id: "4", icon: "", text: "图片上传", title: "", value: "", type: "4", url: "", },
    ],
    templateList: [
      { id: "1", icon: "", text: "姓名", title: "", value: "", type: "5", url: "", },
      { id: "2", icon: "", text: "性别", title: "", value: "", type: "6", url: "", },
      { id: "3", icon: "", text: "手机", title: "", value: "", type: "7", url: "", },
      { id: "4", icon: "", text: "日期", title: "", value: "", type: "8", url: "", },
      { id: "5", icon: "", text: "地区", title: "", value: "", type: "9", url: "", },
    ],
    batchList: [
      { id: "1", icon: "", text: "题库选题", title: "", value: "", type: "10", url: "", },
      { id: "2", icon: "", text: "文本导入", title: "", value: "", type: "11", url: "", },
    ]
  }, 
  itemSelected(e){
    console.log(e)
    this.setData({
      selected: !this.data.selected,
      selectedIndex: e.currentTarget.dataset.questionindex
    })
  },
  // tab change
  onChange(event) {
    if (event.detail) {
      switch (event.detail) {
        case "add": 
          this.onPopupShow();
          break;
      }
    }
    
  },
  // 弹出层显示
  onPopupShow() {
    this.setData({
      addPopupVisible: true,
    })
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
    this.setData({
      curPaper: {
        id: "问卷ID",
        title: "测试1111",
        description: "这是问卷的简介",
        questionList: [
          {
            id: "11111111",
            icon: "",
            text: "单选题",
            title: "这是单选题标题",
            value: "",
            type: "1",
            url: "../../components/radio/radio",
          },
          {
            id: "2222222",
            icon: "",
            text: "多选题",
            title: "这是多选题标题",
            value: "",
            type: "2",
            url: "../../components/radio/radio",
          },
        ]
      }
    })
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