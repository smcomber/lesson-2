'use strict'

const express = require('express')
const router = express.Router()
const Pastry = require('../models/pastry')
const Order = require('../models/order')

router.get('/', (req, res) => {

    const getPastries = Order.getOrder()

    return getPastries.then(basket => {
        return res.status(200).render('order/index', {
            title: `Pauline's Perfect Patisserie`,
            pastries: basket.pastries,
            totalPrice: basket.totalPrice
        })
    })
})

router.get('/:name', (req, res) => {
    const {name} = req.params

    const getPastry = Pastry.find(name)

    return getPastry.then(basket => {
        return res.status(200).render('order/index', {
            title: `Pauline's Perfect Patisserie`,
            pastries: basket.pastries,
            totalPrice: basket.totalPrice
        })
    })
})

router.post('/', (req, res) => {
    const {pastryName} = req.body
    const getPastry = Pastry.find(pastryName)

    getPastry.then(item => {
        console.log(item)
        return Order.addPastry(item).then(ok => {
            return res.status(204).send(ok)
        })
    })
})

router.put('/:name', (req, res) => {})
router.delete('/:name', (req, res) => {})

module.exports = router