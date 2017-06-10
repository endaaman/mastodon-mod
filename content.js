chrome.runtime.onMessage.addListener(function(request) {
  replaceSelectedText(document.activeElement, request.text)
})

function replaceSelectedText(elem, text) {
  const start = elem.selectionStart
  const end = elem.selectionEnd
  elem.value = elem.value.slice(0, start) + text + elem.value.substr(end)
  elem.selectionStart = start + text.length
  elem.selectionEnd = elem.selectionStart
}
