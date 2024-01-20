const app = require('express')
const res = app()

res.get('/gadgets', (request, response) => {
  response.sendFile('./gadgets.html', {root: __dirname})
})
//res.listen(3000)
module.exports = res
