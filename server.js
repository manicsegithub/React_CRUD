//Basic Setup
import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json()); //we can pass the data into database by using json format

app.listen(8081, ()=> {
    console.log("Listening...!");
})

//Check if connect or not 
// app.get('/', (req,res) => {
//     return res.json("Connected...!");
// })

//Connect the Database 

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "mysqlroot",
    database : "react_crud"
})

//Get the data from database 
app.get("/", (req,res) => {
    //return res.json("Hello Mani");
    const sql = "SELECT * from users";
    db.query(sql, (err,result) => {
        if(err) return res.json({Message : "Error inside the server"});
        return res.json(result);
    })
})

//Post the data to database
app.post('/users', (req, res) => {
    const sql = "INSERT INTO users (`name`, `email_id`, `phone_number`) VALUE (?)";
    console.log(req.body);
    const values = [
        req.body.name,
        req.body.email_id,
        req.body.phone_number
    ]
    db.query(sql, [values], (err,result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

//Read the Data 
app.get("/read/:id", (req,res) => {
    //return res.json("Hello Mani");
    const sql = "SELECT * from users WHERE id = ?";
    const id = req.params.id;
    db.query(sql,[id], (err,result) => {
        if(err) return res.json({Message : "Error inside the server"});
        return res.json(result);
    })
})

//Update the Data
app.put("/update/:id", (req, res) => {
    const sql = "UPDATE users SET `name` = ?, `email_id` = ?, `phone_number` = ? WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.email_id, req.body.phone_number, id],
        (err, result) => {
            if(err) return res.json({Message: "Error inside server"});
            return res.json(result);
        }
    )
})

//Delete the Users Element
app.delete("/delete/:id", (req,res) => {
    const sql = "DELETE FROM users where id = ?";
    const id = req.params.id;
    db.query(sql, [id],(err,result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

