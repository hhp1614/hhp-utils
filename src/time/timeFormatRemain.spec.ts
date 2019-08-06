import { assert } from 'chai';
import { timeFormatRemain } from './timeFormatRemain';

describe('timeFormatRemain', () => {
  it('测试距离现在已经过去的时间', () => {
    let time: number = +new Date();
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    time = time + oneSecond + oneMinute + oneHour + oneDay;
    assert(timeFormatRemain(time) === '1天 1小时 1分钟 1秒');
  });
});
