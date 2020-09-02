## Here are the requirements

* Create a form component with a single text input and a submit button.
* The text input should have a default value passed down from another (parent) component.
* The value from the text input should be rendered under the input as plain text.
* The plain text should only be updated when the form is submitted.
* If the value of the input changes, then the border of the input should change colour.
* Store the value of the text input in an Apollo Client Cache and use it as your state management.
* Optional: add another field of different type and apply the above


## Node.js version

In `package.json`. I have set requirements as follows:

```json
 "engines": {
    "node": ">=10.0.0",
    "npm": ">6"
  },
```

## Technologies & main features

* Next.js
* React
* GraphQL (Apollo server)
* Apollo client
* React Apollo Hooks
* Node.js
* TypeScript
* GraphQL Code Generator
* Jest

## Production usage

In order to achieve the best performance you should have enabled http/2 and also enable compression in your reverse proxy (nginx). Up to date Node.js server is also very benefitial.

## Environment configuration

The solution for environment variables is built using [dotenv](https://github.com/motdotla/dotenv) library and two environment variables. Well known `NODE_ENV` variable can be set as `development` or `production` and our `CUSTOM_ENV`, which defines the environment. This can be your `staging`, `production`, `local` environment or even your build server. These two variables define the name of `.env` file in `/secrets` folder that will be used. If we would like to for example define the config for our staging environment we would create the file called `/secrets/production-staging.env` and place all the environment variables there. The example for such a file can be for example the following that we can use for development

```bash
NODE_ENV=development
CUSTOM_ENV=local
PORT=3000
API_URL=http://localhost:3000/graphql
HOST=http://localhost:3000
```
