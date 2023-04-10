// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    username: ''
  },
  // 定义按钮事件
  btnTap(e){
    console.log(e)
  },
  btnHandler(e){
    // 拿到参数 e.target.dataset.infos
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
    console.log(this.data.count)
  },
  changeCount(){
    this.setData({
      count: this.data.count+1
    })
    console.log(this.data.count)
  },
  inputFun(e){ // 为什么就说没有定义事件呢？？
    console.log(e)
    this.setData({
      username: e.detail.value
    })
  },
  goto () {
    // 跳转到 tabBar 页面使用 wx.switchTab，但是wx.switchTab 是不能传递参数的
    wx.switchTab({
      url: '/pages/my/my',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 传递过来的参数默认都在自带参数 options 对象里面 
    console.log(options)
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