import { expect } from 'chai'
import { isIdCard } from './isIdCard'

describe('isIdCard', () => {
  it('测试身份证号校验', () => {
    expect(isIdCard('11060119760911173X')).to.be.equal(true)
    expect(isIdCard('110701199007090000')).to.be.equal(true)
    expect(isIdCard('123456789012345678')).to.be.equal(false)
  })
})
