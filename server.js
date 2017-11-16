const express = require('express')
const app = express()

app.use(express.static('dist'))
app.listen(process.env.PORT, () => console.log('Application started on port' + process.env.PORT))