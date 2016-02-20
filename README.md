# twitter-app
Twitter application to view the top 10 tweets of @cnnbrk and any other twitter user.

## Running the application
Having cloned the application from this github repository, you build it and
run it with the following commands:

1) Retrieve required modules
```
sudo npm install
```
(Note: this is required to run JSHint and the unit tests)

2) Run the application
```
DEBUG=tweets:* npm start
```

##Running JSHint and Unit tests
Grunt has been set up and configured in this application. To run JSHint and the unit tests
run the following default command:
```
grunt
```

##Further development

This application requires further development past the 24hour period. this would include:
* Improved data validation on the request parameters
* Movement of sensitive config to a seperate file that is referenced with runtime vars.
* Cross-browser CSS implemention on the front-end.
* Improved front-end graphics & performance.
* Reduction in the cyclomatic complexity of the API get function.
* Improved code coverage with the target being > 80%.
* Integration testing through creating a tunnel to saucelabs/browserstack.