# WebDevLio

## [See the App!](www.your-deploy-url-here.com)

![App Logo](your-image-logo-path-or-name)

## Description

"WebDevLio" is a website designed for users who still do not have sufficient knowledge to create their own virtual portfolio.
WebDevLio offers a robust, fast, and visually appealing way to create your portfolio. Simply register, fill in the fields, and you're ready to go.
You will have your own portfolio within minutes.

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

HomeProfile model

```javascript
 {
   title: {
      type: String,
      default: "Ex: Front-end React Developer",
    },
    description: {
      type: String,
      default: "Ex: Hi, I'm (username), a passionate Front-end React Developer, based in Madrid, Spain.",
    },
    profileImage: {
      type: String,
      default: "https://httpstatusdogs.com/img/404.jpg"
    },
    links: {
      type: [String],
      default: ["your linkedin here", "your github here"],
    },
    backgroundImage: {
      type: String,
      default: "https://httpstatusdogs.com/img/404.jpg"
    }
 }
```

Skill model

```javascript
 {
       title: {
      type: String,
      required: [true, "Title is required."],
    },
    list: {
      type: [String],
      required: [true, "List cant be empty."],
      // mirar Lorena/Pedro
    }
 }
```

Project model

```javascript
 {
   title: {
      type: String,
      required: [true, "Title is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    image: {
      type: String,
      required: [true, "Image is required."],
    },
    githubLinks: {
      type: [String],
      //required: [true, "Title is required."],
    },
    liveDemo: {
      type: String,
      //required: [true, "Title is required."],
    }
 }
```

Contact model

```javascript
 {
   githubLink: {
      type: String,
      default:" ",
    },
    linkedinLink: {
      type: String,
      default:" ",
    },
    emailLink: {
      type: String,
      default:" ",
    }
 }
```

## API Endpoints (backend routes)

| HTTP Method | URL                           | Request Body            | Success status | Error Status | Description                                    |
| ----------- | ----------------------------- | ----------------------- | -------------- | ------------ | ---------------------------------------------- |
| POST        | `/auth/signup`                | {name, email, password} | 201            | 400          | Registers the user in the Database             |
| POST        | `/auth/login`                 | {username, password}    | 200            | 400          | Validates credentials, creates and sends Token |
| GET         | `/auth/verify`                |                         | 200            | 401          | Verifies the user Token                        |
| DELETE      | `/auth/:userId/delete`        |                         | 200            | 401          | Deletes user account                           |
| GET         | `/:userId/HomeProfile`        |                         | 200            | 400          | Show user Home                                 |
| POST        | `/:userId/HomeProfile`        |                         | 201            | 400          | Creates a new Home                             |
| PUT         | `/:userId/HomeProfile`        |                         | 200            | 400, 401     | Edits user Home                                |
| GET         | `/:userId/SkillList`          |                         | 200            | 400, 401     | Shows user Skills                              |
| POST        | `/:userId/SkillList/:skillId` |                         | 200            | 401          | Creates new Skill                              |
| PUT         | `/:userId/SkillList/:skillId` |                         | 200            | 401          | Edits one Skill                                |
| DELETE      | `/:userId/SkillList/:skillId` |                         | 200            | 400, 401     | Deletes one Skill                              |
| GET         | `/:userId/projects`           |                         | 200            | 401          | Shows user Projects                            |
| POST        | `/:userId/projects/:projectId`|                         | 200            | 401          | Creates new Project                            |
| PUT         | `/:userId/projects/:projectId`|                         | 200            | 401          | Edits one Project                              |
| DELETE      | `/:userId/projects/:projectId`|                         | 200            | 401          | Deletes one Project                            |
| GET         | `/:userId/Contacts`           |                         | 200            | 400          | Shows user Contacts                            |
| POST        | `/:userId/Contacts`           |                         | 201            | 400          | Creates new Contacts                           |
| PUT         | `/:userId/Contacts`           |                         | 200            | 400, 401     | Edits Contacs                                  |

## Links

### Collaborators

[Developer 1 name](https://github.com/AlvaroSapata)

[Developer 2 name](https://github.com/Johnny-Ig)

### Project

[Repository Link Client](www.your-github-url-here.com)

[Repository Link Server](https://github.com/AlvaroSapata/WebDevLio-Server)

[Deploy Link](www.your-deploy-url-here.com)

### Trello

[Link to your trello board](www.your-trello-url-here.com)

### Slides

[Slides Link](www.your-slides-url-here.com)
