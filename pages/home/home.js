
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchParams: "",
    searchVisible: false,
    showPopup: false,
    dataList: [
      { id:"1", title: "测试1", questionNum: 12, status: "0" },
      { id:"2", title: "测试1", questionNum: 12, status: "0" },
      { id:"3", title: "测试1", questionNum: 12, status: "0" },

    ],
    curPaper: "",
  },
  // 显示菜单
  showMenu() {
    wx.showToast({ title: '点击菜单', icon: 'none' });
  },
  // 显示搜索
  showSearch() {
    this.setData({
      searchVisible: true,
    })
    wx.showToast({ title: '点击搜索', icon: 'none' });
  },
  // 执行搜索
  onSearch() {

  },
  // 搜索框隐藏
  onSearchCancel() {
    this.setData({
      searchVisible: false,
    })
  },
  // 创建问卷
  onCreate() {
    wx.navigateTo({
      url: '../templatePaper/templatePaper'
    })
  },
  // 显示弹出层
  showPaperHandle(e) {
    this.setData({
      showPopup: true,
      curPaper: e.currentTarget.dataset.item,
    })
  },
  // 弹出层关闭
  onPopupClose() {
    this.setData({
      showPopup: false,
    })
  },
  // 发布
  onRelease() {
    wx.showToast({ title: '发布', icon: 'none' });
  },
  // 复制
  onCopy() {
    wx.showToast({ title: '复制', icon: 'none' });
  },
  // 删除
  remove() {
    wx.showToast({ title: '删除', icon: 'none' });
  },
  // 编辑
  edit() {
    this.onPopupClose();
    wx.navigateTo({
      url: '../editPaper/editPaper'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
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

})