import { assert } from 'chai'
import { getUrlParams } from './getUrlParams'

describe('getUrlParams', () => {
  it('返回参数对象', () => {
    let url: string
    url = 'https://hhp1614.com/?name=%E7%AE%A1%E7%90%86%E5%91%98&pass=123456'
    assert.deepEqual(getUrlParams(url), {
      name: '管理员',
      pass: '123456'
    })
    url = 'hhp1614.com?a=233&b=%26'
    assert.deepEqual(getUrlParams(url), {
      a: '233',
      b: '&'
    })
    url = ''
    assert.deepEqual(getUrlParams(url), {})
  })
})
