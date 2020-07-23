# About

Jere Alho, [@jalho](https://github.com/jalho) on GitHub

This is the source of my personal website's **frontend** to be served at [j3.re](http://j3.re/).

The project's GraphQL **backend** can be found in its own repository at [jalho/j3.re_backend](https://github.com/jalho/j3.re_backend).

The project also serves as Full Stack Open 2020 ([MOOC](https://fullstackopen.com/) by University of Helsinki) personal final project. For that reason a working hours' tracking document is included in the repository under [temp/school](https://github.com/jalho/j3.re/blob/master/temp/school/Työaikakirjanpito.md).

## Frontend source structure

<details>
    <summary>Expand</summary>

*as of 21 July 2020*
```
src
¦   App.tsx                 # single page app's base
¦   AppLoader.tsx           # load "App", and meanwhile render "Landing" as fallback
¦   i18n.ts                 # internationalization of the UI
¦   index.tsx               # entry point
¦   react-app-env.d.ts      # CRA types
¦   
+---components              # components and their styles
¦       ...
¦       
+---resources               
¦       translations.ts     # UI texts in available languages
¦       
+---state                   # Redux utility
¦       actionCreators.ts   # dispatchable actions
¦       rootReducer.ts      # combined reducers
¦       store.ts            # Redux store
¦       
+---styles                  # main styles location
¦       main.scss           # the main Sass file
¦       _constants.scss     # variables used across stylesheets
¦       _mixins.scss        # mixins used across stylesheets
¦       
+---types                   # own types
¦       state.d.ts          # types for Redux implementation
¦       
+---views                   # modules for different views in the UI
    +---cv                  # "CV" view and its styles
    ¦       ...
    ¦       
    +---home                # "Home" view, rendered after "Landing"
    ¦       ...
    ¦       
    +---landing             # "Landing" view and its styles
    ¦       ...             # (shown fixed minimum time and as `Suspense` fallback if needed)
    ¦       
    +---portfolio           # "Portfolio" view
            ...
```
</details>

## Project tech stack (planned)

<details>
<summary>Expand</summary>

| *tech* | *utility* | *docs* | *implemented* |
|--|--|--|--|
|||||
| **React** |
|||||
| Create React App | bootstrapping | [create-react-app.dev](https://create-react-app.dev/docs/getting-started) | ✔️ |
| React Redux | state management | [react-redux.js.org](https://react-redux.js.org/) | ✔️ |
| React Bootstrap | component library  |[react-bootstrap.github.io](https://react-bootstrap.github.io/) | ✔️ |
| React Router | app routing | [reactrouter.com](https://reactrouter.com/web/guides/quick-start) | ✔️ |
| React i18next | internationalization | [react.i18next.com](https://react.i18next.com/guides/quick-start) | ✔️ |
| React Icons | icons | [react-icons.github.io](https://react-icons.github.io/react-icons/) | ✔️ |
|||||
| **database** ||||
|||||
| GraphQL | data query language | see *Apollo* | ✔️ |
| Apollo | GraphQL implementation | [apollographql.com](https://www.apollographql.com/docs/) | ✔️ |
| MongoDB | database | [docs.mongodb.com](https://docs.mongodb.com/) | ❌ |
| mongoose | MongoDB implementation | [mongoosejs.com](https://mongoosejs.com/docs/) | ❌ |
|||||
| **miscellaneous** ||||
|||||
| Sass | style preprocessor | [sass-lang.com](https://sass-lang.com/documentation) | ✔️ |
| TypeScript | main programming language | [typescriptlang.org](https://www.typescriptlang.org/docs/home.html) | ✔️ |
| Node.js | runtime environment | [nodejs.org](https://nodejs.org/en/docs/) | ✔️ |
|||||
| **deployment** ||||
|||||
| Buddy | CI/CD | [buddy.works](https://buddy.works/docs) | ❌ |
| Vercel | hosting frontend | [vercel.com](https://vercel.com/docs) | ✔️ |
| Heroku | hosting backend | [devcenter.heroku.com](https://devcenter.heroku.com/) | ✔️ |
| EuroDNS | domain name registrar | [eurodns.com](https://www.eurodns.com/) | ✔️ |

---
</details>

## Progress snapshots

#### Video demos on YouTube, starting from latest.

 1. [as of commit `407f3ad`](https://youtu.be/r0ZoqIL1H2g) - uploaded 21 July 2020 **[latest]**
 2. [as of commit `02d9156`](https://youtu.be/w4ucXlW8Zhg) - uploaded 16 July 2020