const Why = () => {
    return <>
        <div className="grid-container">
            <section className="why">
                <h1>Why This Website Is So Fast</h1>
                <div className="content-container">
                    <p>
                        Speed and performance are at the core of website development. Here&apos;s why my website stands out in terms of speed:

                        <br /><br /><strong>Single-Page Application (SPA)</strong>
                        <br />My website is built as a Single-Page Application (SPA), which means it loads a single HTML page and dynamically updates content as you interact with the site. This eliminates the need for full page reloads, resulting in a faster and more fluid browsing experience.

                        <br /><br /><strong>React Front-End</strong>
                        <br />I have used React for all front-end development. React&apos;s virtual DOM efficiently updates only the parts of the page that need to change, rather than reloading the entire page. This drastically improves rendering performance and responsiveness.

                        <br /><br /><strong>ASP.NET Core Backend</strong>
                        <br />Our backend is powered by ASP.NET Core, a high-performance, cross-platform framework. This ensures that data processing and server responses are lightning-fast.

                        <br /><br /><strong>Efficient API for Data Retrieval</strong>
                        <br />To seamlessly connect our front-end with our backend, I use an API to retrieve database content efficiently.

                        <br /><br />By combining the latest technologies and best practices in web development, this website not only looks great but also performs exceptionally well.
                    </p>
                </div>

                <a target="_blank" className="standard-button" href="https://github.com/benhawes2003/PortfolioSitePublic">Check Out The Repo</a>
            </section>
        </div>
    </>
}

export default Why;