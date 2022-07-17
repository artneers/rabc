const { Schema } = require('mongoose');

const RoleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '',
  },
  menus: {
    type: [Schema.Types.ObjectId],
    ref: 'Menu'
  },
  // resources: {
  //   type: [Schema.Types.ObjectId],
  //   ref: 'Resource'
  // },
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
  }
});

module.exports = RoleSchema