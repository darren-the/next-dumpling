export const limitSize = (text) => {
  var splitText = text.slice(0, process.env.smallDescLimit).split(' ')
  var joinedText = ''
  while (splitText.length > 0) {
    const lastWord = splitText.pop()
    if (lastWord.match(/^[a-zA-Z]+$/g)) {
      splitText.push(lastWord)
      joinedText = splitText.join(' ')
      break
    }
  }
  return joinedText + '...'
}