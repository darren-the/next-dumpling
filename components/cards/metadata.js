const Metadata = (props) => {
    const date = new Date(props.published)
    const dateString = `${new Intl.DateTimeFormat("en-US", { month: "short"}).format(date)} ${date.getDate()}, ${date.getFullYear()}`

    return (
        <div className="grid grid-cols-2">
            <div>
                <p className="inline font-jakarta-medium text-custom-darkgray">By </p>
                <p className="inline font-jakarta-bold text-black">{props.author}</p>
            </div>
            <p className="font-jakarta-medium text-sm text-custom-darkgray text-right">{dateString}</p>
        </div>
    )
}

export default Metadata

Metadata.defaultProps = {
    author: "Anonymous",
    published: "2022-01-01",
}