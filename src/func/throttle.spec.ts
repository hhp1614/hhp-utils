import { expect } from 'chai'
import { throttle } from './throttle'

describe('throttle', () => {
  it('测试 throttle', done => {
    let num = 0
    let interval: any
    let throttled = throttle(() => {
      num += 1
    }, 50)
    interval = setInterval(() => {
      throttled()
    }, 50)
    setTimeout(() => {
      expect(num).to.equal(3)
      done()
      clearInterval(interval)
    }, 160)
  })
})
