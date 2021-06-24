# Pinfinity
An implementation of Infinite Scrolling using React Hooks

### System Requirements

To check out Pinfinity, you need to have [Git](https://git-scm.com/), [Node, and NPM](https://nodejs.org/en/) installed on your development machine. 

### Instructions

Open your terminal, create a directory with a name of your choosing, and clone this repository into your new directory.

```git clone https://github.com/nadiacollado/pinfinity.git```

Change into the client directory.

```cd client```

Install dependencies.

```npm i ```

Run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see lint errors in the console.

```npm start```

### 🙋🏻‍Things I learned

From this project, I primarily learned the distinction between the useState and useRef hooks. I'd originally set up my project where I was intializing all of my data via useState and then tracking it with useEffect. However, useState was causing multiple renders within my event handler and setting various pages of pins at a time when it should only set one. I decided to use the useRef hook for loading data as changes to useRef do not trigger re-renders.


### 🧘🏻‍Stretch goals
Tests! (Unit & integration)/
Routing to includes a unique Pin component for each pin/
Set up a database and login/user capibilities to enable the "save" pin functionality/
Add search bar functionality 

### Dependencies

[React](https://reactjs.org/)

[Material-UI](https://material-ui.com/)

[React-Masonry-CSS](https://www.npmjs.com/package/react-masonry-css)
