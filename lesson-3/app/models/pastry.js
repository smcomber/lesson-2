'use strict'

const Promise = require('bluebird')
var pastries = require('../database/pastries')

class Pastry {
  // A new Pastry must be passed an object with { <name:String>, <image:String>, <description:String>, <price:Number> }
  constructor ({
    name,
    image,
    description,
    price
  }) {
    this.name = name
    this.image = image
    this.description = description
    this.price = price
  }

  // update is a method on Pastry.prototype. It updates the pastry object
  update ({
    name,
    image,
    description,
    price
  }) {
    const oldname = this.name
    const oldImage = this.image
    const oldDescription = this.description
    const oldPrice = this.price

    const p = pastries.find(pastry => pastry.name === oldname)
    if (!p) {
      return Promise.reject(
        Object.assign(new Error('Pastry not found'), {
          statusCode: 404
        })
      )
    } else {
      this.name = name || oldname
      this.image = image || oldImage
      this.description = description || oldDescription
      this.price = price || oldPrice

      pastries = pastries.filter(pastry => pastry.name !== oldname)
      pastries.push(this)
      return Promise.resolve(this)
    }
  }

  // del is a method on Pastry.prototype. It deletes the object
  del () {
    const { name } = this
    const p = pastries.find(pastry => pastry.name === name)
    if (!p) {
      return Promise.reject(
        Object.assign(new Error('Pastry not found'), {
          statusCode: 404
        })
      )
    } else {
      pastries = pastries.filter(pastry => pastry.name !== name)
    }

    return Promise.resolve({})
  }

  // create is a method on Pastry.prototype. It creates a new object
  create () {
    const { name, image, description, price } = this
    const p = pastries.find(pastry => pastry.name === name)
    if (p) {
      return Promise.reject(
        Object.assign(new Error('Pastry already exists'), {
          statusCode: 409
        })
      )
    } else {
      pastries.push(new Pastry({
        name,
        image,
        description,
        price
      }))
    }

    return Promise.resolve(this)
  }

  // find is a method on Pastry. Use it to find a specific pastry
  static find (name) {
    const p = pastries.find(pastry => {
      return pastry.name.toLowerCase() === name.toLowerCase()
    })
    if (!p) {
      return Promise.reject(
        Object.assign(new Error('Pastry not found'), {
          statusCode: 404
        })
      )
    } else {
      const pastry = new Pastry(p)
      return Promise.resolve(pastry)
    }
  }

  // all is a method on Pastry. Use it to get all of the pastries
  static all () {
    const ps = pastries.map(pastry => new Pastry(pastry))
    return Promise.resolve({
      total: ps.length,
      objects: ps
    })
  }
}

module.exports = Pastry
