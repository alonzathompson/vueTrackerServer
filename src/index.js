const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config')
const {sequelize} = require('./models')

const app = express()
// const port = process.env.PORT || 4000

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes/routes')(app)

sequelize.sync()
  .then(
    app.listen(config.port, () => {
      console.log(`I fucking here you on ${config.port}`)
    })
  )
