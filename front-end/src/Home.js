import Contact from "./Contact.js"
import ArtSlider from "./components/ArtSlider.js"
import ProjectSlider from "./components/ProjectSlider.js"

function Home() {
    return (
        <div className = "Home">
            <p>Insert Landing Page Elements Here</p>
            <h1>Projects</h1>
            <ProjectSlider />
            <h1>Art</h1>
            <ArtSlider />
            <h1>Contact Me</h1>
            <Contact />       
        </div>
    )
}

export default Home;
