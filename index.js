const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

const courses = require('./data/course-details.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Build your web server running')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})



app.listen(port, () => {
    console.log('Server running on 5000 port')
})