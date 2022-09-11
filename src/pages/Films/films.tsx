import { useState, useEffect } from "react";
import { Film } from "../../components/Film/film";
import { LoadingSpinner } from "../../components/LoadingSpinner/loadingSpinner";
import { film } from "../../types/film";
import { api } from "../../api";
import './films.css'


export const Films = () => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<film[]>([]);

    const loadFilmes = async () => {
        setLoading(true);
        const films = await api.getFilms();
        setList(films.results);
        setLoading(false);
    }

    useEffect(()=>{
        loadFilmes()
    }, [])

    return (
        <div>
            {loading && 
                <LoadingSpinner />
            }
            
            {list && 
                <div className="films">
                    <div className="container_films">
                        {list.map((item, index)=>(
                            <Film key={index} data={item}/>
                        ))}
                    </div>
                </div>
            }  
        </div>
    )
}