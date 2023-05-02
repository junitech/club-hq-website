
function ContactUs() {
    return (
        <>
            <h1>Contact us</h1>

            <p>If you are an existing HQA and would like to join Club HQ...</p>

            <p>If you would like a mentor...</p>

            <p>If you have any queries...</p>

            <p>Please list your contact details below with your message and we will respond as soon as possible:</p>

            <form action="https://formspree.io/f/xayzqyna" method="POST">
                <div className="mb-3">
                <label for="full-name" className="form-label">Full name:</label><span>*</span>
                <input type="text" className="form-control" id="full-name" name="full-name" required/>
                </div>

                <div className="mb-3">
                <label for="email-address" className="form-label" >Email address:</label><span>*</span>
                <input type="email" className="form-control" id="email-address" name="email-address"  required/>
                </div>

                <div className="mb-3">
                <label for="phone" className="form-label">Phone number:</label>
                <input type="text" className="form-control" id="phone" name="phone" />
                </div>

                <div className="mb-3">
                <label for="message" className="form-label">Message:</label><span>*</span>
                <textarea className="form-control" id="message" name="message" required></textarea>
                </div>

                <button type="submit" className="btn btn-warning" value="Send">Submit</button>
            </form>
        </>
    );
}

export default ContactUs;
