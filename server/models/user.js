const { Schema } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  name: {
    type: String,
    default: ''
  },
  roles: {
    type: [Schema.Types.ObjectId],
    ref: 'Role'
  },
  status: {
    type: Number,
    default: 0  // 0-未启用 1-启用
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  UpdatedAt: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
});

module.exports = UserSchema