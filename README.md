# electron-tick
Electron Simple Counter

## Setup:
- Install electron command line program: https://github.com/electron/electron
- Start App from within this project's root folder: `electron .`

## Main Files
- __main.js__ - main program that creates the browser window and maintains a counter
- __index.html__ - webpage that main.js shows in the browser window includes render.js
- __render.js__ - runs as a separate process for each browser window

## Messaging
- __render.js__ sends an async message to __main.js__ for it to update the counter and sets a timer to ask again in a second
- __main.js__ receives this message and adds 1 to the counter and sends an async message to __render.js__ with the new value
- __render.js__ receives a new value and updates the span to show the results
