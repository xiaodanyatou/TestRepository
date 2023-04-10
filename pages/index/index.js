// pages/fenlei/fenlei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    gridList: []
  },
    // 1、轻提示
    // wx.showToast({
    //   title: '这是提示', // 最多显示7个字,如果超过7个字，icon设置为none
    //   icon: 'loading'
    // })
    // 2、模态框
    // wx.showModal({
    //   title: '我是模态框标题',
    //   content: '我是模态框内容',
    //   success: (res) => { // 写成箭头函数，这样this就指向当前函数，如果写成function形式，this就会报错。
    //     console.log(res); // 点击确定 confirm: true ,点击取消 cancle: true
    //     if (res.confirm) {
    //       wx.showToast({
    //         title: '点击了确定'
    //       })
    //     } else {
    //       wx.showToast({
    //         title: '点击了取消'
    //       })
    //     }
    //   }
    // })
  // clickItem (e) {
  //   let {item, index} = e.currentTarget.dataset
  //   console.log(item, index)
  //   this.setData({
  //     activeIndex: index
  //   })
  // },
  // toDetail () {
    // 1.wx.navigateTo  wx是全局变量
    // 注意：使用 wx.navigateTo 跳转的页面，导航栏显示返回按钮；
    // 只能跳转 非tabBar的页面
    // 小程序里面传递参数跟vue中get请求传参类似，都是通过模板字符串的形式
    // wx.navigateTo({
    //   url: `/pages/detail/detail?name=${this.data.name}&num=${this.data.num}`,  // 这里要写绝对路径 / 开头 后面不要有后缀名
    // })
    // 2.wx.reLanch
    // 注意：使用 wx.reLaunch 跳转页面，导航栏显示去到首页的 home图标，通常用在小程序的启动页面；
    // 只能跳转 非tabBar的页面
    // wx.reLaunch({
    //   url: `/pages/detail/detail?name=${this.data.name}&num=${this.data.num}`,
    // })
  // },
  // getSend (e) {
    // 子组件拿回来的数据在 e.detail 里面
    // console.log(e.detail)
    // this.setData({
    //   msg: e.detail
    // })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) { // 页面加载时会触发，但是只会触发一次，有缓存。 这里适合发送请求，会把请求的数据缓存下来
    this.getSwiperList()
    this.getGridList()
  },
  // 获取轮播图数据
  getSwiperList () {
    wx.request({
      url: 'https://www.escook.cn/slides',
      method: 'GET',
      success: (res) => {
        this.setData({
          swiperList: res.data
        })
      }
    })
  },
  //获取九宫格数据
  getGridList () {
    wx.request({
      url: 'https://www.escook.cn/categories',
      method: 'GET',
      success: (res) => {
        console.log(res)
        this.setData({
          gridList: res.data
        })
      }
    })
  },
  // 编程式导航跳转到tabBar页面 调用wxwx.switchTab
  gotoMessage(){
    wx.switchTab({
      url: '/pages/message/message',
    })
  },
  // 编程式导航跳转到Info页面（非tabBar页面）  调用wxwx.navigateTo
  gotoInfo () {
    wx.navigateTo({
      url: '/pages/info/info?name=zsss&age=98', // 传参
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
  onShow() { // 每次页面加载显示都会触发
    console.log('onshow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() { // 每次离开当前页面都会触发

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() { // 下拉刷新 
    // 哪个文件需要下啦，就需要在该文件对应的json文件内配置enablePullDownRefresh:true后，才可以在当前页面下拉
    console.log('拉动了')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() { // 上拉加载更多
    console.log('触底了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() { // 分享  只要写上这个生命周期，就可以分享了
  }
})