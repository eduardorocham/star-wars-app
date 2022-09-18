import React, { useState, useEffect } from "react";
import { api } from "../../api";
import { Person } from "../../components/Person/person";
import { LoadingSpinner } from "../../components/LoadingSpinner/loadingSpinner";
import { Person as PersonType } from "../../types/person";
import './characteres.css';
import { Pagination } from "../../components/Pagination/pagination";

export const Characteres = () => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<PersonType[]>([]);
    const [page, setPage] = useState(1);

    //Paginação:
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentpage, setCurrentPages] = useState(0);
    const pages = Math.ceil(87 / itemsPerPage);
    

    const loadCharacteres = async () => {
        setLoading(true);
        const characteres = await api.getCharacteres(page);
        setList(characteres.results);
        setLoading(false);
    }

    const nextPage = (e) => {
        setPage(parseInt(e.target.value));
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
                        {list.map((item, index)=>(
                            <Person key={index} data={item}/>
                        ))}
                    </div>

                    <div className='pagination'>
                        {Array.from(Array(pages), (item, index) => {
                            return (
                                <button className='button_pagination' onClick={nextPage}>
                                    {index}
                                </button>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
        
    )
}