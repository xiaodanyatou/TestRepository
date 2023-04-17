// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    max: {
      type: Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInfo(){
      console.log(this.data === this.properties) // true data 和 properties 指向了同一个对象，data是可读可写的，所以properties也是可读可写的
    },
    // 事件处理函数和自定义方法需要定义在methods里
    // 事件处理函数 count自增1
    addCount () {
      // 使用自定义属性max控制自增的范围
      if (this.data.count >= this.properties.max) return
      this.setData({
        count: this.data.count + 1,
        max: this.properties.max + 1
      })
      // 调用自定义方法
      this._showCount()
    },
    // 自定义方法
    _showCount () {
      wx.showToast({
        title: 'count是' + this.data.count,
      })
    }
  }
})
