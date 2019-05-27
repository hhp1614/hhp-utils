import { expect } from 'chai'
import { isPhoneNum } from './isPhoneNum'

describe('isPhoneNum', () => {
  it('测试手机号校验', () => {
    expect(isPhoneNum('13545698712')).to.be.equal(true)
    expect(isPhoneNum('12345689012')).to.be.equal(false)
  })
})
