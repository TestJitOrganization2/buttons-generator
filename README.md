## Description
This project contains a frontend application written in React.
It providers a simple user interface for a buttons generator application.

## Prerequisites

- Docker
- Docker Compose
- Node.js (for development purposes)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/psokolinski/buttons-generator.git
```

### 2. Change directory
```bash
cd buttons-generator
```

### 3. Install dependencies
Make sure you have Docker and Docker Compose are installed on your machine.

### 4. Set up API Key
Set up OpenAI API Key that will be used by the application to communicate with the OpenAI API. It is needed during build time to set up the environment variable in the Docker container.
You can do it using the following command:
```bash
export VITE_OPENAI_API_KEY={YOUR_API_KEY}
```

### 5. Start the application
To start the React frontend, you can use the following commands:
```bash
make build
make up
```
This command will:
Build the Docker container for the React frontend.
Start the application.

### 6. Access the application
Once the container is running, you can access the application through your browser:
- [http://localhost:80](http://localhost:80)

### 7. Stop the application
To stop the application, you can use the following command:

```bash
make down
```
This will stop and remove the Docker container.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# watch development mode
$ npm run dev

# production mode
$ npm run prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run cypress:run

# test coverage
$ npm run test:coverage
```

## Important Notes

This is not a production-ready application. The current setup is intended for development purposes only with some more advanced concepts that can be used in production.

### Changes to make it more production-ready:

#### 1. Unit tests
- More unit tests need to be added to the components to ensure proper functionality and improve test coverage.

#### 2. Integration tests
- More integration tests need to be added to test the interaction between components.

#### 3. End-to-end Cypress tests
- More end-to-end tests need to be added to test the application as a whole.

#### 4. Storybook
- More components need to be added to Storybook to showcase the UI components.

#### 5. Infrastructure
- Terraform configuration needs to be updated to deploy the application to AWS in ECS cluster with Fargate or S3 static website hosting.
- Ensure that the frontend is served using a CDN for better performance.
- Ensure that the application is highly available and scalable by using AWS services like Load Balancer, Auto Scaling, etc.

#### 6. CI/CD
- GitHub Actions need to be updated to run tests and deploy the application to AWS.

#### 7. Code documentation
- Add more comments and documentation to the codebase to make it easier to understand and maintain.

#### 8. Security
- Add authentication and authorization mechanisms to secure the application.
- Use HTTPS for secure communication by adding an SSL certificate and updating the server configuration.
- Use Secret Manager to store sensitive information like API keys, etc.

#### 9. Logging
- Create own logger that is designed for production use for the specific needs of the application. This can be done using a logger service (e.g., Winston, Pino) to manage log levels and output formats.

#### 10. Monitoring
- Add monitoring and alerting to the application to track performance and errors.

#### 11. Performance Optimization
- Optimize the application for performance by reducing bundle size, lazy loading components, and optimizing images.
- Enable caching mechanisms where appropriate (e.g., service workers, browser caching).

#### 12. Codebase
- Configure SonarCloud to analyze the codebase for code quality and security vulnerabilities.

Majority of the changes mentioned above were started to indicate their importance in the production environment. However, the implementation of these changes is not complete. The purpose of this project is to provide a starting point for a fronted application with React and to demonstrate how to set up a development environment using Docker.


#### Bonuses
I choose to implement the following bonuses:

### Bonus 2.
I improved the UI to make it more user-friendly and visually appealing. It makes the application more intuitive and easier to use which I think is important for the user experience.

### Bonus 3.
I made some security improvements by adding by sanitizing inputs that user provides to the inputs before sending them to the server. This helps to prevent XSS attacks and other security vulnerabilities.
I implemented some validation for the inputs to make sure that the user provides the correct data. This helps to prevent errors and improve the user experience and also helps to prevent security vulnerabilities.
I used a library that sanitizes the returned data from the server to prevent XSS attacks and other security vulnerabilities when rendering the data in the UI.

#### Demo
Some demos can be found in `/video` directory.