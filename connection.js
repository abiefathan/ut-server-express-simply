const mysql = require(`mysql`)

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ut"
})

module.exports = db