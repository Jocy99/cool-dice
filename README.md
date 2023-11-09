# Dice Game - README

## Overview
This is a web-based dice game application that allows users to log in and compete with the computer to roll two dice, aiming to achieve the highest possible rolled number. The game keeps track of user wins and losses, saving this information in a MongoDB database. This README provides information on how to set up, run, and use the application.

### Features
- User registration and authentication using JWT.
- A fun dice game where users compete against the computer.
- Database storage of user game results.

## Technologies Used
- React for the front end.
- GraphQL API with a Node.js and Express.js server for the backend.
- MongoDB as the database, utilizing the Mongoose ODM.
- Sensitive API key information is protected on the server.
- User authentication using JWT (JSON Web Tokens).

## Installation and Setup
Follow these steps to set up the project on your local machine:

1. **Clone the Repository:**
`git clone https://github.com/Jocy99/cool-dice.git`
`cd cool-dice`

2. **Install Dependencies:** 
`cd server`
`npm install`
`cd ../client`
`npm install`

3. **Environment Variables:**
- Create a `.env` file in the `server` directory to store sensitive data like API keys and MongoDB connection string. Refer to `.env.example` for the required variables.

4. **Start the Server and Client:**
- In the `server` directory, run:
  ```
  npm start
  ```
- In the `client` directory, run:
  ```
  npm start
  ```

5. **Access the Application:**
Open your web browser and go to `http://localhost:3001` to access the application.

## Usage
1. **Registration:**
- If you are a new user, click on the "Register" link to create a new account.

2. **Login:**
- Log in using your credentials on the login page.

3. **Playing the Game:**
- After logging in, you can play the dice game. Roll two dice and compete with the computer.

4. **Game Results:**
- The results of your game will be recorded and saved in the database. You can view your win-loss record in your user profile.

## API Endpoints
- The GraphQL API exposes endpoints for retrieving user data, game results, and more.

## Folder Structure
- `server`: Contains the Node.js and Express.js server code.
- `client`: Contains the React front-end code.
- `database`: Includes the MongoDB database schema and models.

## Contributing
- We welcome contributions to improve and expand the functionality of this dice game project. Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the GNU v3 license. 

citations:

backdrop file for the homepage
https://www.flickr.com/photos/100308402@N06/35746407061
