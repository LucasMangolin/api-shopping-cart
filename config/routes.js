const express = require('express')
const routes = express.Router()

module.exports = routes

let db = [
    {   '1': { Produto: 'Produto 1', Quantidade: '20'}},
    {   '2': { Produto: 'Produto 2', Quantidade: '10'}},
    {   '3': { Produto: 'Produto 3', Quantidade: '25'}}
]
//buscar dados
routes.get('/', (req, res) => {
    return res.json(db)
})

//inserirdados 
routes.post('/addProduct', (req, res) => {
    const body = req.body

    if (!body)
      return res.status(400).end()

      db.push(body)
      return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
        return item
    })

    db = newDB

    return res.send(newDB)
})