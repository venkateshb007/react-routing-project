# React Routing Project

This is a simple React project demonstrating routing with `react-router-dom`. The project lists employees and stocks, with detailed views for each item.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/venkateshb007/react-routing-project.git
cd react-routing-project
npm install
```

Available Scripts
In the project directory, you can run:

`npm start`
Runs the app in the development mode.
Open `http://localhost:3000` to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`npm test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

`npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
`Your app is ready to be deployed!`

`npm run eject`
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transient dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

npm run deploy
Builds the app and deploys it to GitHub Pages.
Make sure to set the homepage field in `package.json` to `https://venkateshb007.github.io/react-routing-project`, and add predeploy and deploy scripts.
```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

Deployment
This project is configured to be deployed to GitHub Pages. To deploy the project, follow these steps:

1. Ensure the homepage field in package.json is set to `https://venkateshb007.github.io/react-routing-project.`

2. Install gh-pages if not already installed:
  ```bash
  npm install gh-pages --save-dev
  ```

3. Add the predeploy and deploy scripts to package.json:
  ```bash
  "scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
  }
```

4. Commit and push changes to GitHub:
  ```bash
  git add .
  git commit -m "Add deploy script for GitHub Pages"
  git push origin master
```
5. Deploy the app:
   ```bash
   npm run deploy
    ```

Author : `@Venkateshb007`
