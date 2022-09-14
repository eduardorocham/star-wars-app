import './personCicle.css';
import { Person} from '../../types/person';

type Props = {
    data: Person;
}

export const PersonCicle = ({data}:Props) => {
    const url = data.url;
    const filmId = url[url.length - 2];

    return (
        <div className="person_cicle">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${filmId}.jpg`} alt={data.name} />
        </div>
    )
}