//import package
const mysql = require('mysql2')

//create connection to DBMS
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'node_crud'
})

//connect
db.connect( (err) => {
    if(err){
        console.log('Error connecting to DB: ', err.stack)
        return;
    }

    console.log('Successfully connected to DB')
})

//export the connection
module.exports = db
