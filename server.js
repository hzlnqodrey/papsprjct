// Reference Learning [https://youtu.be/HgpCjChgjoQ]
const express = require('express')
const path = require('path')

const app = express()

// Send Index HTML to requester
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname) + '/views/index.html')
})

// Serving static files in Express || References: [https://expressjs.com/en/starter/static-files.html]
app.use(express.static('views'))

// PORT
const PORT = process.env.PORT || 8080

// App listen to this port and run the server
app.listen(PORT, _ => {
    console.log(`App deployed at Port ${PORT}`)
})