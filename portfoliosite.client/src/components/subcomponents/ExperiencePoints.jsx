import RawHtml from '../../helpers/RawHtml';

const ExperiencePoints = ({points}) => {
    if (points != null && points.length > 0) {
        return <>
            {
                points.map((item) => {
                    return (
                        <div key={`experience-point-${item.id}`} className="experience-point">
                            <p className="point-title">{item.name}</p>
                            {item.jobTitle != "" ? (<p className="point-job-title">{item.jobTitle}</p>) : ""}
                            <p className="point-date">{item.date}</p>
                            <p className="point-location">{item.location}</p>
                            <div className="point-description standard-content content">
                                <RawHtml rawHtml={item.description} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    }
    else {
        return <>
        <p>Loading...</p>
        </>
    }
}

export default ExperiencePoints;