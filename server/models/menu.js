const { Schema } = require('mongoose');

const MenuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '',
  },
  parentId: {
    type: Schema.Types.ObjectId
  },
  unique: {
    type: String,
    unique: true,
    required: true
  },
  icon: {
    type: String,
    default: '',
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Number,
    default: 0  // 0-未启用 1-启用
  },
  sort: {
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
  }
});

module.exports = MenuSchema