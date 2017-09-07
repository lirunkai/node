const mongoose = require('mongoose')
const db = require('../db/db.js')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User;