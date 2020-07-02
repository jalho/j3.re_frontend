## About

This is the source of my personal website to be served at [j3.re](j3.re).

Also serves as Full Stack Open 2020 ([MOOC](https://fullstackopen.com/) by University of Helsinki) personal final project. For that reason a working hours' tracking document is included in the repository under [school/](https://github.com/jalho/j3.re/blob/master/school/Työaikakirjanpito.md).

## Available Scripts

#### react-scripts, [documentation](https://create-react-app.dev/docs/available-scripts/)

* `npm start`

  * *"Runs the app in the development mode. Open http://localhost:3000 to view it in the browser."*
  
* `npm run build`

  * *"Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance."*

## Tech stack

### Front end

#### React

* User interface library: **React**, bootstrapped with CRA
  * Documentation: [reactjs.org/docs](https://reactjs.org/docs/react-api.html)
    <details>
      <summary>Motivation</summary>

      Full Stack Open 2020, popularity and the fact that it's the only one I know at the time of writing.
    </details>

* React bootstrapper: **Create React App (CRA)**, using *TypeScript* template
  * Command: `npx create-react-app app-name --template typescript`
  * Documentation: [create-react-app.dev/docs](https://create-react-app.dev/docs/getting-started)
    <details>
      <summary>Motivation</summary>

      Officially supported default. No extra requirements in mind at the time of initialization.
    </details>

* React component library: **React Bootstrap**
  * Documentation: [react-bootstrap.github.io](https://react-bootstrap.github.io/)
    <details>
      <summary>Motivation</summary>

      Popularity, age (battle tested), mobile friendliness. Use of *Sass* (as of version 4).
    </details>

#### Styles

* CSS preprocessor: **Sass**
  * Documentation: [sass-lang.com/documentation](https://sass-lang.com/documentation)
    <details>
      <summary>Motivation</summary>

      Popularity, exposure.
    </details>

### Back end

`TODO: GraphQL, Apollo, express.js...`

### Other

* Main programming language: **TypeScript**
  * Documentation: [typescriptlang.org/docs](https://www.typescriptlang.org/docs/home.html)
    <details>
      <summary>Motivation</summary>

      More similarity to previous languages I've programmed with (Java and C) when compared to the other option, JavaScript. Enforced typing supports my desire of documenting well.
    </details>
* Deployment platform: **Vercel**
  * Documentation: [vercel.com/docs](https://vercel.com/docs)
    <details>
      <summary>Motivation</summary>

      Exposure, a friend uses it in his projects. Nothing more to it really, just had to pick one.
    </details>
* Domain name registrar: **EuroDNS**
  * Website: [eurodns.com](https://www.eurodns.com/)
    <details>
      <summary>Motivation</summary>

      The first one I came across on AFNIC's (the registry in charge of my desired `.re` top level domain) listing that had their site available in English. The company and their service didn't seem suspicious, and they kindly made my special case `j3.re` available upon my request via email, as initially their (and many other registrars' I checked) search didn't support the edge case 2 character domains like mine, that I still knew was technically allowed with `.re` as long as there's one letter and one number.
    </details>

---

## Author

Jere Alho, [@jalho](https://github.com/jalho) on GitHub
