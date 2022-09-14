import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';

import { Person } from '../../types/person';

import './characterPage.css';

export const CharacterPage = () => {
    const [loading, setLoading] = useState(false);
    const [character, setCharacter] = useState<Person>();

    const getCharacter = async (id: string) => {
        setLoading(true);
        const person = await api.getCharacter(id);
        setCharacter(person);
        setLoading(true);
    }

    const params = useParams();

    useEffect(()=>{
        if(params.id) {
            getCharacter(params.id);
        }
    }, [])

    return (
        
        <div className='character_Page'>
            <div className='characterPage_img'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} alt={character?.name} />
            </div>
            <div className='characterPage_data'>
                <div className='characterPage_name'>{character?.name}</div>
                <div className='characterPage_bar'></div>
                <div className='characterPage_infos'>
                    <div className='characterPage_infos-left'>
                        <div className='characterPage_info'><span>Height:</span>{character?.height}</div>
                        <div className='characterPage_info'><span>Mass:</span>{character?.mass}</div>
                        <div className='characterPage_info'><span>Hair Color:</span>{character?.hair_color}</div>
                        <div className='characterPage_info'><span>Skin Color:</span>{character?.skin_color}</div>
                    </div>
                    <div className='characterPage_infos-right'>
                        <div className='characterPage_info'><span>Eye Color:</span>{character?.eye_color}</div>
                        <div className='characterPage_info'><span>Birth Year</span>{character?.birth_year}</div>
                        <div className='characterPage_info'><span>Gender:</span>{character?.gender}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}