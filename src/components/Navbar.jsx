import websiteLogo from '../assets/website-logo.png';

function Navbar() {
    return (
        <nav>
            <img src={websiteLogo} alt="Website Logo" className="website-logo" />
        </nav>
    );
}

export default Navbar;
