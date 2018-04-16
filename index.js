const expect = require('expect')
const fs = require(fs)
const jsdom = require('jsdom')
const path = require('path')

describe('index', () => {
  
})

it('cals console.error()', () => {
  
})

jsdom({
  src: fs.readFileSync(path.resolve(__dirname, '..','index.js'),'utf-8')
})