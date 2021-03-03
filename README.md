






<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/GitHub_Logo.png" alt="Logo" width="280" height="200">
  </a>

  <h1 align="center">Github Searcher</h1>

  <p align="center">
   A simple GitHub repository search application.
    <br />
   A Technical test by <a href="https://www.tradeling.com">tradeling</a>
    <br />
    Status: <span style="color: #FF3232">unfinished</span>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies">Technologies</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#available-scripts">Available Scripts</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#tasks">Tasks</a></li>
    <li> <a href="#solution">Solution</a>
      <ul>
        <li><a href="#abstract">Abstract</a></li>
                <li><a href="#structure">Structure</a></li>
                        <li><a href="#ideas">Ideas</a></li>
        <li><a href="#final-thoughts">Final Thoughts</a></li>
      </ul></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was developed as a technical solution for a test by [tradeling](https://www.tradeling.com/). That allows the users to search the users or repositories or issues on GitHub. The results will be fetched from the [GitHub API](https://developer.github.com/v3/search/).


### Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) With [TypeScript](https://sass-lang.com/).

- [Redux](https://redux.js.org/recipes/usage-with-typescript) & [redux-persist](https://github.com/rt2zz/redux-persist).
- [React Router](https://github.com/ReactTraining/react-router).
- [SaSS](https://sass-lang.com/).



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
- You will need `yarn` or `npm`
- Run `yarn install` or `npm install`

### Available Scripts
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


<!-- USAGE EXAMPLES -->
## Usage

The UI is simple, you chose whether you are looking for repositories, users or issues, type in your search text and voila!



<!-- TASKs -->
## Tasks:
- **Technologies**
    - [x] React.js
    - [x] TypeScript
    - [x] Redux and redux-persist
    - [ ] React Router
    - [ ] Vanilla CSS, Sass, Styled Components or any other CSS-in-JS.
- **Requierements**
    - [x] Search Github API for Repos/Users/issues
    - [x] Add debounce. Make the API calls only if the user has typed 3 or more characters.
    - [x] If the user changes the "Entity type" value in the dropdown and user has 3 or more characters in the input already, it should refresh the results.
    - [X] If the user clears the input or types less than three characters, clear the results and show the empty screen.
    - [X] The user can scroll down to see more results ( Infinite scrolling ) until the results are done.
    - [ ] Responsive
- **Criteria**
    - [x] Cleanliness of the code
    - [x] Use modern ES6+ syntax, async/await, elegant & readable code
    - [x] Typescript definitions, types, interfaces.
    - [x] README file explaining my high level solution
    - [ ] All the edgecases have been handled
    - [ ] Tests.


## Solution
### Abstract
When I first got this technical test I thought about the solution for about 3 days, imagined how my application would work (the data flow, the structure..), I searched some similar projects on github and tested them.



### Structure
>I aimed to build an optimal solution as if this was a real product, I mainly focused on building a scalable app structure.
```
/src
  ├── /api
  |      ├── GithubServices.ts
  |      ├── GithubTypes.ts
  ├── /app
  |      ├── App.tsx
  |      ├── AppRouter.tsx
  |      ├── store.ts
  |      └── styles.css
  ├── /components
  |      ├── /cards
  |      |      ├── IssueCard.tsx
  |      |      ├── RepoCard.tsx
  |      |      └── UserCard.tsx
  |      └── /inputs
  |              ├── Input.tsx
  |              └── Select.tsx
  ├── /features   
  |      ├─ /search
  |      |        ├── actions.ts
  |      |        ├── types.ts
  |      |        └── reducer.ts
  |      └──rootReducer.ts
  └── /pages
        ├── /partials
        |       ├── SearchForm.tsx
        |       └── SearchResults.tsx
        └── SearchPage.tsx
```
### Ideas
- I'm familiar with using redux/toolkit and I know how efficent it is compared to react-redux but I thougt I use the later  for the test since you didn't specified toolkit in the requirements.
- I know about Octokit, but I created my own API service, Octokit would be optimal if we had a filter and sort feature in our app. 
- If I had more time, or if this was a bigger app, the infinitescroll would stand alone as a unqiue feature not inside the search.

### Issues
>These are the issue that took me long enough to solve them.
- Some Types issues due to the fact that I'm not that experienced with Typescript as I'm with Javascript. But I managed.
- Infinite Scroll: Never have done that before but hey, first time for everything =)

### Final Thoughts
It's a very good test, I enjoyed working on the solution trying to perfect everybit of it. Thank you.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

 Wajih Tagourty - wajih.tagourty@gmail.com

Project Link: [https://github.com/hqshtag/github-searcher](https://github.com/hqshtag/week-spenx)


