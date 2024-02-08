# LitQuest
### by the group NovelCoders

    This project was changed from a 1000 book recommendation to a sort of a library/bookshelf, for the user to keep track of books that they want to read, or have already read.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See Deployment for a link to where the app is currently running.

## Prerequisites
To run this, you need to run the following Node.js packages, if they're not installed already:
On the frontend folder, you need to install:
`npm install axios react-bootstrap bootstrap cors express mongoose react react-dom react-router-dom react-scripts web-vitals'

On the backend folder, you need to install:
`npm install axios cors dotenv express mongodb mongoose`

## Installing
To get this project running, you will first to start, and connect, the mongoDB, by whichever means you usually do, and you will need 2 console/bash teminals. On the first one, if you are in the root folder for the project, you need to first go to the backend folder by typing
`cd backend`

followed by:
`npx nodemon server.js`

After that, on the second terminal/bash window, from the root folder you need to go to the frontend folder by typing
`cd frontend`

followed by:
`npm start`

at this point, you should have the the server.js connected to the database, and the npm start running the app.

## How to use this app
Using this app is straight forward, and simple:
    Click on "Book Search" to look for books
        Enter a search term and either hit enter or click search
        Click on the book that interests you
        If there is a description, at the end of the description, if you like, click add to bookshelf
    Or click on "My Bookshelf" to view the books already added to the bookshelf

## Running the tests

## End-to-end tests

## Coding style test

## Deployment
This project is currently deployed at:

## Build With
This project was build using Javascript, React, React-Bootstrap

## Authors
### The members of team NovelCoders
#### Roxanna Vazquez
Project Manager, Frontend, UI/UX Specialist, Snapshot Tester

#### Kolby Kiernan
Project Coordinator, Backend

#### Jacob Daley
Agile Workflow Manager, Frontend

#### Francisco Gutierrez
Documentation Specialist, Backend

## Acknowledgments
This project wouldn't be possible without the knowledge gained from the ThriveX Bootcamp, and some help from AI like chatGPT to check our work.

## Post-MVP Plans
    Possibly adding recommendations based on what the user has in their libraries
    Eventually adding 1000 books that the user should read in their life based on their library

## Project Planning

| Date | Activities | Goals |
|------|------------|-------|
| Sat. 2/3 | Discuss project guidelines and resources; teams choose roles and team project specs; set up project repo; git team workflow demo and practice; team management app selection and feature brainstorm | - |
| Mon. 2/5 | Meet in main room for a few minutes then hold standup meetings in breakout rooms; Work day in class | - |
| Wed. 2/7 | Meet in main room for a few minutes then hold standup meetings in breakout rooms; Discuss deployment possibilities and begin preparation for it; Work day in class | - |
| Sat. 2/10 | Meet in main room for a few minutes then hold standup meetings in breakout rooms; Work day in class; end of Sprint 1 (development) | - |
| Mon. 2/12 | Final standup meeting; start/complete Sprint 2 (finalization); Your project should be deployed and all features contained in the app should work to satisfy all project requirements as shown on Canvas (and the adapted requirements shown in your team's Project Plan doc) | - |
| Wed. 2/14 | Meet in main room then hold final standup meetings in breakout rooms; submit your completed project and project requirements checklist on your team's Project Plan Doc; Present your project according to plan as discussed on Canvas and in class; hold Sprint 2 retrospective | - |


## API Endpoints

This document outlines the API endpoints provided by our server for managing books in a bookshelf.

### Search Books

- **GET /api/search**
  - Description: Search for books via the Google Books API.
  - Query Params: `query` (string) - The search query term or phrase.
  - Response: A JSON array of books, each with a title and description.
  - Example: `GET /api/search?query=Harry+Potter`

### Bookshelf Operations

#### Add a Book

- **POST /bookshelf/add**
  - Description: Add a new book to the bookshelf.
  - Body: A JSON object containing the book details (`title`, `description`, etc.).
  - Response: A JSON object of the added book.
  - Example:
    ```json
    POST /bookshelf/add
    {
      "title": "The Hobbit",
      "description": "A fantasy novel by J.R.R. Tolkien."
    }
    ```

#### Update Read Status

- **PUT /bookshelf/update/:id**
  - Description: Update the read status of a book in the bookshelf.
  - Params: `id` (string) - The ID of the book to update.
  - Body: A JSON object containing the new read status (`readStatus`).
  - Response: A JSON object of the updated book.
  - Example:
    ```json
    PUT /bookshelf/update/123456789
    {
      "readStatus": true
    }
    ```

#### Get All Books

- **GET /bookshelf/all**
  - Description: Retrieve all books from the bookshelf.
  - Response: A JSON array of all books in the bookshelf.
  - Example: `GET /bookshelf/all`

#### Delete a Book

- **DELETE /bookshelf/delete/:id**
  - Description: Remove a book from the bookshelf.
  - Params: `id` (string) - The ID of the book to delete.
  - Response: A JSON object of the deleted book.
  - Example: `DELETE /bookshelf/delete/123456789`
