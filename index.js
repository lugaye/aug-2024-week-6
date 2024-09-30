const express = require('express')
const db = require('./database')

const app = express();

const port = 3500;


//performing CRUD operations
//CREATE
//READ - SELECT Statement
//UPDATE - UPDATE Statement
//DELETE - DELETE Statement


app.get('/createTable', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating users table:', err)
            return response.status(500).send('Error creating users table')
        }

        res.send('users table created succcessfully.')
    })
})

app.get('/createUser', (req, res) => {
    const sql = `
    INSERT INTO users (name, email) VALUES ('Eddy', 'eddy@powerlearnprojectafrica.org')
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating user record:', err)
            return response.status(500).send('Error creating user record')
        }

        res.send('users record created succcessfully.')
    })
})

app.get('/', (req, res) => {
    res.status(200).send('Hello, you are now using the express package.')
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
