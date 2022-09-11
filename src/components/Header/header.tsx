import './header.css';
import logoImage from '../../assets/images/star_wars_logo.png';
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logoImage} alt="Star_Wars_Logo" />
            </div>
            <div className="header_menu">
                <ul>
                    <Link to='/'><li className="link active">Home</li></Link>
                    <Link to='/movies' className='link active'><li>Movies</li></Link>
                    <Link to='/characteres' className='link'><li>Characters</li></Link>
                    <Link to='/vehicles' className='link'><li>Vehicles</li></Link>
                </ul>
            </div>
        </header>
    )
}