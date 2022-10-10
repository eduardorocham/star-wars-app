import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';

import { LoadingSpinner } from '../../components/LoadingSpinner/loadingSpinner';

import { Person } from '../../types/person';
import { film } from '../../types/film';

import './characterPage.css';
import { json } from 'stream/consumers';

export const CharacterPage = () => {
    const [loading, setLoading] = useState(false);
    const [character, setCharacter] = useState<Person>();

    const getCharacter = async (id: string) => {
        setLoading(true);

        //Pegar personagem: 
        const person = await api.getCharacter(id);
        setCharacter(person);

        //Pegar films do personagem
        const links = person.films;
        const filmsCharcater : any = [];
        Promise.all(links.map((url: string) => fetch(url).then(response => response.json()))).then(fetchedFilms => filmsCharcater.push(fetchedFilms));
    
        setLoading(false);
    }

    const params = useParams();

    useEffect(()=>{
        if(params.id) {
            getCharacter(params.id);
        }
    }, [])

    // useEffect(()=>{
    //     const getFilmslink = async (id: string) => {
    //         const data = await api.getCharacter(id);
    //         const links = data.films;
    //         const filmsCharcater : any = [];
    //         Promise.all(links.map((url: string) => fetch(url).then(response => response.json()))).then(fetchedFilms => filmsCharcater.push(fetchedFilms));
    //         console.log(filmsCharcater);
    //     };
    //     if (params.id ) {
    //         getFilmslink(params.id);
    //     }
    // }, [])

    return (
        <div>
            {loading &&
                <LoadingSpinner />
            }

            {character &&
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
            }
        </div>
    )
}