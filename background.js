
chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({highlighted: true, currentWindow: true}, tabs => {
      createIncognitoTab(tabs)
    })
})

chrome.commands.onCommand.addListener(command => {
  if (command === "open-tab-in-incognito") {
    chrome.tabs.query({highlighted: true, currentWindow: true}, tabs => {
      createIncognitoTab(tabs)
    })
  }
})

function createIncognitoTab(tabs) {
  const urls = tabs.map(tab => tab.url);

  chrome.windows.create({
    url: urls,
    incognito: true,
  })
}