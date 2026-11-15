# Lab 4 – User Registration, Login and JWT Authentication

## Student Details

- **Name:** G. Architha
- **Registration Number:** 252U1R6084
- **Section:** AIML-2B

## Project Description

This project implements user registration and login using Node.js, Express.js, SQLite, bcrypt and JSON Web Tokens (JWT).

Users can register with a username, name and password. Passwords are hashed using bcrypt before being stored in the database. During login, the entered password is compared with the stored password hash. If the credentials are valid, a JWT is generated and returned to the user.

## Technologies Used

- Node.js
- Express.js
- SQLite
- better-sqlite3
- bcrypt
- jsonwebtoken
- Postman
- Render

## Project Structure

```text
lab-04/
├── Screenshots/
│   ├── Invalid-password...
│   ├── jwt-decoded.png
│   ├── login-success-JWT...
│   ├── register-success-20...
│   ├── User_already_exists...
│   └── User-not-found.png
├── database.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

The screenshot filenames are kept unchanged.

The `users.db` database file is generated automatically when the application runs.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/gopularamarchitha-ui/lab-4.git
   ```

2. Navigate to the project folder:

   ```bash
   cd lab-4
   ```

3. Install the required packages:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. The application runs locally at:

   ```text
   http://localhost:3000
   ```

## API Endpoints

### 1. User Registration

- **Method:** POST
- **Endpoint:** `/register/`
- **Local URL:** `http://localhost:3000/register/`
- **Deployed URL:** `https://lab-4-2blt.onrender.com/register/`

**Request Body:**

```json
{
  "username": "architha",
  "name": "Architha",
  "password": "architha123"
}
```

**Successful Response:**

```json
{
  "message": "User registered successfully"
}
```

If the username already exists, the API returns status code `400`.

### 2. User Login

- **Method:** POST
- **Endpoint:** `/login/`
- **Local URL:** `http://localhost:3000/login/`
- **Deployed URL:** `https://lab-4-2blt.onrender.com/login/`

**Request Body:**

```json
{
  "username": "architha",
  "password": "architha123"
}
```

**Successful Response:**

```json
{
  "jwt_token": "generated_jwt_token"
}
```

If the username or password is incorrect, the API returns an error response with status code `400`.

## Security Features

- Passwords are hashed using bcrypt before storing them in the database.
- Password verification is performed using `bcrypt.compare()`.
- JWT tokens are generated using `jsonwebtoken`.
- The JWT payload contains the username.
- Parameterized SQL queries are used to prevent SQL injection.

## JWT Token Verification

The generated JWT was decoded using [jwt.io](https://jwt.io).

The token contains:

- **Header:** Specifies the signing algorithm and token type.
- **Payload:** Contains the username and automatically generated issued-at timestamp.
- **Signature:** Used to verify the token using the configured secret.

## Screenshots

The `Screenshots` folder contains screenshots demonstrating:

1. Successful user registration
2. Duplicate username registration
3. Successful login with JWT token
4. Login with an incorrect password
5. Login with an unknown username
6. Decoded JWT token on jwt.io

## Deployment

The application is deployed using Render.

**Live Deployment URL:**

https://lab-4-2blt.onrender.com

**Registration API:**

https://lab-4-2blt.onrender.com/register/

**Login API:**

https://lab-4-2blt.onrender.com/login/

The APIs accept POST requests and can be tested using Postman.

## Conclusion

This lab demonstrates user registration, secure password hashing, login verification and JWT generation using Node.js and Express.js. It also provides practical experience in database operations, API testing using Postman and deploying a backend application using Render.
