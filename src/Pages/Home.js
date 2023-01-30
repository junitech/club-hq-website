import NavBar from '../Components/NavBar'

function Home() {
    return (
        <>
            <NavBar />
            <div className="container-lg">
            <figure className="text-center quote">
                <blockquote>The odds of getting primary bone cancer and having to have a hindquarter amputation are similar to the odds of winning the Euromillions lottery</blockquote>
                <figcaption>
                    &mdash; <cite>Professor of Oncology, 2011</cite>
                </figcaption>
            </figure>

            <p>Welcome to the website of Club HQ, a mutual support service set up by hindquarter amputees for those with existing or upcoming hindquarter amputations. We are a UK organization but we have members from Eire, the United States and New Zealand.</p>
            </div>
        </>
    );
}

export default Home;
