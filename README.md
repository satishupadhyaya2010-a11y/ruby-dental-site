# Monorepo Structure for Ruby Dental Site

This repository follows a monorepo structure that combines a Rails backend and a React frontend. Below is an overview of the directory structure and instructions on how to run both applications.

## Directory Structure

```
/ruby-dental-site
├── /backend           # Rails backend
│   ├── app           # Contains the main application code
│   ├── config        # Configuration files for Rails
│   ├── db           # Database configuration and migrations
│   └── ...          # Other Rails directories
│
├── /frontend         # React frontend
│   ├── public        # Public assets
│   ├── src           # Application source code
│   └── ...          # Other React directories
└── README.md         # This file
```

## Running the Applications

### Rails Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install gem dependencies:
   ```bash
   bundle install
   ```
3. Setup the database:
   ```bash
   rails db:create db:migrate
   ```
4. Start the Rails server:
   ```bash
   rails server
   ```
   The Rails backend should now be running at [http://localhost:3000](http://localhost:3000).

### React Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```
   The React frontend should now be running at [http://localhost:3001](http://localhost:3001).

## Conclusion
This monorepo structure allows you to develop both the backend and frontend in a cohesive environment. For any further questions, please refer to the individual documentation within each directory.