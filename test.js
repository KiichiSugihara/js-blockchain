const Blockchain = require('./blockchain')
const bitcoin = new Blockchain()

bitcoin.createNewBlock(80103, '00KNWRUBWEJWENFOJNWO', '00NDGHEWNEJWHBRNMNWO')

bitcoin.createNewTransaction(1, 'ALICEJSJSNWNN', 'BOBDKENINOMDO')

console.log(bitcoin)
