const path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: path.join(__dirname, '.env') })

const port = process.env.port || 3000

app.get('/', (req, res) => res.send(`Hell23o!`))

app.listen(port, () => console.log(`http://localhost:${port}`))
