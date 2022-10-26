export const splitContentByType = (content) => {
  // sort content by date in descending order
  const contentArr = Object.keys(content).map((key) => content[key])
  const contentSorted = contentArr.sort((a, b) => Date.parse(b.published) - Date.parse(a.published))

  // split content by content Type
  var splitContent = {}
  contentSorted.forEach((item) => {
      const targetContent = splitContent[item.contentType]
      splitContent[item.contentType] = (targetContent) ? [ ...targetContent, item] : [item]
  })
  return splitContent
}