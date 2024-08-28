# Authentication Backend 🔐

A scalable authentication backend built with Express, Mongoose, and TypeScript. This project includes email/password authentication, Google OAuth, and Google One Tap functionality.

## Features ✨

- **Email/Password Authentication**: Secure login and registration with JWT and HTTP-only cookies.
- **Google OAuth**: Sign in with Google account.
- **Google One Tap**: Streamlined authentication with Google One Tap.
- **Scalable Folder Structure**: Easily extendable for future authentication methods (e.g., Microsoft login).

## Installation 🚀

1. **Install `pnpm` globally**:

   ```bash
   
   npm install -g pnpm

2. **Clone the repository**:
 
   ```bash
   
   git clone git@github.com:UtkarshSinghChouhan/Auth-Backend.git
   cd auth-backend
   
3. **Install dependencies using `pnpm`**:
 
   ```bash
   
   pnpm install
   
4. **Create a `.env` file in the root directory based on the provided `.env.example` file and add your environment variables.**

## Usage 🎉

1. **Run the application locally**:
   
   ```bash
   pnpm dev


## Authentication Endpoints 🔐

Here are the available authentication endpoints for the API:

### Sign Up

- **Method:** POST
- **Endpoint:** `/api/auth/signup`
- **Body:**

  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  
### Login

- **Method:** POST
- **Endpoint:** `/api/auth/login`
- **Body:**

  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
### Logout

- **Method:** Get
- **Endpoint:** `/api/auth/logout`



## Contributing 🤝

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the repository
2. Create a new branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -am 'Add new feature'
4. Push to the branch: git push origin feature/your-feature
5. Create a new Pull Request
