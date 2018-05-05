
const express = require('express')
const accounts = require('./accounts')

const router = express.Router()

router.get('/accounts', accounts.getAccounts)
router.get('/accounts/:id', accounts.getAccounts)
router.post('/accounts', accounts.addAccount)
router.put('/accounts/:id', accounts.updateAccount)
router.delete('/accounts/:id',accounts.removeAccount)
router.param('id',accounts.idParam)


module.exports = router