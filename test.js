const Blockchain = require('./blockchain')
const bitcoin = new Blockchain()

bitcoin.createNewBlock()

bitcoin.createNewBlock(7653, '00KNWRUBWEJWENFOJNWO', '00NDGHEWNEJWHBRNMNWO')
bitcoin.createNewBlock(8971, '00HDNFHEWEDGRBCHRNKG', '00HDYENRHFBKDURNFHNE')
bitcoin.createNewBlock(9761, '00JOIRNNOIHWEOUBNEWO', '00NJKRUOQWNOIWHRNOWQ')

console.log(bitcoin)
