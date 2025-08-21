# Authentication Setup Test Plan

## Prerequisites
- MongoDB running on localhost:27017
- Server running on port 3000
- Web app running on port 3001

## Test Steps

### 1. Test User Registration
```bash
# Test password validation
curl -X POST http://localhost:3000/api/auth/signup/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "weak",
    "name": "Test User"
  }'
# Should return 400 with password validation error

# Test successful registration
curl -X POST http://localhost:3000/api/auth/signup/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "StrongPass123",
    "name": "Test User"
  }'
# Should return 200 with user data
```

### 2. Test User Login
```bash
# Test invalid credentials
curl -X POST http://localhost:3000/api/auth/signin/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "wrongpassword"
  }'
# Should return 401

# Test successful login
curl -X POST http://localhost:3000/api/auth/signin/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "StrongPass123"
  }'
# Should return 200 with session cookies
```

### 3. Test Account Lockout
```bash
# Attempt login with wrong password 5 times
for i in {1..5}; do
  curl -X POST http://localhost:3000/api/auth/signin/email \
    -H "Content-Type: application/json" \
    -d '{
      "email": "test@example.com",
      "password": "wrongpassword$i"
    }'
  echo "Attempt $i"
done
# After 5 attempts, should return 423 (Locked)
```

### 4. Test Protected Routes
```bash
# Try to access protected route without authentication
curl http://localhost:3000/trpc/privateData

# Access with valid session cookies (from successful login)
curl http://localhost:3000/trpc/privateData \
  -H "Cookie: session-token=YOUR_SESSION_TOKEN"
```

### 5. Test Logout
```bash
curl -X POST http://localhost:3000/api/auth/signout \
  -H "Cookie: session-token=YOUR_SESSION_TOKEN"
```

## Web UI Tests
1. Open http://localhost:3001/signup
2. Test password validation UI
3. Complete registration
4. Login with created account
5. Verify dashboard access
6. Test logout functionality
7. Verify redirect to login when accessing protected routes

## Expected Results
- ✅ User registration with password validation
- ✅ Successful login with JWT tokens
- ✅ Account lockout after 5 failed attempts
- ✅ Protected routes require authentication
- ✅ Proper error handling and user feedback
- ✅ Session management and logout functionality