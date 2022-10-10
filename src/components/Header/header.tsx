import { useState } from 'react';
import logoImage from '../../assets/images/star_wars_logo.png';
import menuMobile from '../../assets/images/menu_mobile.png';
import { Link } from 'react-router-dom';
import {
    HeaderStyled,
    LogoStyled,
    MenuStyled,
    MenuMobileStyled,
    List
} from './headerStyles';


export const Header = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(true);

    const showMenu = () => {
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
                <Link onClick={showMenu} to='/'>
                    <List>Home</List>
                </Link>
                <Link onClick={showMenu} to='/movies'>
                    <List>Movies</List>
                </Link>
                <Link onClick={showMenu} to='/characteres'>
                    <List>Characters</List>
                </Link>
                <Link onClick={showMenu} to='/vehicles'>
                    <List>Vehicles</List>
                </Link>
            </MenuStyled>
        </HeaderStyled>
    )
}