import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../api';

import { film } from '../../types/film';

import './filmPage.css';

export const FilmPage = () => {
    const [film, setFilm] = useState<film>();
    const [idImage, setIdImage] = useState('');

    const getFilm = async (id:string) => {
        const movie = await api.getFilm(id);
        setFilm(movie);
    }

    const params = useParams();


    useEffect(()=>{
        if(params.id) {
            getFilm(params.id)
        }
    }, [])

    return (
        <div className='filmPage'>
            <div className='film_img'>
                <img src={`https://starwars-visualguide.com/assets/img/films/${params.id}.jpg`} alt={film?.title} />
            </div>
            <div className='film_data'>
                <div className='filmPage_title'>{film?.title}</div>
                <div className='filmPage_bar'></div>
                <div className='filmPage_desc'>{film?.opening_crawl}</div>
                <div className='infos'>
                    <div className='filmPage_info'><span>Episode:</span>{film?.episode_id}</div>
                    <div className='filmPage_info'><span>Director:</span>{film?.director}</div>
                    <div className='filmPage_info'><span>Producer:</span>{film?.producer}</div>
                    <div className='filmPage_info'><span>Releaser Data:</span>{film?.release_date}</div>
                </div>
            </div>
        </div>
    )
}