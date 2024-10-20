# InnSpire Frontend Assessment

## Purpose
This assessment is designed to showcase your understanding of a frontend framework, together with your level of expertise in JavaScript/TypeScript.

There are two stages to this assessment:

    1. Preparing the code at home in advance of your interview.
    2. The interview, discussing the assessment.

The interview phase is to give us an indication why you made certain decisions and how the process of preparing the code went.

## Prerequisites

    - Knowledge of JavaScript/TypeScript.
    - Knowledge of a framework like React, Angular or Vue.
    - Familiarity with Git for source control, and a github.com account which will be used for sharing your code.
    - Miscrosoft Teams, which we will use for the interview.

## Assessment
For this assessment you will create an application that shows us an overview of movies and a detail page with the movie information/meta data. **The type/filter that we want to see will be in the assessment email.**

### Features

    - Overview page
    - Detail page
    - Overview of favorite movies that the user has selected

### Framework

You are free to choose between **Vue, React or Angular** to excecute this assessment.

### API

For this assessment we use the IMDB API for retrieving data. You can create a free account to make use of the APIs.

- https://imdb-api.com/

### Notes on completing the assessment
- There is no right way to do this. We are interested in the choices that you make, how you justify them, and your development process.
- Make sure that the application is executable.

## The interview

We will spend 60 minutes at yout interview with you. This will include:
- Getting to know each other.
- Looking at your current code and solutions.

## How to Start the Application
Copy Environment Configuration: Copy the contents of src/environments/environment.ts to src/environments/environment.development.ts and fill in the apiKey with your IMDB API key.  

```typescript
export const environment = {
  production: false,
  apiBaseUrl: 'https://tv-api.com/en/API',
  apiKey: 'your_api_key_here'
};
```

### Install Dependencies: Run the following command to install the necessary dependencies:  

- npm install


### Serve the Application: Use the Angular CLI to serve the application:  

- ng serve

### Access the Application: Open your browser and navigate to http://localhost:4200 to view the application.

### todo list
1. add eslint rules
2. add more unit tests
3. fix list-item styling bug
4. add polymorphism for detailModel / overviewModel overlap



