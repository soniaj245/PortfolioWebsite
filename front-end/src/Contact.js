import "./Contact.css";

function Contact() {
    return (
        <div className = "Contact">
            <h1>Contact Me!</h1>
            <div className = "ContactBox">
                <div className = "ContactInfo">
                    <h1>Contact<br></br>Information</h1>
                    <p>Fill out the form or contact me with the info below</p>
                    <h2>E: sonia.m.jain31@gmail.com</h2>
                    <h2>L: New York, NY</h2>
                </div>
                <div className = "ContactForm">
                    <form>
                        <label>
                            <input type = "text" placeholder = "Name"/>
                        </label>
                        <label>
                            <input type = "text" placeholder = "Email"/>
                        </label>
                        <label>
                            <input type = "text" placeholder = "Subject"/>
                        </label>
                        <label>
                            <input type = "text" placeholder = "Message"/>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;