import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    username: 'shanhongli',
    firstname: 'SHAN'
  },
  // 在父组件中获取子组件的实例对象
  getChild(){
    const child = this.selectComponent('.customA') // 拿到子组件实例对象child
    // child.setData({
    //   count: child.properties.count + 1 // 这里是使用 child实例里面的方法和数据，所以不能用this；this只的是父组件
    // })
    child.addCount()
  },
  syncCount(e){
    // e.detail.value接收到子组件传递过来的值
    this.setData({
      count: e.detail.value
    })
  },
  // 按钮 tap 事件处理函数
  btnHandler1(e){
    console.log(e.target.dataset)
    this.updateNum1(e.target.dataset.step)
  },
  btnHandler2(e){
    this.updateNum2(e.target.dataset.step)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['numA', 'numB', 'sum'],
      actions: ['updateNum1', 'updateNum2']
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
    this.storeBindings.destoryStoreBindings()
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