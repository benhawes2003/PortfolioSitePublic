import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
    const [websites, setWebsites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = '/api/website/featured'
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setWebsites(data);
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

    const responsive = {
        desktop: {
            breakpoint: { max: 9999, min: 1024 },
            items: 3,
            arrows: true,
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
            arrows: false,
        }
    };

    return <>
        <section className="featured-projects">
            <h3>Featured Work</h3>
            <Carousel showDots={true} containerClass="featured-projects-slider" itemClass="featured-projects-slider__item" responsive={responsive}>
                {
                    websites.map(function (item, i) {
                        return (
                            <div key={`site-featured-${i}`}>
                                <Link className="featured-projects-slider__item__inner" to={`/my-work?goto=${item.id}`}>
                                    <div className="text-container">
                                        <h4>{item.siteName}</h4>
                                        <p>{item.summary}</p>
                                    </div>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        )
                    })
                }
            </Carousel>
        </section>
    </>
}

export default FeaturedProjects;