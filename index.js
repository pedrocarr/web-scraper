const PORT = 8000
const axios = require ('axios')
const cheerio = require ('cheerio')
const express = require ('express')

const app = express();

app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}!!!`))

const url = 'https://www.theguardian.com/international'

axios(url)
    .then(response => {
        const html = response.data
        console.log(html)
    })