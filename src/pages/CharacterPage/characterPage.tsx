import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';

import { LoadingSpinner } from '../../components/LoadingSpinner/loadingSpinner';
import { FilmCircle } from '../../components/FilmCicle/filmCircle';

import { Person } from '../../types/person';
import { film } from '../../types/film';

import './characterPage.css';
import { json } from 'stream/consumers';

export const CharacterPage = () => {
    const [loading, setLoading] = useState(false);
    const [character, setCharacter] = useState<Person>();
    const [filmsCharacter, setFilmsCharacter] = useState<film[]>([]);

    const getCharacter = async (id: string) => {
        setLoading(true);

        //Pegar personagem: 
        const person = await api.getCharacter(id);
        setCharacter(person);

        //Pegar filmes do personagem
        const links = person.films;
        const fCharacter : any = [];
        Promise.all(links.map((url: string) => fetch(url).then(response => response.json()))).then(fetchedFilms => fCharacter.push(fetchedFilms));
        console.log(fCharacter);
        setFilmsCharacter(fCharacter);
        console.log(filmsCharacter);
    
        setLoading(false);
    }

    const params = useParams();

    useEffect(()=>{
        if(params.id) {
            getCharacter(params.id);
        }
    }, [])

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
                        <div className='characterFilms'>
                            
                                <div>{filmsCharacter?.map((i, k) => (
                                    <h2 key={k}>{filmsCharacter[k].title}</h2>
                                ))}</div>
                            
                        </div>
                    </div>
                </div>
{/* 
                <>
                    {filmsCharacter && 
                        <div className='characterFilms'>
                            {filmsCharacter.map((i, k) => (
                                <FilmCircle data={i} key={k} />
                            ))}
                        </div>
                    }
                </> */}
            </div>
            }
        </div>
    )
}