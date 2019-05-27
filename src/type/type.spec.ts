import { expect } from 'chai'
import { type } from './type'

describe('type', () => {
  it('返回字符串 number', () => {
    expect(type(123)).to.equal('number')
    expect(type(new Number())).to.equal('number')
  })

  it('返回字符串 string', () => {
    expect(type('123')).to.equal('string')
    expect(type(new String())).to.equal('string')
  })

  it('返回字符串 boolean', () => {
    expect(type(true)).to.equal('boolean')
    expect(type(false)).to.equal('boolean')
    expect(type(new Boolean())).to.equal('boolean')
  })

  it('返回字符串 undefined', () => {
    expect(type(undefined)).to.equal('undefined')
  })

  it('返回字符串 null', () => {
    expect(type(null)).to.equal('null')
  })

  it('返回字符串 object', () => {
    expect(type({})).to.equal('object')
    expect(type(new Object())).to.equal('object')
    class A {}
    expect(type(new A())).to.equal('object')
  })

  it('返回字符串 array', () => {
    expect(type([])).to.equal('array')
    expect(type(new Array())).to.equal('array')
  })

  it('返回字符串 date', () => {
    expect(type(new Date())).to.equal('date')
  })

  it('返回字符串 error', () => {
    expect(type(new Error())).to.equal('error')
  })

  it('返回字符串 regexp', () => {
    expect(type(/ /)).to.equal('regexp')
    expect(type(new RegExp(''))).to.equal('regexp')
  })

  it('返回字符串 function', () => {
    expect(type(function() {})).to.equal('function')
    expect(type(() => {})).to.equal('function')
    function a() {}
    expect(type(a)).to.equal('function')
    class A {}
    expect(type(A)).to.equal('function')
  })

  it('返回字符串 math', () => {
    expect(type(Math)).to.equal('math')
  })

  it('返回字符串 json', () => {
    expect(type(JSON)).to.equal('json')
  })

  it('返回字符串 symbol', () => {
    expect(type(Symbol())).to.equal('symbol')
  })
})
