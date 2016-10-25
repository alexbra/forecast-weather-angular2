# Weather Forecast Widget

This widget built on Angular 2 powered by Dark Sky API. 
Design very similar to provided in a Google search. 
By default, displayed weather at Seattle, WA. 
ALso you can choose 3 other cities. 
In a future, I will add geolocation to set a city at a start of application.

<a href="https://run.plnkr.co/plunks/ZY4GWMeiIejiDA1CFNGy/">Demo on plunker</a>

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Clone repo and run application

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/angular/quickstart  my-proj
cd my-proj
npm run
```

### Cross-Origin issue with localhost in Chrome

To run this application on a local machine in Chrome browser and aviod security error 
need to add `--disable-web-security` kay in a Chrome shortcut

## Developemnt process and application structure

Application contains such parts as: 

- main component to run application
- widget and selected day components 
- forecast service component to handle all server requests and responses
- Forecast and Day models
- constants stored in separeted file
