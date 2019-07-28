const sha256 = require('sha256')
module.exports = class Blockchain {
  constructor() {
    this.chain = []
    this.pendingTransactions = []
    this.createNewBlock(100, '0', '0')
  }
  createNewBlock(nonce, previousBlockHash, hash) {
    const newBlock = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transaction: this.pendingTransactions,
      nonce: nonce,
      hash: hash,
      previousBlockHash: previousBlockHash
    }

    this.pendingTransactions = []
    this.chain.push(newBlock)

    return newBlock
  }
  getLastBlock() {
    return this.chain[this.chain.length - 1]
  }
  createNewTransaction(amount, sender, recipient) {
    const newTransaction = {
      amount: amount,
      sender: sender,
      recipient: recipient
    }

    this.pendingTransactions.push(newTransaction)
  }
  hashBlock(previousBlockHash, currentBlockData, nonce) {
    const dataAsString =
      previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData)
    const hash = sha256(dataAsString)
    return hash
  }
  proofOfWork(previousBlockHash, currentBlockData) {
    let nonce = 0
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)
    while (hash.substring(0, 5) !== '00000') {
      nonce++
      hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)
    }
    return nonce
  }
}
