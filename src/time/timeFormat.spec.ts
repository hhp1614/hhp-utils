import { expect } from 'chai'
import { timeFormat } from './timeFormat'

describe('timeFormat', () => {
  it('测试时间格式化', () => {
    expect(timeFormat()).to.be.equal(timeFormat(+new Date()))
    expect(timeFormat(+new Date('2019-5-27 18:5:35'))).to.be.equal(
      '2019-05-27 18:05:35'
    )
  })
})
