const RawHtml = ({ rawHtml }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    );
}

export default RawHtml;