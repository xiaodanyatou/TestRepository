// components/test3/test3.js
const myBehavior = require('../../behaviors/my-behavior')

Component({
  behaviors: [myBehavior],
  options: {
    // 指定所有 _ 开头的数据字段为纯数据字段，提高页面的渲染性能
    pureDataPattern: /^_/
  },
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    // username: 'xiaoyi', // 组件的数据会覆盖掉 behavior 中的同名数据
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0, 0, 0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // count 自增+1
    addCount(){
      this.setData({
        count: this.properties.count + 1 // 修改properties中的count
      })
      // 触发自定义事件，将数值同步给父组件
      this.triggerEvent('sync', {value: this.properties.count})
    },
    // 生成随机 RGB 颜色方法，非事件处理函数用_开头
    _randomColor(){
      this.setData({
        _rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256)
        }
      })
    },
    changeR () {
      this.setData({
        '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
      })
    },
    changeG () {
      this.setData({
        '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
      })
    },
    changeB () {
      this.setData({
        '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
      })
    }
  },
  observers: {
    '_rgb.**': function(obj){
      this.setData({
        fullColor: `${obj.r}, ${obj.g}, ${obj.b}`
      })
    }
  },
  // 新方式  如果同时存在新旧两种方式生命周期函数，只执行lifetimes下的生命周期函数
  lifetimes: {
    created(){
      console.log('----created----')
    },
    attached(){
      console.log('----attached----')
    }
  },
  // 监听页面生命周期
  pageLifetimes: {
    // 监听到页面展示时，随机生成_rgb颜色
    show(){
      this._randomColor()
    },
    hide(){},
    resize(size){}
  }
})
