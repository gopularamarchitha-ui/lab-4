
const Database = require("better-sqlite3");

// Connect to SQLite database
const db = new Database("users.db");

// Create users table
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        password TEXT NOT NULL
    )
`);

console.log("Database connected successfully!");

module.exports = db;
