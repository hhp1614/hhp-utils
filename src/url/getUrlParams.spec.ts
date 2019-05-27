import { expect } from 'chai'
import { getUrlParams } from './getUrlParams'

describe('getUrlParams', () => {
  it('返回参数对象', () => {
    const url = 'https://hhp1614.com/?name=hhp1614&msg=hello'
    const res = getUrlParams(url)
    expect(res).to.deep.equal({
      name: 'hhp1614',
      msg: 'hello'
    })
  })
})
