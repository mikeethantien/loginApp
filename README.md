# Mike's loginApp

## Prerequisites
This Angular application is being hosted using **node** so please make sure **node.js** has been installed before you can run the appication. See [How to install node.js](https://nodejs.org/en/download/package-manager/).

## Running the application
1. Download the project and unzip it.
2. Open a new terminal and cd into the directory where the project has been unzipped.
3. Execute **npm install** to make sure all the dependencies have been installed (all the dependencies should be stored under **/node_modules** already).
4. Execute **node app/app.js**.
5. Open up any browser and enter **localhost:8080** in the address bar (make sure you don't have another server running on localhost:8080).
6. The loginApp should be loaded successfully.

## Running the Jasmine unit test using Karma
`The test cases are included in /tests. There are only 3 tests in test.js; however, since there's a minified version of the file, you will see 6 test cases being run when you follow the steps below:`

1. Execute **karma start karma.conf.js** to execute the unit tests.
2. Chrome should be started automatically, and you should see **Executed 6 of 6 SUCCESS**

## Files
1. **/app/app.js** - This is what is being executed by node to launch the project. The script uses **Express** to create a server and load **/app/views/index.html** by default. It also has the POST authenticate rest API defined in there.
2. **/app/views/index.html** - The main page of the application.
3. **/app/public/css/styles.css** - This is the css used to centre the login window and stylize the UI based on the given mockup.
4. **/app/public/js/controller.js** and **/app/public/js/controller.min.js** - The application is loading the minified version; however, the orignal file has been left there for viewing. The file defines and configures the Angular module consumed by the page. It also creates the module controller which handles the form submission.
5. **/app/public/templates/login.html** - The template which gets loaded by the controller and injected to index.html. It contains the template of the login UI. 
6. **/tests/test.js** and **/tests/test.min.js** - The files which contain the test cases.

## Notes
1. The application uses bootstrap for the basic styles and responsiveness.
2. All the form validation is done by Angular directives hence it is not included in the automated test cases. The log in button is disabled until both fields have been validated, so the data that is being sumbitted will always have the valid format.
3. The tests were written using jasmin and angular-mocks to mock up the authenticate POST API.
