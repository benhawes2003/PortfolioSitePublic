import { useState, useEffect } from 'react';

const SiteFrames = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = '/api/generic/skills'
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setSkills(data);
            }
            catch (error) {
                console.log('Error fetching data, ', error)
            }
            finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    return <>
        <section className="skills">
            <h3>My Skills</h3>
            <div className="skill-container">
                {
                    skills.map(function (item, i) {
                        return (
                            <div key={`skill-${i}`} className="skill">
                                <p>{ item.name }</p>
                            </div>
                        )
                    })
                }
            </div>
            
        </section>
    </>
}

export default SiteFrames;