# SHIFA Clinic Website - Secure Admin Dashboard

A comprehensive website for a non-profit clinic with a secure admin dashboard for content management.

## Features

### Public Website

- **Home Page**: Hero section, about, services, statistics, get involved, contact
- **Who We Are**: About section with team management
- **Services**: Service offerings with detailed information
- **Get Involved**: Volunteer opportunities and donation options
- **Resources**: Educational resources and recommended diets
- **Contact**: Contact form and information

### Secure Admin Dashboard

- **Authentication**: JWT-based login system with rate limiting
- **Statistics Management**: Edit website statistics in real-time
- **Volunteer Management**: Add, view, and delete volunteers with categories
- **Resource Management**: Add, view, and delete educational resources
- **Session Management**: 24-hour sessions with auto-refresh

## Security Features

### Authentication & Authorization

- **JWT Tokens**: Secure token-based authentication
- **Rate Limiting**: 5 login attempts per 15 minutes per IP
- **Session Management**: 24-hour sessions with automatic refresh
- **Protected Routes**: All admin endpoints require valid authentication
- **Secure Headers**: Authorization headers for all API requests

### Data Protection

- **Input Validation**: Server-side validation for all inputs
- **Error Handling**: Comprehensive error handling without exposing sensitive data
- **CORS Protection**: Configured CORS for secure cross-origin requests
- **MongoDB Security**: ObjectId validation and proper query sanitization

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**:

   ```bash
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start MongoDB** (if not already running):

   ```bash
   # On Windows
   mongod

   # On macOS/Linux
   sudo systemctl start mongod
   ```

4. **Start the backend server**:

   ```bash
   npm start
   # or for development with auto-restart
   npm run dev
   ```

   The server will run on `http://localhost:3536`

### Frontend Setup

1. **Navigate to frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The website will run on `http://localhost:3000`

## Admin Dashboard Access

### Login Credentials

- **Username**: `ShivaClinic2025`
- **Password**: `ShivaAdmin1432$`

### Access URL

- Navigate to `http://localhost:3000/dashboard`
- Enter the credentials above
- You'll be redirected to the dashboard upon successful login

## API Endpoints

### Authentication

- `POST /api/auth/login` - Login with username/password
- `POST /api/auth/verify` - Verify JWT token

### Statistics (Protected)

- `GET /api/statistics` - Fetch all statistics
- `PUT /api/statistics/update` - Update a statistic

### Volunteers (Protected)

- `GET /api/volunteers` - Fetch all volunteers
- `POST /api/volunteers` - Add new volunteer
- `PUT /api/volunteers/:id` - Update volunteer
- `DELETE /api/volunteers/:id` - Delete volunteer

### Resources (Protected)

- `GET /api/resources` - Fetch all resources
- `POST /api/resources` - Add new resource
- `PUT /api/resources/:id` - Update resource
- `DELETE /api/resources/:id` - Delete resource

## Database Collections

### Statistics

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Volunteers

```javascript
{
  _id: ObjectId,
  name: String,
  role: String,
  category: String,
  imageSrc: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Resources

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  link: String,
  imageSrc: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Security Best Practices Implemented

1. **JWT Secret**: Use environment variables in production
2. **Rate Limiting**: Prevents brute force attacks
3. **Input Validation**: Server-side validation for all inputs
4. **Error Handling**: Generic error messages to prevent information leakage
5. **Session Management**: Automatic session refresh and expiration
6. **CORS Configuration**: Secure cross-origin request handling
7. **MongoDB Security**: Proper ObjectId handling and query sanitization

## Production Deployment Considerations

1. **Environment Variables**: Move JWT secret to environment variables
2. **HTTPS**: Use HTTPS in production for secure data transmission
3. **Database Security**: Use MongoDB Atlas or secure database hosting
4. **Rate Limiting**: Consider using Redis for distributed rate limiting
5. **Logging**: Implement proper logging for security monitoring
6. **Backup**: Regular database backups
7. **Monitoring**: Set up monitoring for failed login attempts

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:

   - Ensure MongoDB is running on port 27017
   - Check if the database "shifa-clinic" exists

2. **Authentication Issues**:

   - Verify login credentials are correct
   - Check if JWT token is being sent in headers
   - Clear browser localStorage if session issues persist

3. **CORS Errors**:

   - Ensure backend is running on port 3536
   - Check CORS configuration in server.js

4. **Port Conflicts**:
   - Backend: Change PORT in server.js if 3536 is in use
   - Frontend: Change port in next.config.js if 3000 is in use

## Support

For technical support or questions about the admin dashboard, please contact the development team.

---

**Note**: This is a development setup. For production deployment, additional security measures and environment-specific configurations are required.
