import { useState } from 'react';
import logoImage from '../../assets/images/star_wars_logo.png';
import menuMobile from '../../assets/images/menu_mobile.png';
import { Link } from 'react-router-dom';
import {
    HeaderStyled,
    LogoStyled,
    MenuStyled,
    MenuMobileStyled
} from './headerStyles';


export const Header = () => {
    const [show, setShow] = useState(false);

    const showMenu = () => {
        setShow(!show);
    }

    return (
        <HeaderStyled>
            <MenuMobileStyled onClick={showMenu}>
                <img src={menuMobile} alt="menu_mobile" />
            </MenuMobileStyled>

            <LogoStyled>
                <img src={logoImage} alt="star_wars_logo" width='100px' />
            </LogoStyled>

            <MenuStyled show={show}>
                <li><Link onClick={showMenu} to='/'>Home</Link></li>
                <li><Link onClick={showMenu} to='/movies'>Movies</Link></li>
                <li><Link onClick={showMenu} to='/characteres'>Characters</Link></li>
                <li><Link onClick={showMenu} to='/vehicles'>Vehicles</Link></li> 
            </MenuStyled>
        </HeaderStyled>
    )
}