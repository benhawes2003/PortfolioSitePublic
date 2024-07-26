import ExperiencePoints from './subcomponents/ExperiencePoints'
import { useState, useEffect } from 'react';

const Experience = () => {
    const [points, setPoints] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPoints = async () => {
            const apiUrl = '/api/generic/experience'
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setPoints(data);
            }
            catch (error) {
                console.log('Error fetching data, ', error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchPoints();
    }, []);

    return <>
        <section className="experience">
            <div className="experience__item">
                <h3>My Education</h3>
                <ExperiencePoints points={points.filter(n => n.type === 1) } />
            </div>

            <div className="experience__item">
                <h3>My Work Experience</h3>
                <ExperiencePoints points={points.filter(n => n.type === 2) } />
            </div>
        </section>
    </>
}

export default Experience;