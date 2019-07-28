const Blockchain = require('./blockchain')
const bitcoin = new Blockchain()

bitcoin.createNewBlock(
  7653,
  '00KNWRUBWEJWENFOJNWO',
  '07HDFSKBWESUFBWEIBWIEUFBNW'
)

console.log(bitcoin)
