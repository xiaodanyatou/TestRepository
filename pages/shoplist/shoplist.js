// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isLoading: false // false 表示可以发起请求 true 表示当前有正在请求的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // options拿到跳转过来携带的参数
    this.setData({
      query: options // 参数转存到data里面，供其他方法使用
    })
    this.getShopList()
  },
  // 获取商铺列表数据
  getShopList (cb) {
    // 展示loading效果
    wx.showLoading({
      title: '数据加载中...',
    })
    this.setData({
      isLoading: true
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success: (res) => {
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: res.header['X-Total-Count'] - 0  // 字符串转数字
        })
      },
      complete: () => {
        // 隐藏loading
        wx.hideLoading()
        this.setData({
          isLoading: false
        })
        cb && cb() // 解决下拉刷新窗口不会自动关闭的问题
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title // 动态标题
    })
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
    /**
     * 1. 重置关键数据 page=1 total=0 shopList=[]
     * 2. 重新发起请求
     */
    this.setData({
      page: 1,
      shopList: [],
      total: 0
    })
    this.getShopList(() => {
      // 关闭下拉刷新窗口
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // page * pageSize >= total 判断是否还有下一页数据
    if (this.data.page * this.data.pageSize >= this.data.total) {
      return wx.showToast({
        title: '数据加载完毕！',
        icon: 'none'
      })
    }
    if (this.data.isLoading) return
    // 触底翻页 page 增1
    this.setData({
      page: this.data.page + 1
    })
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})