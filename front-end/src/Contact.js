function Contact() {
    return (
        <div className = "Contact">
            <p>Contact Me Below</p>
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
    )
}

export default Contact;
