const Blockchain = require('./blockchain')
const bitcoin = new Blockchain()

const previousBlockHash = '0AA0IAIJIJUIGGUGUYG'

const currentBlockData = [
  {
    amount: 10,
    sender: 'ALICE090970FYFFYFYFIF',
    recipient: 'BOB797789790JFJFFGFJF'
  },
  {
    amount: 30,
    sender: 'ALICGHIUGUGOOIGODYGDHFD',
    recipient: 'BOBTYSHGHOUHOHOHOHOHO'
  },
  {
    amount: 200,
    sender: 'ALICEHJGUGUTETEEUUCVVUVUV',
    recipient: 'BOBGIUGIUGIUDRTESREAREUY'
  }
]

const nonce = 100

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce))
