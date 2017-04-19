<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will create a react application from scratch using `create-react-app`. This project will start as an appendix of solutions to toy problems. We will have a navigation bar on the left of toy problem topics that will then change the workspace view on the right. At the end of this project you should have a comfortable understanding on how to quickly boot up a React project using `create-react-app` and an understanding of the following topics:

* Components
* State
* Props
* Import / Export
* .gitignore
* NPM install

After completing this project you'll have the knowledge to add more toy problems as you complete them throughout your time at DevMountain. You can also expand from toy problems if you like by adding tricks you learn during DevMountain.

## Step 1

### Summary

In this step we will quickly create a boilerplate for our React project by using `create-react-app`. After `create-react-app` has finished we will start our development server that `create-react-app` provides.

### Detailed Instructions

When in the root of the project use `creare-react-app app`. After `create-react-app` has finished `cd` into `app` and run `npm start`.

### Solution

You should now have a file structure like this:

```
- app/
  - node_modules/
  - public/
  - src/
  - .gitignore
  - packge.json
  - README.md
  - yarn.lock
- README.md 
```

And a browser pop up that looks like this:

<img src="https://github.com/devlemire/toy-problem-appendix/blob/solution/readme/1.png" />

## Step 2

### Summary 

Now that our boilerplate is ready to go, let's change some of the file structure slightly to meet our needs for this project.

### Detailed Instructions

First, let's remove `src/logo.svg` since we won't be using that for our project. Next, let's add a component folder in `src` to store the components we will be making.

If you had your development server still going you'll probably notice our App is failing to compile. To fix this, go into `src/App.js` and clear the return statement and remove the import of `logo`.

### Solution

File structure:

```
- src/
  - component/
  - App.css
  - App.test.js
  - index.css
  - index.js
```

<details>

<summary> <code> App.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

  }
}

export default App;
```

</details>