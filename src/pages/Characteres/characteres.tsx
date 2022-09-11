import { useState, useEffect } from "react";
import { api } from "../../api";
import { Person } from "../../components/Person/person";
import { LoadingSpinner } from "../../components/LoadingSpinner/loadingSpinner";
import { Person as PersonType } from "../../types/person";
import './characteres.css';

export const Characteres = () => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<PersonType[]>([]);
    const [page, setPage] = useState(1);

    const loadCharacteres = async () => {
        setLoading(true);
        const characteres = await api.getCharacteres(page);
        setList(characteres.results);
        setLoading(false);
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    useEffect(()=>{
        loadCharacteres();
    }, [page])

    return (
        <div>
            {loading && 
                <LoadingSpinner />
            }

            {list && 
                <div className="characteres">
                    <div className="characteres_container">
                        <button onClick={nextPage}>Ir para próxima página</button>
                        {list.map((item, index)=>(
                            <Person key={index} data={item}/>
                        ))}
                    </div>
                </div>
            }
        </div>
        
    )
}