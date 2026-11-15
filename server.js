
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./database");

const app = express();

app.use(express.json());

// JWT secret key
const JWT_SECRET = "my_lab4_secret_key";


app.post("/register/", async (req, res) => {
    try {
        const { username, name, password } = req.body;

   
        if (!username || !name || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

  
        const existingUser = db.prepare(
            "SELECT * FROM users WHERE username = ?"
        ).get(username);

        if (existingUser) {
            return res.status(400).json({
                message: "Username already exists"
            });
        }

    
        const hashedPassword = await bcrypt.hash(password, 10);

    
        db.prepare(
            "INSERT INTO users (username, name, password) VALUES (?, ?, ?)"
        ).run(username, name, hashedPassword);

        return res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});


app.post("/login/", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = db.prepare(
            "SELECT * FROM users WHERE username = ?"
        ).get(username);

     
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        
        const token = jwt.sign(
            { username: user.username },
            JWT_SECRET
        );

        return res.status(200).json({
            jwt_token: token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
