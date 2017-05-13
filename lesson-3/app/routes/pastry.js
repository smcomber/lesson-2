'use strict'

const express = require('express')
const router = express.Router()

const Pastry = require('../models/pastry')

router.get('/', (req, res) => {
  const getPastries = Pastry.all()
  return getPastries.then(pastries => {
    return res.status(200).render('pastry/index',{
        title:`Pauline's Perfect Patisserie`,
        pastries: pastries.objects})
  })
})



router.post('/', (req, res) => {
})

router.get('/:name', (req, res) => {
  const { name } = req.params
  
  const getPastry = Pastry.find(name)
  
  return getPastry.then(pastry => {
    return res.status(200).render('pastry/show', {
      title: `Pauline's Perfect Patisserie`,
      pastry
    })
  })
})

router.put('/:name', (req, res) => {
})

router.delete('/:name', (req, res) => {
})

module.exports = router
