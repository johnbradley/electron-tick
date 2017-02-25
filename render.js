const {ipcRenderer} = require('electron')

const WAIT_MS = 1000

function requestCounterUpdate() {
  ipcRenderer.send('asynchronous-message', 'update-counter')
  setTimeout(requestCounterUpdate, WAIT_MS)
}

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  var val = document.getElementById("val")
  val.innerText = arg
})

requestCounterUpdate()



