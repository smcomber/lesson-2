const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const index = require('./routes/index')
const pastry = require('./routes/pastry')
// add order route
const order = require('./routes/order')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/pastries', pastry)
// add order route
app.use('/order', order)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = Object.assign(new Error('Not Found'), {
    status: 404
  })
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  Object.assign(res.locals, {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
