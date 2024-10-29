
# SOCIAL NETWORK API
## Description
The Social Network API is a back-end application built for a social networking platform where users can share thoughts, react to friends' thoughts, and manage a friend list. Built with Node.js, Express, MongoDB, and Mongoose, this API is designed to handle large volumes of unstructured data efficiently, leveraging the flexibility and scalability of a NoSQL database.

This application allows users to create, update, and delete thoughts, reactions, and friends and can be tested with tools like Insomnia for simulating API requests. The API uses various routes to support CRUD operations on users, thoughts, and reactions.

# Table of Contents
-**-Technologies Used**
- **User Registration**

- **Usage** 

-**API Endpoints**
-**user Routes**
-**Friend Routes**
-**Thought Routes**
-**Reaction Routes**
-**Walkthrough Video**

-**License**
-**Installation**

 # Clone the repository:

bash
Copy code
git clone https://github.com/your-username/social-network-api.git
Navigate to the project directory:

bash
Copy code
cd social-network-api

**Install dependencies**

bash
Copy code
npm install
**Configure MongoDB**: 
Ensure MongoDB is running locally. You can install and run MongoDB and test using MongoDB compass.


* Start the server:

bash
Copy code
npm start


**The server will start on http://localhost:3001 by default.**

## Usage
Use Insomnia to test the routes provided in this API. You can create, read, update, and delete users, thoughts, reactions, and friends through various endpoints.

Example of Starting the Application
To start the application, use the following command:

bash
Copy code
npm start
**API Endpoints**  
* User Routes
* GET /api/users - Retrieve all users.
* GET /api/users/:userId - Retrieve a user by ID.
* POST /api/users - Create a new user.
  ```json
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  }
  ```
* PUT /api/users/:userId - Update a user by ID.
*DELETE /api/users/:userId - Delete a user by ID, along with their associated thoughts.
**Friend Routes**
* POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list.
* DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list.

**Thought Routes**
* GET /api/thoughts - Retrieve all thoughts.
* GET /api/thoughts/:thoughtId - Retrieve a thought by ID.
* POST /api/thoughts - Create a new thought.

  ```json
  // example data
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```
  * PUT /api/thoughts/:thoughtId - Update a thought by ID.
* DELETE /api/thoughts/:thoughtId - Delete a thought by ID.
**Reaction Routes** 

* POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought.
* DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction by ID.


## Walkthrough Video
Walkthrough Video
The video demonstrates:

Starting the server
Testing each endpoint (CRUD operations for users, thoughts, reactions, and friends)
Managing friend lists and reactions
Technologies Used
Node.js
Express.js
MongoDB
Mongoose
JavaScript

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Git Repo link
https://github.com/lekshmiarung/mongodb-challenge
