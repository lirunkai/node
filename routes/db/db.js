const mongoose = require('mongoose')

// 连接
mongoose.Promise = global.Promise;
const db = mongoose.connect('localhost', 'daniu')
//const db = mongoose.connect('mongodb://localhost/daniu')

mongoose.connection.on('connected', () => {
  console.log('链接成功')
})

mongoose.connection.on('error', (err) => {
  console.log('err====' + err)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose 断开')
})

module.exports = db;