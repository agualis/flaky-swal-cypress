### Flaky visibility errors in cypress

Sample project to demonstrate cypress visibility issue when browser is not focused while running tests in headed mode

### Steps to reproduce

#### Install dependencies
```
$ npm install
```

#### Run app
```
$ npm run serve
```
#### Tests always pass in headless mode: 
```
$ ./node_modules/.bin/cypress run
```

#### Tests always pass in desktop mode: 
```
$ ./node_modules/.bin/cypress open
```

#### Tests always fail in "run headed" mode (both chrome and electron) if you run them with the browser window in the background
```
$ ./node_modules/.bin/cypress run --headed --browser=chrome
- Put the browser window in background 
- Wait for the test to fail
```





