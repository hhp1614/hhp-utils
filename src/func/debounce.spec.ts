import { expect } from 'chai';
import { debounce } from './debounce';

describe('debounce', () => {
  it('测试 debounce', done => {
    let num = 0;
    let interval: any;
    let debounced = debounce(() => {
      num += 1;
      expect(num).to.equal(1);
      done();
    }, 500);
    interval = setInterval(() => debounced(), 20);
    setTimeout(() => {
      clearInterval(interval);
    }, 800);
  });
});
