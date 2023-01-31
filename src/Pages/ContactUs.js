import NavBar from '../Components/NavBar'

function ContactUs() {
    return (
        <>
            <NavBar />
            <div className="container-lg">
            <h1>Contact us</h1>

            <p>If you are an existing HQA and would like to join Club HQ...</p>

            <p>If you would like a mentor...</p>

            <p>If you have any queries...</p>

            <p>Please list your contact details below with your message and we will respond as soon as possible:</p>

            <form action="https://formspree.io/f/xayzqyna" method="POST">
                <label for="full-name">Full name:</label>
                <input type="text" id="full-name" name="full-name" />

                <label for="email-address">Email address:</label>
                <input type="text" id="email-address" name="email-address" />

                <label for="phone">Phone number:</label>
                <input type="text" id="phone" name="phone" />

                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>

                <input type="submit" value="Send" />
            </form>
            </div>            
        </>
    );
}

export default ContactUs;
