import { expect } from 'chai'
import { timeFormatPass } from './timeFormatPass'

describe('timeFormatPass', () => {
  it('测试时间格式化', () => {
    expect(timeFormatPass(+new Date())).to.be.equal('刚刚')
    // expect(timeFormatPass(+new Date('2019-5-27 18:5:35'))).to.be.equal('3天前')
    // expect(timeFormatPass('2018-5-27 18:5:35')).to.be.equal('1年前')
    expect(timeFormatPass(new Date())).to.be.equal('刚刚')
  })
})
