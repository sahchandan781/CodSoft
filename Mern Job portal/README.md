# MERN Job Portal

## Overview
This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) for creating a job portal. It allows users to browse job listings, apply for jobs, and for administrators to manage job postings.

## Features
- **Job Listings:** Browse through available job listings.
- **Job Search:** Search for specific job titles or keywords.
- **User Authentication:** Users can register, login, and manage their profiles.
- **Apply for Jobs:** Users can apply for job listings they are interested in.
- **Admin Panel:** Administrators have access to manage job listings, review applications, and perform CRUD operations on jobs.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sahchandan781/CodSoft.git
   cd CodSoft/Mern\ Job\ portal

2. Install dependencies for both client and server:

bash
   
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install


3. Set up MongoDB:

   Make sure MongoDB is installed and running on your local machine.
   Update the MongoDB URI in server/config/config.js.


4. Run the application:

bash

# Run server

cd ../server

npm start

# Run client

cd ../client

npm start

The client should now be running at http://localhost:3000 and the server at http://localhost:5000.

Usage

User Registration/Login: Users can register for an account or log in if they already have one.
Job Listings: Browse through available job listings. Use the search functionality to find specific jobs.
Apply for Jobs: Users can apply for job listings they are interested in by submitting their application.
Admin Panel: Administrators can log in to access the admin panel. Here, they can manage job listings, review applications, and perform CRUD operations on jobs.

Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or create a pull request.



