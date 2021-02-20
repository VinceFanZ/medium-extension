chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.greeting == 'FreeReading') {
    sendResponse({ farewell: 'ok' })
    replaceContent()
  }
})

function replaceContent() {
  fetch(window.location.href, {
    method: 'GET',
    credentials: 'omit',
    mode: 'no-cors',
  })
    .then((response) => response.text())
    .then((content) => {
      var newHTML = document.open('text/html', 'replace')
      newHTML.write(content)
      newHTML.close()
    })
}
