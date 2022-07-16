const express  = require("express")
const userCtrl = require('../controllers/user')
const roleCtrl = require('../controllers/role')
const menuCtrl = require('../controllers/menu')

const router = express.Router()

router.get('/users', userCtrl.list)  // 获取用户列表
      .post('/users', userCtrl.create) // 创建用户
      .put('/users/:id', userCtrl.update) // 更新用户
      .delete('/users/:id', userCtrl.delete) // 删除用户
      .get('/users/:id', userCtrl.one) // 根据ID获取单个用户
      .patch('/users/:id/roles', userCtrl.updateRoles) // 给用户分配角色

router.get('/roles', roleCtrl.list)  // 获取角色列表
      .post('/roles', roleCtrl.create) // 创建角色
      .put('/roles/:id', roleCtrl.update) // 更新角色
      .delete('/roles/:id', roleCtrl.delete) // 删除角色
      .get('/roles/:id', roleCtrl.one) // 根据ID获取单个角色
      .patch('/roles/:id/menus', roleCtrl.updateMenus) // 给角色分配菜单

router.get('/menus', menuCtrl.list)  // 获取菜单列表
      .post('/menus', menuCtrl.create) // 创建菜单
      .put('/menus/:id', menuCtrl.update) // 更新菜单
      .delete('/menus/:id', menuCtrl.delete) // 删除菜单
      .get('/menus/:id', menuCtrl.one) // 根据ID获取单个菜单


module.exports = router

