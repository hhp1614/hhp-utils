import { expect } from 'chai';
import { milliFormat } from './milliFormat';

describe('milliFormat', () => {
  it('测试数字千位分隔符', () => {
    expect(milliFormat(123456.789)).to.be.equal('123,456.789');
    expect(milliFormat(123456.789, 2)).to.be.equal('123,456.79');
    expect(milliFormat('123456789.123456789')).to.be.equal(
      '123,456,789.123456789'
    );
    expect(milliFormat('123456789.123456789', 2)).to.be.equal('123,456,789.12');
    expect(milliFormat(123.456789, 4)).to.be.equal('123.4568');
    expect(milliFormat('123.456789', 4)).to.be.equal('123.4568');
  });
});
