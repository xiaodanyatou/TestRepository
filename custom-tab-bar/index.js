// custom-tab-bar/index.js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'

Component({
  behaviors: [storeBindingsBehavior], // 自定义tabBar共享store数据
  storeBindings: {
    store,
    fields: {
      sum: 'sum',  // 将sum转存到list info上
      active: 'activeTabBarIndex'
    },
    actions: {
      updateActive: 'updateActiveTabBarIndex'
    }
  },
  observers: { // 监听sum
    'sum': function(val){
      this.setData({ // 给list 索引为1的项info属性赋值
        'list[1].info': val
      })
    }
  },
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      {
        "text": "首页",
        "pagePath": "/pages/index/index",
        "iconPath": "/images/home.png",
        "selectedIconPath": "/images/home-active.png"
      },
      {
        "text": "消息",
        "pagePath": "/pages/message/message",
        "iconPath": "/images/message.png",
        "selectedIconPath": "/images/message-active.png",
        "info": 0
      },
      {
        "text": "联系我们",
        "pagePath": "/pages/my/my",
        "iconPath": "/images/my.png",
        "selectedIconPath": "/images/my-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // tabBar 的active是在store里面映射过来的
      this.updateActive(event.detail)
      // 点击不同的tab项实现页面切换  根据tab索引找到对应的pagePath
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  }
})
