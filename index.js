const Server = require('./src/server')

const port = 3003

console.objClientOn = []
console.objEmployeeOn = []
console.objEmployeePw = []

console.objEmployeePw.push({
  id: 0,
  nome: 'alisson',
  pass: 'chat2019',
  email: 'alisson@chat.com.br'
})
console.objEmployeePw.push({
  id: 1,
  nome: 'chat',
  pass: 'chat2019',
  email: 'chat01@chat.com.br'
})
console.objEmployeePw.push({
  id: 2,
  nome: 'teste',
  pass: 'chat2019',
  email: 'teste@chat.com.br'
})

Server.listen(port)

console.log(`Servidor Iniciado na porta ${port}`)
// console.log(Server)
