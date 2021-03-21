
chrome.action.onClicked.addListener(tab => {
  createIncognitoTab(tab)
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
  console.log(urls)

  chrome.windows.create({
    url: urls,
    incognito: true,
  })
}