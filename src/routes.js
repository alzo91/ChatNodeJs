const express = require('express')
const routes = express.Router()
const moment = require('moment')
const path = require('path')

const middleware = (req, res, next) => {
  console.log('middleware: ' + moment(new Date()).format('DD/MM/Y HH:mm:ss'))
  return next()
}

routes.use(middleware)

routes.get('/', (req, res) => {
  console.log('path default')
  console.log(req.body)
  return res.render('auth/singin.njk')
})

routes.get('/login', (req, res) => {
  console.log('path login')
  console.log(req.body)

  return res.render('auth/login.njk')
})

routes.post('/dashboard', (req, res) => {
  console.log('path infos')
  console.log(req.body)

  let pNome = req.body.txtNome // req.param('txtNome');
  let pPass = req.body.txtPassword // req.param('txtEmail');

  let boolLoginOk = false

  console.objEmployeePw.filter(item => {
    if (item.nome === pNome && item.pass === pPass) {
      boolLoginOk = true
    }
  })

  if (!boolLoginOk) {
    return res.render('auth/login.njk')
  } else {
    return res.sendFile(path.resolve(__dirname, 'dashboard.html'))
    // res.sendFile(__dirname + '/InfosAtendentes.html');
  }
})

routes.post('/chat', (req, res) => {
  console.log('path chat')
  console.log(req.body)
  return res.render('auth/chat.njk')
})

module.exports = routes
