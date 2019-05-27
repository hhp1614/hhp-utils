import { expect } from 'chai'
import { isEmail } from './isEmail'

describe('isEmail', () => {
  it('测试邮箱校验', () => {
    expect(isEmail('hhp1614@gmail.com')).to.be.equal(true)
    expect(isEmail('hhp1614.com')).to.be.equal(false)
  })
})
