const {UserTariff, Tariff} = require('../models/models')
const ApiError = require('../error/ApiError')

class UserTariffController {
    async create(req, res, next) {
        try {
            const {status, tariffId, userId} = req.body
            const userTariff = await UserTariff.create({status, tariffId, userId})
            return res.json(userTariff)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const userTariff = await UserTariff.findAll()
        return res.json(userTariff)
    }

    async getUserAll(req, res) {
        const {userId} = req.params
        const userTariff = await UserTariff.findAll(
            {
                where:{userId},
                include: [
                    {
                        model: Tariff,
                        attributes: ['title', 'description', 'speed', 'price']
                    }
                ]
            }
        )
        return res.json(userTariff)
    }

    async getOne(req, res) {
        const {id} = req.params
        const userTariff = await UserTariff.findOne(
            {
                where:{id}
            }
        )
        return res.json(userTariff)
    }
}

module.exports = new UserTariffController()