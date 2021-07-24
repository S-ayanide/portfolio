require('dotenv/config')
const request = require('request')
const express = require('express')

const app = express()
const port = process.env.PORT || 8080

const options = {
  url: 'https://dev.to/api/articles/me/published',
  headers: {
    'api-key': process.env.REACT_APP_DEVTO_API_KEY,
  },
}

app.get('/api/blogs', (req, res) => {
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body)
      res.send(info)
    }
  })
})

app.get('/api/blogs/:numberOfBlogs', (req, res) => {
  let queryString = `?page=1&per_page=${req.params.numberOfBlogs}`
  request(
    {
      url: `https://dev.to/api/articles/me/published${queryString}`,
      headers: {
        'api-key': process.env.REACT_APP_DEVTO_API_KEY,
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const info = JSON.parse(body)
        res.send(info)
      }
    }
  )
})

// eslint-disable-next-line
app.listen(port, () => console.info(`Listening on port ${port}`))
