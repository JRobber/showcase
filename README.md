<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will create a react application from scratch using `create-react-app`. This project will start as a showcase of solutions to toy problems. We will have a header at the top and a navigation bar on the left of toy problem topics that will then change the workspace view on the right. At the end of this project you should have a comfortable understanding on how to quickly boot up a React project using `create-react-app` and an understanding of the following topics:

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

### Instructions

When in the root of the project use `creare-react-app app`. After `create-react-app` has finished `cd` into `app` and run `npm start`.

### Solution

<details>

<summary> File Structure </summary>

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

</details>

<img src="https://github.com/devlemire/toy-problem-appendix/blob/solution/readme/1.png" />

## Step 2

### Summary 

Now that our boilerplate is ready to go, let's change some of the file structure slightly to meet our needs for this project.

### Instructions

First, let's remove `src/logo.svg` since we won't be using that for our project. Next, let's add a component folder in `src` to store the components we will be making.

If you had your development server still going you'll probably notice our App is failing to compile. To fix this, go into `src/App.js` and clear the return statement and remove the import of `logo`.

### Solution

<details>

<summary> File structure </summary>

```
- src/
  - component/
  - App.css
  - App.test.js
  - index.css
  - index.js
```

</details>

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

## Step 3

### Summary

In this step we will create the component for the header of our showcase.
### Instructions

Create a component in the `component` folder called `Header` that renders a single div that takes up 100% of the width of the screen and have a header element labled "Showcase". Let's also align our header element in the center of the div. When adding our CSS let's use an `id` of `#header-component`. After you're done creating the Header component import it into `App.js` and render it.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's start by going into `src/component/` and creating a folder called `Header`. This folder will hold all the files related to our `Header` component we are about to create. Inside of `src/component/Header` create a `Header.js` and `Header.css` file. 

Open up `Header.js` and import `React, { Component }` from `react`. Will need these in order to use JSX and create our new component. On the next line import `./Header.css` so our header component will receive the styles we will add in that file. Now that we have all our imports we can start creating our component. Let's create a class called Header that extends on `Component`. Your Header.js should now look like:

```jsx
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

}
```

Remember that in React in order for a component to render on the DOM the component needs a `render` method. Inside the render method add a return statment that will return our `<div>` that has a `<h1>` element labled "Showcase". Don't forget to add the id of `#header-component` to the `<div>`.

```jsx
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  return (
    <div id="header-component">
      <h1> Showcase </h1>
    </div>
  )
}
```

Lastly all our Header.js file needs to do is export our new Header class so `App.js` can render it onto the view. We do this using `export default`. After our class add a `export default` for `Header`.

```jsx
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id="header-component">
        <h1> Showcase </h1>
      </div>
    )
  }
}

export default Header;
```

Now that our Header component is created, let's add some styles for `#header-component` in `Header.css`. Since we want to alter the width and align the text will be using the following properties: `width` and `text-align`. To get an element to take up the entire width of the view you can use `100%` with `width` and to have text align in the center you can use `center` with `text-align`. 

```css
#header-component {
  width: 100%;
  text-align: center;
}
```

We're now ready to import our `Header` component into `App.js` and then render it. Using `import`, import `Header` from `./component/Header/Header` and then in our return statement add `<Header />`.

```js
import React, { Component } from 'react';
import './App.css';

// Components
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
```

</details>

### Solution

<details>

<summary> <code> Header.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id="header-component">
        <h1> Showcase </h1>
      </div>
    )
  }
}

export default Header;
```

</details>

<details>

<summary> <code> Header.css </code> </summary>

```css
#header-component {
  width: 100%;
  text-align: center;
}
```

</details>

<details>

<summary> <code> App.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './App.css';

// Components
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
```

</details>

<img src="https://github.com/devlemire/toy-problem-appendix/blob/solution/readme/2.png" />

