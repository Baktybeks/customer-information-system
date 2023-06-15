const {Tariff} = require('../models/models')
const ApiError = require('../error/ApiError')

class TariffController {
    async create(req, res, next) {
        try {
            const {title, description, speed, price} = req.body
            const tariff = await Tariff.create({title, description, speed, price})
            return res.json(tariff)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const tariff = await Tariff.findAll()
        return res.json(tariff)
    }

    async getOne(req, res) {
        const {id} = req.params
        const tariff = await Tariff.findOne(
            {
                where:{id}
            }
        )
        return res.json(tariff)
    }
}

module.exports = new TariffController()