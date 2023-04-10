// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },
  // 增加count
  addCount(){
    this.setData({
      count: this.data.count +1
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
    console.log('触发了message页面的下拉刷新')
    // 实现下拉刷新重置count 0
    this.setData({
      count: 0
    })
    // 自动关闭下拉刷新效果
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('消息页面触底了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})