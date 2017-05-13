'use strict'

const tap = require('tap')
const request = require('supertest')
const app = require('../../app')

tap.test('get all pastries', t => {
  t.test('returns 200', t => {
    return request(app)
      .get('/pastries')
      .then(resp => {
        t.equal(resp.statusCode, 200)
        t.equal(resp.body.total, 19)
      })
  })
  t.end()
})

tap.test('get specific pastry', t => {
  t.test('returns 200 and pastry', t => {
    const name = 'canele'
    return request(app)
      .get(`/pastries/${name}`)
      .then(resp => {
        t.equal(resp.statusCode, 200)
        t.equal(resp.body.name, `${name}`)
        t.equal(resp.body.price, 573)
      })
  })
  t.end()
})

tap.test('create pastry', t => {
  t.test('returns 201 and pastry', t => {
    const name = 'gateau basque'
    const price = 970
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Recette_gateau_basque_etape_12.jpg'
    const description = 'Gâteau Basque is typically constructed from layers of an almond flour based cake with a filling of either pastry cream or preserved cherries.'
    return request(app)
      .post(`/pastries`)
      .send({
        name,
        price,
        image,
        description
      }).then(resp => {
        t.equal(resp.statusCode, 201)
        t.equal(resp.body.name, `${name}`)
        t.equal(resp.body.image, image)
        t.equal(resp.body.description, description)
        t.equal(resp.body.price, price)
      })
  })

  t.test('returns 409 if pastry has already been created', t => {
    const name = 'gateau basque'
    const price = 970
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Recette_gateau_basque_etape_12.jpg'
    const description = 'Gâteau Basque is typically constructed from layers of an almond flour based cake with a filling of either pastry cream or preserved cherries.'

    const createAda = request(app)
      .post(`/pastries`)
      .send({
        name,
        price,
        image,
        description
      })

    return createAda.then(() => {
      return request(app)
        .post(`/pastries`)
        .send({
          name,
          price,
          image,
          description
        }).then(resp => {
          t.equal(resp.statusCode, 409)
        })
    })
  })
  t.end()
})

tap.test('delete pastry', t => {
  t.test('returns 204 and nothing in the body', t => {
    const name = 'gateau basque'
    const price = 970
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Recette_gateau_basque_etape_12.jpg'
    const description = 'Gâteau Basque is typically constructed from layers of an almond flour based cake with a filling of either pastry cream or preserved cherries.'

    const createAda = request(app)
      .post(`/pastries`)
      .send({
        name,
        price,
        image,
        description
      })

    return createAda.then(() => {
      return request(app)
        .delete(`/pastries/${name}`)
        .then(resp => {
          t.equal(resp.statusCode, 204)
          t.same(resp.body, {})
        })
    })
  })
  t.end()
})

tap.test('update pastry', t => {
  t.test('returns 200 and the new pastry data', t => {
    const name = 'gateau basque'
    const price = 970
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Recette_gateau_basque_etape_12.jpg'
    const description = 'Gâteau Basque is typically constructed from layers of a flour based cake with a filling of either pastry cream or preserved cherries.'

    const createAda = request(app)
      .post(`/pastries`)
      .send({
        name,
        price,
        image,
        description
      })

    const newDescription = 'Gâteau Basque is typically constructed from layers of an almond flour based cake with a filling of either pastry cream or preserved cherries.'
    return createAda.then(() => {
      return request(app)
        .put(`/pastries/${name}`)
        .send({
          name,
          price,
          image,
          description
        })
        .then(resp => {
          t.equal(resp.statusCode, 200)
          t.equal(resp.body.name, name)
          t.equal(resp.body.price, 970)
          t.equal(resp.body.description, newDescription)
        })
    })
  })
  t.end()
})
