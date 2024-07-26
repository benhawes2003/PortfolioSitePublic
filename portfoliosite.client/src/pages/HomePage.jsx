import Intro from "../components/Intro";
import FeaturedProjects from "../components/FeaturedProjects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

const HomePage = () => {
    return <>
        <div className="grid-container">
            <Intro/>
            <FeaturedProjects />
            <Experience />
            <Skills />
        </div>
    </>
}

export default HomePage;