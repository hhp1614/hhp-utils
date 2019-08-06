import { assert } from 'chai';
import { urlQueryString } from './urlQueryString';

describe('urlQueryString', () => {
  it('测试对象序列化', () => {
    const params = {
      name: '管理员',
      pass: '123456'
    };
    assert(
      urlQueryString(params) === 'name=%E7%AE%A1%E7%90%86%E5%91%98&pass=123456'
    );
  });
});
