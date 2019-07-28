module.exports = class Blockchain {
  constructor() {
    this.chain = []
    this.pendingTransactions = []
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
}
