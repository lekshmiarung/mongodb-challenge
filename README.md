
# SOCIAL NETWORK API

## Description
The Social Network API is a back-end application built for a social networking platform where users can share thoughts, react to friends' thoughts, and manage a friend list. Built with Node.js, Express, MongoDB, and Mongoose, this API is designed to handle large volumes of unstructured data efficiently, leveraging the flexibility and scalability of a NoSQL database.

This application allows users to create, update, and delete thoughts, reactions, and friends and can be tested with tools like Insomnia for simulating API requests. The API uses various routes to support CRUD operations on users, thoughts, and reactions.

# Table of Contents

-*Usage*

-*Technologies Used*

-*API Endpoints*

-*user Routes*

-*Friend Routes*

-*Thought Routes*

-*Reaction Routes*

-*Walkthrough Video*

-*License*

-*Installation*


# Technologies used
* Node.js
* Express.js
* MongoDB
* Mongoose
* JavaScript/typescript


 # Clone the repository:

bash
```
git clone https://github.com/your-username/mongodb-challenge
```



# Navigate to the project directory:
```
cd mongodb-challenge
```

# Install dependencies 

bash
```
npm install
```

**Configure MongoDB**: 
Ensure MongoDB is running locally. You can install and run MongoDB and test using MongoDB compass.


# Start the server:
```
npm start
```

* 
**The server will start on http://localhost:3001 by default.**

**Usage**

  * Use Insomnia to test the routes provided in this API. You can create, read, update, and delete users, thoughts, reactions, and friends through various endpoints.

* Testing each endpoint (CRUD operations for users, thoughts, reactions, and friends)
Managing friend lists and reactions

To start the application, use the following command:

**To build the typescript**
```
npm run  build
```

**start the application
```
npm run start
```
**API Endpoints**  
The API will be available at http://localhost:3001.

**User Routes**
* GET /users - Retrieve all users.
* GET /users/:userId - Retrieve a user by ID.
* POST /users - Create a new user.
  ```json
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  }
  ```
* PUT /users/:userId - Update a user by ID.
* DELETE /users/:userId - Delete a user by ID, along with their associated thoughts.

**Friend Routes**
* POST /users/:userId/friends/:friendId - Add a friend to a user's friend list.
* DELETE/users/:userId/friends/:friendId - Remove a friend from a user's friend list.

**Thought Routes**
* GET /thoughts - Retrieve all thoughts.
* GET /thoughts/:thoughtId - Retrieve a thought by ID.
* POST /thoughts - Create a new thought.

  ```json
  // example data
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```
* PUT /thoughts/:thoughtId - Update a thought by ID.
* DELETE /thoughts/:thoughtId - Delete a thought by ID.


**Reaction Routes** 

* POST /thoughts/:thoughtId/reactions - Add a reaction to a thought.
* DELETE /thoughts/:thoughtId/reactions/:reactionId - Remove a reaction by ID.


## Walkthrough Video
Walkthrough Video
https://app.screencastify.com/v3/watch/jT7oHTCft6b9ewxJtSd1


## Git Repo link
https://github.com/lekshmiarung/mongodb-challenge


## License
This project is licensed under the MIT License. See the LICENSE file for more information.