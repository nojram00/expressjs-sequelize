const express = require('express')
const app = express()
const cors = require('cors')
const port = 3002

app.use(cors())
app.use(express.json())

const UserRouter = require('./routes/user')

app.get('/', async (req, res) => {
    res.json({sample: "sample"})
})

app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
