const express = require('express')
const faker = require('faker')
const APP = express()
const APP_PORT = process.env.APP_PORT || 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const mysql = require('mysql')

const connection = mysql.createConnection(config)

APP.get('/', (req, res) => {
  const randomName = faker.name.findName()

  connection.query(`INSERT INTO people (nome) VALUES ('${randomName}')`)

  connection.query(`SELECT nome FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results?.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
      </ol>
    `)
  })
})

APP.listen(APP_PORT, () => {
  console.log('Rodando na porta :', APP_PORT);
})