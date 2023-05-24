import './NavBar.css';

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span>Menu</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Home</a></li>
                                    <li><a className="dropdown-item" href="/about-club-hq">About Club HQ</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">About HQAs</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/about-the-surgery">About the surgery</a></li>
                                    <li><a className="dropdown-item" href="/prosthetics">Prosthetics</a></li>
                                    <li><a className="dropdown-item" href="/mental-health">Mental health</a></li>
                                    <li><a className="dropdown-item" href="/phantom-pain">Phantom pain</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Living with an HQA</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/mentoring-and-counselling">Mentoring and counselling</a></li>
                                    <li><a className="dropdown-item" href="/facebook-secret-group">Facebook secret group</a></li>
                                    <li><a className="dropdown-item" href="/fitness">Fitness</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Practical Support</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/financial-support">Financial support</a></li>
                                    <li><a className="dropdown-item" href="/driving-and-travel">Driving and travel</a></li>
                                    <li><a className="dropdown-item" href="/wheelchairs">Wheelchairs</a></li>
                                </ul>
                            </li>
                             <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Stories and Bios</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/sam-coleman">Sam Coleman</a></li>
                                    <li><a className="dropdown-item" href="/martin-austin">Martin Austin</a></li>
                                    <li><a className="dropdown-item" href="/members">Members</a></li>
                                    <li><a className="dropdown-item" href="/one-mans-journey">One man's journey</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/faqs">FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="/our-supporters">Our supporters</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
