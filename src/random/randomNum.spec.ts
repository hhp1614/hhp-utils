import { assert } from 'chai'
import { randomNum } from './randomNum'

describe('randomNum', () => {
  it('测试随机数', () => {
    for (let i = 0; i < 1000; i++) {
      const ran = randomNum(10, 20)
      assert(ran >= 10 && ran <= 20)
    }
    for (let i = 0; i < 1000; i++) {
      const ran = randomNum()
      assert(ran >= 0 && ran <= 1)
    }
  })
})
