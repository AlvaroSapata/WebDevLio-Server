# WebDevLio

## [See the App!](www.your-deploy-url-here.com)

![App Logo](your-image-logo-path-or-name)

## Description

#### [Client Repo here](www.your-github-url-here.com)

#### [Server Repo here](https://github.com/AlvaroSapata/WebDevLio-Server)

## Backlog Functionalities

**NOTE -** List here all functionalities you wish to add to your proyect later or that you are currently working on

## Technologies used

HTML, CSS, Javascript, Express, React, axios, React Context

# Server Structure

## Models

User model

```javascript
{
  email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required."],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
      trim: true,
    },
    homeProfile: {
      type: Schema.Types.ObjectId,
      ref: "HomeProfile",
      // Default?
    },
    skillsList: {
      type: [Schema.Types.ObjectId],
      ref: "Skill",
    },
    projects: {
      type: [Schema.Types.ObjectId],
      ref: "Project",
    },
    contact: {
      type: Schema.Types.ObjectId,
      ref: "Contact",
    }
}
```

Game model

```javascript
 {
   title: {type: String, required: true},
   type: {type: String, required: true},
   image: {type: String, required: true},
   apiId {type: Number, required: true},
   status {type: String, enum: ["wishlist", "playing", "finished"]
   creator: {type: Schema.Types.ObjectId,ref:'User'},
 }
```

## API Endpoints (backend routes)

| HTTP Method | URL                | Request Body            | Success status | Error Status | Description                                    |
| ----------- | ------------------ | ----------------------- | -------------- | ------------ | ---------------------------------------------- |
| POST        | `/auth/signup`     | {name, email, password} | 201            | 400          | Registers the user in the Database             |
| POST        | `/auth/login`      | {username, password}    | 200            | 400          | Validates credentials, creates and sends Token |
| GET         | `/auth/verify`     |                         | 200            | 401          | Verifies the user Token                        |
| GET         | `/game`            |                         | 200            | 400          | Show games in the DB, only titles and images   |
| POST        | `/game`            | {apiId}                 | 201            | 400          | Creates a new Game Document                    |
| GET         | `/game/:gameId`    |                         | 200            | 400, 401     | Sends all game Details                         |
| PUT         | `/game/:gameId`    |                         | 200            | 400, 401     | Edits game document                            |
| DELETE      | `/game/:gameId`    |                         | 200            | 401          | Deletes game document                          |
| GET         | `/profile`         |                         | 200            | 401          | Sends user profile details                     |
| PUT         | `/profile`         |                         | 200            | 400, 401     | Edits the user profile                         |
| PATCH       | `/profile/:gameId` |                         | 200            | 401          | Adds game to favourite                         |
| GET         | `/gameApi`         |                         | 200            | 401          | Gets game data from API (Search)               |
| GET         | `/gameApi/:apiId`  |                         | 200            | 401          | Gets game details from API                     |

## Links

### Collaborators

[Developer 1 name](www.github-url.com)

[Developer 2 name](www.github-url.com)

### Project

[Repository Link Client](www.your-github-url-here.com)

[Repository Link Server](www.your-github-url-here.com)

[Deploy Link](www.your-deploy-url-here.com)

### Trello

[Link to your trello board](www.your-trello-url-here.com)

### Slides

[Slides Link](www.your-slides-url-here.com)
