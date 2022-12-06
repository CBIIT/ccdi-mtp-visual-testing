# MTP Visual Testing  Example: Applitools with Cypress 

To run this example project, you'll need:

To install project dependencies and set up Applitools Eyes, run:

```
npm install
npx eyes-setup
```

The Applitools config file is [`applitools.config.js`](applitools.config.js).

The main test spec within e2e/ccdi-mtp/\*.cy.js

To execute tests, set the `APPLITOOLS_API_KEY` environment variable
to your [account's API key](https://applitools.com/tutorials/guides/getting-started/registering-an-account).

Then, to open the Cypress window for launching tests, run:

```
npx cypress open
```

If you want to run tests directly from the command line, run this instead:

```
npx cypress run
```



**Reference**

[Cypress JavaScript tutorial](https://applitools.com/tutorials/quickstart/web/cypress)!


This is the example project for the [Cypress JavaScript tutorial](https://applitools.com/tutorials/quickstart/web/cypress).

It shows how to start automating visual tests
with [Applitools Eyes](https://applitools.com/platform/eyes/)
and the [Ultrafast Grid](https://applitools.com/platform/ultrafast-grid/)

using [Cypress](https://www.cypress.io/) in JavaScript.

It uses:

* [JavaScript](https://www.javascript.com/) as the programming language
* [Cypress 10](https://www.cypress.io/) for browser automation
* [Google Chrome](https://www.google.com/chrome/downloads/) as the local browser for testing
* [npm](https://www.npmjs.com/) for dependency management
* [Applitools Eyes](https://applitools.com/platform/eyes/) for visual testing
* [Applitools Ultrafast Grid](https://applitools.com/platform/ultrafast-grid/) for cross-browser execution

