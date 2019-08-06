import { expect } from 'chai';
import { randomColor } from './randomColor';

describe('randomColor', () => {
  it('返回 16 进制颜色值', () => {
    const res = randomColor();
    const reg = /^#([0-9]|[a-f]){6}/;
    expect(res).to.match(reg);
  });
});
