
chrome.action.onClicked.addListener(tab => {
  createIncognitoTab(tab)
})

chrome.commands.onCommand.addListener(command => {
  if (command === "open-tab-in-incognito") {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      createIncognitoTab(tabs[0])
    })
  }
})

function createIncognitoTab(tab) {
  chrome.windows.create({
    url: tab.url,
    incognito: true,
  })
}