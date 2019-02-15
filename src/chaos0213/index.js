/**
 * Object.defineProperty 用法
 */
let obj = {}
let song = 'the hell song'
obj.singer = 'sum 41'

Object.defineProperty(obj, 'music', {
  // 拥有get/set方法时不能定义value和writable
  // value: 'crash',
  configurable: true,
  // writable: true,
  enumerable: true,
  get: function() {
    return song
  },
  set: function(val) {
    song = val
  }
})

song = 'flaplip'

console.log(obj)
// 如果想让obj可枚举，则需要设置enumerable为true
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    const element = obj[key]
    console.log(element)
  }
}