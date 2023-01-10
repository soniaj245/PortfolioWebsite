import './AboutMe.css'
import me from "./images/me.jpeg"

function AboutMe() {
    return (
        <div className = "AboutMe">
            <img src = {me} alt = "Photo of Myself"/>
            <h1>About Me</h1>
            <p>  Sonia Jain is a New York based software engineer and designer who specializes in a variety of coding languages, as well as graphic design. Sonia attended her undergraduate New York University, where she earned specializations in Media, Culture, and Communications as well as Computer Science. During university, she also experienced a variety of professional experience, ranging from graphic design experience as a social media intern and programming experience during her time as a software engineer intern. In her free time, you will probably find her drawing on her tablet or playing fun games on her Nintendo Switch.</p>
        </div>
    )
}

export default AboutMe;
