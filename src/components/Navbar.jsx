import websiteLogo from '../assets/website-logo.png';
import SearchBar from './SearchBar';

function Navbar() {
    return (
        <nav>
            <img src={websiteLogo} alt="Website Logo" className="website-logo" />
            <SearchBar />
        </nav>
    );
}

export default Navbar;
