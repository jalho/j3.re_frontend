# About

Jere Alho, [@jalho](https://github.com/jalho) on GitHub

This is the source of my personal website to be served at [j3.re](http://j3.re/).

Also serves as Full Stack Open 2020 ([MOOC](https://fullstackopen.com/) by University of Helsinki) personal final project. For that reason a working hours' tracking document is included in the repository under [temp/school](https://github.com/jalho/j3.re/blob/master/temp/school/Työaikakirjanpito.md).

## Directory structure of `/src/`

*as of ~ 16 July 2020*

```
src
¦   App.test.tsx                // auto-generated by CRA (TODO: Fix or remove!)
¦   App.tsx                     // React application base
¦   constants.ts                // shared constants (TODO: Find use and relocate, or remove!)
¦   index.tsx                   // main entry point
¦   react-app-env.d.ts          // CRA types
¦   setupTests.ts               // auto-generated by CRA (TODO: Use or remove!)
¦       
+---components                  // shared components and their styles
¦       Face.tsx                // a shared component (used in 'Landing' view)
¦       Header.tsx              // a shared component (used in multiple places)
¦       _components.scss        // the shared components' styles
¦       
+---styles                      // main styles
¦       main.scss               // Sass main stylesheet (uses all the rest of them)
¦       _constants.scss         // variables used in stylesheets
¦       _mixins.scss            // mixins used in stylesheets
¦       
+---views                       // view modules
    +---home                    // 'Home' view module
    ¦       index.tsx           // module base
    ¦       _home.scss          // module styles (used by the main stylesheet)
    ¦       
    +---landing                 // 'Landing' view module
            index.tsx           // module base
            _landing.scss       // module styles (used by the main stylesheet)
```

## Planned tech stack

| *tech* | *utility* | *docs* | *implemented* |
|--|--|--|--|
|||||
| **React** |
|||||
| Create React App | bootstrapping | [create-react-app.dev](https://create-react-app.dev/docs/getting-started) | ✔️ |
| Redux | state management | [redux.js.org](https://redux.js.org/api/api-reference) | ❌ |
| React Bootstrap | component library  |[react-bootstrap.github.io](https://react-bootstrap.github.io/) | ❌ |
| React Router | app routing | [reactrouter.com](https://reactrouter.com/web/guides/quick-start) | ❌ |
| react-i18next | internationalization | [react.i18next.com](https://react.i18next.com/guides/quick-start) | ❌ |
|||||
| **miscellaneous** ||||
|||||
| Sass | style preprocessor | [sass-lang.com](https://sass-lang.com/documentation) | ✔️ |
| GraphQL | data query language | see *Apollo* | ❌ |
| Apollo | GraphQL implementation | [apollographql.com](https://www.apollographql.com/docs/) | ❌ |
| Express.js | back end framework | [expressjs.com](https://expressjs.com/en/4x/api.html) | ❌ |
| TypeScript | main programming language | [typescriptlang.org](https://www.typescriptlang.org/docs/home.html) | ✔️ |
|||||
| **deployment** ||||
|||||
| Buddy | CI/CD | [buddy.works](https://buddy.works/docs) | ❌ |
| Vercel | hosting | [vercel.com](https://vercel.com/docs) | ✔️ |
| EuroDNS | domain name registrar | [eurodns.com](https://www.eurodns.com/) | ✔️ |

---

## Progress snapshots

#### Video demos on YouTube, starting from latest.

 1. [as of commit 02d9156](https://youtu.be/w4ucXlW8Zhg) - uploaded 16 July 2020 **[latest]**