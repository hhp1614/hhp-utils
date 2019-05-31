import { assert } from 'chai'
import { timeFormatPass } from './timeFormatPass'

describe('timeFormatPass', () => {
  it('测试距离现在已经过去的时间', () => {
    let time: number
    time = +new Date() - 30000
    assert(timeFormatPass(time) === '刚刚')
    time = +new Date() - 70000
    assert(timeFormatPass(time) === '1分钟前')
    time = +new Date() - 70000 * 60
    assert(timeFormatPass(time) === '1小时前')
    time = +new Date() - 70000 * 60 * 24
    assert(timeFormatPass(time) === '1天前')
    time = +new Date() - 70000 * 60 * 24 * 30
    assert(timeFormatPass(time) === '1个月前')
    time = +new Date() - 70000 * 60 * 24 * 30 * 12
    assert(timeFormatPass(time) === '1年前')
  })
})
