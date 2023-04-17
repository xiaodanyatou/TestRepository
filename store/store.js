// 在这个.js 文件中，专门创建 Store 的实例对象
import { observable, action } from 'mobx-miniprogram'

// 导出实例
export const store = observable({  // observable里传递一个配置对象，里面包含所有共享数据
  activeTabBarIndex: 0,
  numA: 1,
  numB: 2,
  // 计算属性 计算属性的值不需要重新赋值，它的值依赖于数据字段的变化自动计算的
  get sum () { // get 修饰符，表示当前sum的值是只读的，只能获取它的值，无法对它重新赋值。
    return this.numA + this.numB
  },
  // actions 方法，用来修改 store 中的数据 （只允许外界，调用store里的方法来修改store里面的数据，不能让外界直接去修改store里的数据）
  updateNum1: action(function(step){ // function函数需要被 action 方法包裹起来，先调用action方法，在调用action方法的时候，内部传递一个function函数，通过function函数就可以修改store里面的数据了。
    this.numA += step
  }),
  updateNum2: action(function(step){
    this.numB += step
  }),
  updateActiveTabBarIndex: action(function(index){
    this.activeTabBarIndex = index
  })
})