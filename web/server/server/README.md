# Authentication Backend Server

A Node.js/Express backend server with user authentication (registration and login).

## Features

- ✅ User Registration
- ✅ User Login
- ✅ Password Hashing (bcrypt)
- ✅ JWT Authentication
- ✅ CORS Configured
- ✅ MongoDB Database
- ✅ Input Validation
- ✅ Error Handling

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Install MongoDB

**Option A: Local MongoDB**
- Download and install MongoDB Community Server from: https://www.mongodb.com/try/download/community
- Start MongoDB service

**Option B: MongoDB Atlas (Cloud - Recommended for beginners)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a free cluster
4. Get your connection string
5. Replace `MONGODB_URI` in `.env` file with your connection string

### 3. Configure Environment Variables

The `.env` file is already created. You can modify it if needed:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

**Important:** Change `JWT_SECRET` to a random secure string in production!

### 4. Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### Register User
- **URL:** `POST /api/auth/register`
- **Body:**
  ```json
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }
  ```
- **Success Response:** 201 Created
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "username": "john_doe",
      "email": "john@example.com"
    }
  }
  ```

### Login User
- **URL:** `POST /api/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response:** 200 OK
  ```json
  {
    "success": true,
    "message": "Login successful",
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "username": "john_doe",
      "email": "john@example.com"
    }
  }
  ```

## Testing the API

You can test the API using:
- **Postman:** https://www.postman.com/
- **Thunder Client:** VS Code extension
- **curl:** Command line tool

Example curl request:
```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }'
```

## Project Structure

```
server/
├── models/
│   └── User.js          # User database model
├── routes/
│   └── auth.js          # Authentication routes
├── .env                 # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # Dependencies
├── server.js           # Main server file
└── README.md           # This file
```

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is installed and running
- Check if the `MONGODB_URI` in `.env` is correct
- For MongoDB Atlas, make sure to whitelist your IP address

### Port Already in Use
- Change the `PORT` in `.env` file to a different port (e.g., 3002)

### CORS Error
- Make sure the frontend is running on `http://localhost:3000`
- If using a different port, update the CORS origin in `server.js`

## Security Notes

- Never commit `.env` file to version control
- Change `JWT_SECRET` to a secure random string in production
- Use HTTPS in production
- Implement rate limiting for production
- Add input sanitization for production
