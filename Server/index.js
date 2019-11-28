const express = require('express')
require('dotenv').config()
require('express-group-routes')

app = express()
app.use(express.json())

const { auth } = require('./middleware')
const Authcontroller = require('./controller/LoginController')
const Pasiencontroller = require('./controller/PasienController')


// Endpoint API
app.group('/api', (router) => {

    // Pengetestan Endpoint
    router.get('/', (req, res) => {
        res.status(200).json("Ok")
    })

    router.post('/login', Authcontroller.login)
    router.post('/pasien/add', auth, Pasiencontroller.storePasien)
    router.get('/pasiens', auth, Pasiencontroller.showPasien)
    router.get('/pasien/:pasienId', auth, Pasiencontroller.showDetailPasien)
})

app.listen(process.env.PORT, () => {console.log(`app running on port ${process.env.PORT}`)})