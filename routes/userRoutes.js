const express = require('express')
const { default: register } = require('../../../client/src/pages/register')
const {loginController, registerController} = require('../controllers/userCtr')

const router =express.Router()

router.post('/login',loginController)

router.post('/register',registerController)

module.export = router
// comment 