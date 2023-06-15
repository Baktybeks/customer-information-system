const Router = require('express')
const router = new Router()
const tariffRouter = require('./tariffRouter')
const userRouter = require('./userRouter')
const userTariffRouter = require('./userTariffRouter')

router.use('/tariff', tariffRouter)
router.use('/user', userRouter)
router.use('/user_tariff', userTariffRouter)


module.exports = router