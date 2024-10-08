const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require(`./connection`)
const response = require(`./response`)
const cors = require("cors")




app.use(cors());
app.use(bodyParser.json())





app.get('/', (req, res) => {
  const sql ="SELECT * FROM `produk`"

  db.query(sql, (err, result) => {
    //hasil data dari API
   response(200,result, "get all data from produk",res)
  })

})
app.get('/seles', (req, res) => {
  const sql ="SELECT * FROM `seles`"

  db.query(sql, (err, result) => {
    //hasil data dari API
   response(200,result, "get all data from seles",res)
  })

})

// app.get('/', (req, res) => {
 
//   console.log("nemuin data id",req.query.id)

//   const sql =`SELECT * FROM users WHERE id = ${req.query.id} `
//   db.query(sql,(err,result)=>{
//     console.log(response(200,result, "fund users ",res))
//   })
  
// })
app.put('/', (req, res) => {
  
  console.log({ PutFromBody: req.body })
  res.send(`put body`)

})


app.post('/', (req, res) => {
  const postProduct = "INSERT INTO `produk` (`id_produk`,`nama_produk`) VALUES (null, 'Nama Produk')";

  console.log({ requestFromOutside: req.body })
  res.send('postberhasil',req.body)
})

app.delete('/', (req, res) => {
  console.log({ requestFromOutside: req.body })
  res.send('delete berhasil')
})











app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})