const Tag = ({ contentType, tag, className }) => {
  const contentTypeStr = contentType.charAt(0).toUpperCase() + contentType.slice(1)
  return (
      <p className={`text-xs font-jakarta-bold text-custom-blue ${className}`}>{`${contentTypeStr} > ${tag}`}</p>
  )
}

export default Tag

Tag.defaultProps = {
  contentType: 'Content Type',
  tag: 'Tag',
  className: '',
}