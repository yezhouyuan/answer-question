// app.js
import request from "./utils/request.js";
console.log(request)
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  globalData: {
    userInfo: null,
    primaryColor: "#008CFF",
    request,
  }
})
