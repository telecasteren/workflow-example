# Workflow repo for the CA

Playground for testing workflow with `husky`, `eslint`, `prettier`, and code testing with `playwright` and `vitest`.

---

**Table of content**

- [Start and run](#start-here)
- [Format and lint](#formatting-and-linting)
- [Testing](#tests)
- [All scripts](#all-scripts)
- [.env](#using-env)

---

### Start here

**Clone the repo and set it up:**

```bash
git clone https://github.com/telecasteren/workflow-repo-ca.git
cd workflow-repo-ca
```

```bash
npm install # Installs dependencies
```

**Run the project:**

```bash
npm run dev # Builds the app in dev mode
npm run start # Starts the app in live-server at port=5500
```

---

### Formatting and linting

**ESLint**

```bash
npx eslint # linting entire project
npx eslint myFolder/myFile.js # linting specific folder
```

**Prettier**

```bash
npx prettier . --write # Runs prettier on entire project
npx --write myFolder/myFile.js # Runs prettier on specific folder
```

**Husky**<br/>
In the pre-commit file, you'll find this line: `npx lint-staged` <br/>
When committing changes, this will lint and format all staged files before the files are actually being committed.

---

### Tests

- Find all unit tests [here](tests/unit).
- Find all end-to-end (e2e) tests [here](tests/e2e).

**Unit testing with Vitest:**

Run the command below to see if tests pass or fail in the console.

```bash
npm run test:unit
```

**End to end testing with Playwright:**

- Playwright will automatically start the server before testing the code.
- These tests _do not_ run in full parallel, you can find/edit Playwright config [here](playwright.config.js).

```bash
npm run test:e2e
# Run tests normally

npm run test:e2e:ui
# Run with UI mode

npm run test:e2e:head
# Show the browser while testing

npm run test:e2e:debug
# Run in debug mode
```

---

### All scripts

```bash
npm run dev # Builds the app in dev mode and reports linting issues
npm run build # Builds the app for production and fixes linting issues
npm run start # Starts the app with live-server

npm run lint # Lints entire project and reports errors
npm run lint:fix # Lints entire project and fixes errors
npm run format # Formatting entire project
npm run format:check # Checking the formatting on the entire project

npm run test:unit # Testing unit by unit with vitest
npm run test:e2e # Testing with playwright in terminal, if error a report is given
npm run test:e2e:ui # Testing with playwright directly in the UI
npm run test:e2e:head # Testing with playwright with the browser open
npm run test:e2e:debug # Testing with playwright in debug mode
```

---

### .env names and usage

Find them [here](.env.example)
