# nevo.to api documentation

## Auth API:

**Key Features - <br>**
1. Roles - User/Admin (Admin controls whole data/app & User can only post reviews/comments only)
2. Email and Password JWT Auth
3. Email verification
4. Password reset

**User Model -**
```js
{
  username: String,
  email: String,
  password: String<encrypted>,
  role: String<User|Admin>,
  userCreatedAt: Date,
  lastLoginAt: Date
}
```

**API Design -**

1. POST `/api/auth/signup` <br>
   - Request:
     - `{ username, email, password }`
     - No Auth Header 
   - Response:
     - `success object`
     - `user | server error object`