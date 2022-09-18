import './button.css';

type Props = {
    text: string;
}

export const Button = ({text}:Props) => {
    return (
        <button className='button_geral'>
            {text}
        </button>
    )
}