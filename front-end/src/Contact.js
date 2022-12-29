function Contact() {
    return (
        <div className = "Contact">
            <p>Contact Me Below</p>
            <form>
                <label>
                    Name:
                    <input type = "text" />
                </label>
                <label>
                    Email:
                    <input type = "text" />
                </label>
                <label>
                    Subject:
                    <input type = "text" />
                </label>
                <label>
                    Message:
                    <input type = "text" />
                </label>
            </form>
        </div>
    )
}

export default Contact;
