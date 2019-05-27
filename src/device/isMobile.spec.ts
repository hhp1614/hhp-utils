import { expect } from 'chai'
import { isMobile } from './isMobile'

describe('isMobile', () => {
  it('测试 isMobile', () => {
    const uaMobile =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
    expect(isMobile(uaMobile)).to.equal(true)
    const uaPC =
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36'
    expect(isMobile(uaPC)).to.equal(false)
  })
})
