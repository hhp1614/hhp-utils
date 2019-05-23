import * as utils from '../index';

test('getUrlParams', () => {
  const url = 'http://hhp1614.com/?name=admin&pass=123';
  const res = {
    name: 'admin',
    pass: '123',
  };
  expect(utils.getUrlParams(url)).toEqual(res);
});
