const router = require('express').Router()
const controller = require('./user.controller')
const {
  requireUser,
  requireAdmin
} = require('../../utils/middleware')

router.get('/', requireUser, controller.getUser)

module.exports = router