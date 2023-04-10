// components/child/child.js
Component({
  /**
   * 组件的属性列表
   */
  properties: { // 接收父组件传递过来的数据
    // 这边给了接收数据的类型，那么父组件在传递的时候就要保证类型一致。
    name: {
      type: String,
      value: ''
    },
    num: {
      type: Number,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: { // 组件内部数据
    msg: '我是子组件的数据'
  },

  /**
   * 组件的方法列表
   */
  methods: { // 组件内部方法
    send () {
      // 传递给父组件 this.triggerEvent
      this.triggerEvent('send', this.data.msg)
    }
  },
  // 子组件的生命周期
  lifetimes: {
    // 页面加载时触发 相当于我们路由页面的onload
    ready () {
      // 如果不通过子组件点击事件传值给父组件，也可以直接在这里写 this.triggerEvent
      // 那么页面一加载的时候就把数据传给父组件了
      // 如果传递多个的时候，也可以以数组或者对象的方式传递
      this.triggerEvent('send', this.data.msg)
    }
  }
})
