import styled from 'styled-components';
import  styles  from 'styled-components';

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
    margin-left: 10px;
`

type MenuStyledProps = {
    show: boolean;
}
export const MenuStyled = styled.ul<MenuStyledProps>`
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li a {
        color: #FFF;
        font-family: 'Arial', sans-serif;
        font-weight: bold;
        font-size: 15px;
        padding: 16px 18px;
        text-transform: uppercase;
        cursor: pointer;
    }

    li a:hover {
        color: #DFCC1D;
    }

    @media (max-width:414px) {
        display: ${(props) => props.show ? 'block' : 'none'};
    }
`

