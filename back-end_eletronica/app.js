import express from 'express'
const app = express()
const port = 4000

import routes from './routes.js'

app.use(routes)


app.use("/foto", express.static('./foto'))

app.get('/', (req, res) => {
  res.send('Eletrônica Avenida')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})