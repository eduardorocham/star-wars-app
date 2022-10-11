import { useState } from 'react';
import logoImage from '../../assets/images/star_wars_logo.png';
import menuMobile from '../../assets/images/menu_mobile.png';
import {
    HeaderStyled,
    LogoStyled,
    MenuStyled,
    MenuMobileStyled,
    NavLink
} from './headerStyles';


export const Header = () => {
    const [show, setShow] = useState(false);
    const [activeStyle, setActiveStyle] = useState(false);

    const showMenu = (e: any) => {
        setShow(!show);
    };

    return (
        <HeaderStyled>
            <MenuMobileStyled onClick={showMenu}>
                <img src={menuMobile} alt="menu_mobile" />
            </MenuMobileStyled>

            <LogoStyled>
                <img src={logoImage} alt="star_wars_logo" width='100px' />
            </LogoStyled>

            <MenuStyled show={show}>
                <NavLink onClick={showMenu} to='/'>
                    Home
                </NavLink>
                <NavLink onClick={showMenu} to='/movies'>
                    Movies
                </NavLink>
                <NavLink onClick={showMenu} to='/characters'>
                    Characters
                </NavLink>
                <NavLink onClick={showMenu} to='/vehicles'>
                    Vehicles
                </NavLink>
            </MenuStyled>
        </HeaderStyled>
    )
}