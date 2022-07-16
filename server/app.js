const express = require("express")
const router = require("./routes")

const app = express()

// app.get('/api', (req, res) => {
//   res.send('rbac')
// })

app.use('/api', router)

app.listen(3001, () => {
  console.log('running at http://localhost:3001/')
})