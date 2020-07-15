import * as path from 'path'
import express from 'express'
import appRoot from 'app-root-path'
import history from 'connect-history-api-fallback'
import * as dotenv from 'dotenv'
// dotenv.config({ path: path.join(__dirname, '../server/.env') })
dotenv.config({ path: path.join(appRoot.path, '.env') })

const { port = '3000' }: { port: string } = process.env

const app = express()
const staticFileMiddleware = express.static(path.join(__dirname, `../client`))
app.use(history({
  disableDotRule: true,
  verbose: true
})) // https://github.com/bripkens/connect-history-api-fallback
app.use(staticFileMiddleware)
console.log(``)
// app.get('/', (req, res) => res.send(`Hello!`))
// console.log(`${path.join(__dirname, `../client/index.html`)}`)
app.get('/', (req, res) => res.sendFile(path.join(__dirname, `../client/index.html`)))

app.listen(Number(port), () => console.log(`http://localhost:${port}`))
