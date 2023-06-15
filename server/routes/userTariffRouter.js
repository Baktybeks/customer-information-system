const Router = require('express')
const router = new Router()
const userTariffController = require('../controllers/userTariffController')

router.post('/', userTariffController.create)
router.get('/', userTariffController.getAll)
router.get('/:id', userTariffController.getOne)
router.get('/user/:userId', userTariffController.getUserAll)

module.exports = router