if (typeof browser !== 'undefined') {
  chrome = browser
}

chrome.contextMenus.create({
  type: 'normal',
  title: 'Read Medium',
  onclick: replaceContent,
})

function replaceContent() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: 'FreeReading' }, function (response) {
      console.log(response.farewell)
    })
  })
}
