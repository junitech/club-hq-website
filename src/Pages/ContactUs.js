import NavBar from '../Components/NavBar'

function ContactUs() {
    return (
        <>
            <NavBar />
            <div className="container-lg">
            <h1>Contact us</h1>

            <form action="https://formspree.io/f/xayzqyna" method="POST">
                <input type="email" name="_replyto" />
                <textarea name="body"></textarea>
                <input type="submit" value="Send" />
            </form>
            </div>            
        </>
    );
}

export default ContactUs;
