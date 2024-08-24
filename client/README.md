# Material App Pro - React Admin & Dashboard Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

You'll need to have Node 12.0.0 or up. We recommend upgrading to the LTS version of NodeJS available at [https://nodejs.org/](https://nodejs.org/). You can also use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

## Quick Start

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3300](http://localhost:3300) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Testing guidelines

Test should following this [guide](https://github.com/mawrkus/js-unit-testing-guide)

Effectively our tests should look like:
```javascript
describe('[unit of work]', () => {
  describe('when [scenario/context]', () => {
    beforeEach(() => {
      // Test setup
    });

    it('should [expected behaviour]', () => {
    });
  });
});
```

## Tests

Every file should have an equivalent file in the __tests__ with at least one test for that file inside

The only exception for this is the app entrypoint (src/Comment.tsx) as it contains IIFE for rendering
(which isn't possible to test).

Tests should always be able to run in isolation (as they are run in parallel). A test should _never_ depend on the
result of a previous test.

## Docker
docker build -t intranet-ui .

docker run -dp 3300:3000 intranet-ui
