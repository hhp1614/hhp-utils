import { expect } from 'chai'
import { isUrl } from './isUrl'

describe('isUrl', () => {
  it('测试 URL 校验', () => {
    expect(isUrl('hhp1614.com/?name=hhp1614&pass=123')).to.be.equal(true)
    expect(isUrl('hhp1614.com/?redirect=https://hhp1614.com')).to.be.equal(true)
    expect(isUrl('https://hhp1614.com')).to.be.equal(true)
    expect(isUrl('https://www.hhp1614.com')).to.be.equal(true)
    expect(isUrl('https://hhp1614com')).to.be.equal(false)
  })
})
