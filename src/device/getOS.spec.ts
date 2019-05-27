import { assert } from 'chai'
import { getOS } from './getOS'

describe('getOS', () => {
  it('测试 getOS', () => {
    assert(getOS() === 'Unkonwn')
  })
})
