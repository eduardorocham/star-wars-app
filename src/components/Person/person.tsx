import { Link } from 'react-router-dom';
import { Person as PersonType } from '../../types/person';
import './person.css';

type Props = {
    data: PersonType,
}

export const Person = ({data}:Props) => {
    const url = data.url;
    const urlArray = url.split('/');
    const characterId = urlArray[urlArray.length - 2];

    return (
        <Link to={`/characters/${characterId}`} className="person">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`} alt={data.name} />
            <div className='person_desc'>
                <div className='person_bar'>
                    <div className='person_bar-item1'></div>
                    <div className='person_bar-item2'></div>
                </div>
                <div className="person_title">{data.name}</div>
            </div> 
        </Link>
    )
}