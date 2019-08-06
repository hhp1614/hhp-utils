import { expect } from 'chai';
import { getExplore } from './getExplore';

describe('getExplore', () => {
  it('测试 Firefox', () => {
    const ua1 =
      'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0';
    const ua2 =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0';
    expect(getExplore(ua1)).to.deep.equal({ type: 'Firefox', version: '47.0' });
    expect(getExplore(ua2)).to.deep.equal({ type: 'Firefox', version: '42.0' });
  });

  it('测试 Chrome', () => {
    const ua =
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36';
    expect(getExplore(ua)).to.deep.equal({
      type: 'Chrome',
      version: '51.0.2704.103'
    });
  });

  it('测试 Opera', () => {
    const ua =
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41';
    expect(getExplore(ua)).to.deep.equal({
      type: 'Opera',
      version: '38.0.2220.41'
    });
  });

  it('测试 Safari', () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1';
    expect(getExplore(ua)).to.deep.equal({
      type: 'Safari',
      version: '10.0'
    });
  });

  it('测试 IE', () => {
    const ua =
      'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)';
    expect(getExplore(ua)).to.deep.equal({
      type: 'IE',
      version: '9.0'
    });
  });
});
