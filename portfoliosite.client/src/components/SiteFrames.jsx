import $ from 'jquery';
import { useState, useEffect } from 'react';
import RawHtml from '../helpers/RawHtml';

const SiteFrames = () => {
    const [websites, setWebsites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = '/api/website'
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

    function toggleSite(id) {
        var siteFrame = $(`#site-frame-${id}`);
        siteFrame.find('.site-container').slideToggle(300);
        siteFrame.find('.toggle-icon').toggleClass('fa-plus').toggleClass('fa-minus');
    }

    function getQueryParam(param) {
        let urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    let gotoId = getQueryParam('goto');

    // Scroll to the element with the ID from the 'goto' parameter
    if (gotoId) {
        let targetElement = $(`#site-frame-${gotoId}`);
        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top - 150
            }, 500);

            //toggleSite(gotoId);
        }
    }

    return <>
        <section className="site-frames">
            {
                websites.map(function (item, i) {
                    return (
                        <div key={`site-frame-${i}`} id={`site-frame-${item.id}`} className="site-frame">
                            <p className="site-name">{item.siteName}</p>
                            <button type="button" onClick={() => toggleSite(item.id)}>
                                <p className="button-text">View this website <i className="fa-solid fa-plus toggle-icon"></i></p>

                                <div style={{ display: 'none' }} className="site-container">
                                    <a target="_blank" href={`https://${item.url}`}>
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                    {/*<iframe loading="lazy" src={`https://${item.url}`} />*/}
                                    <img src={`/api/image/screenshot/${item.id}`} />

                                    <div className="content-container">
                                        <div className="standard-content content">
                                            <RawHtml rawHtml={item.details} />
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    )
                })
            }
        </section>
    </>
}

export default SiteFrames;