import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #121317;

    @media (max-width:414px) {
        padding: 5px 0;
        flex-direction: column;
        align-items: flex-start;
    }
`

export const LogoStyled = styled.div`
    margin-left: 36px;
    margin-right: 30px;

    @media (max-width:414px) {
        display: none;
    }
`

export const MenuMobileStyled = styled.div`
    display: none;

    @media (max-width:414px) {
        display: block;
        margin-left: 10px;
    }
`

type MenuStyledProps = {
    show: boolean;
}
export const MenuStyled = styled.div<MenuStyledProps>`
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;

    @media (max-width:414px) {
        display: ${(props) => props.show ? 'block' : 'none'};
        position: absolute;
        width: 70vw;
        height: calc(100vh - 60px);
        z-index: 999;
        left: 0;
        top: 60px;
        background-color: #121317;

        li {
            margin: 30px 0;
        }

        li a {
            font-size: 20px;
        }
    }
`

export const NavLink = styled(Link)`
    color: #FFF;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 15px;
    padding: 16px 18px;
    text-transform: uppercase;
    cursor: pointer;
    
    &.active {
        color: #DFCC1D;
    }

    &:hover {
        color: #DFCC1D;
    }
`

