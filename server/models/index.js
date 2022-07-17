const mongoose = require('mongoose');
const UserSchema = require('./user')
const RoleSchema = require('./role')
const MenuSchema = require('./menu')
// const ResourceSchema = require('./resource')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/rbac');
}

module.exports = {
  User: mongoose.model('User', UserSchema),
  Role: mongoose.model('Role', RoleSchema),
  Menu: mongoose.model('Menu', MenuSchema),
  // Resource: mongoose.model('Resource', ResourceSchema)
}
