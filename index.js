const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
dotenv.config()

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// STATIC
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

// ROUTES
app.get('/', (req, res) => res.render('index', { title: 'Home - Portfolio Site' }))
app.get('/*', (req, res) => res.redirect('/'))

const PORT = process.env.SERVER_PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))