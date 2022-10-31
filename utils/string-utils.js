export const limitStrLength = (text) => {
  // Limit length of string
  var splitText = text.slice(0, process.env.smallDescLimit).split(' ')
  var joinedText = ''

  // Ensure the last word is actually a word (for aesthetic purposes)
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