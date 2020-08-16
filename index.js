chrome.tabs.onUpdated.addListener(() => {
  chrome.tabs.executeScript(null, {
    code: `
      const passwordFields = document.querySelectorAll("input[type='password']")
      passwordFields.forEach((f) => f.type = 'text')
    `
  })
})
