import { useState, useEffect } from "react";
import { api } from "../../api";
import { Vehicle } from "../../components/Vehicle/vehicle";
import { LoadingSpinner } from "../../components/LoadingSpinner/loadingSpinner";
import { Vehicle as VehicleType } from "../../types/vehicle";
import './vehicles.css';

export const Vehicles = () => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<VehicleType[]>([]);
    const [page, setPage] = useState(1);

    //Paginação:
    const [itemsPerPage] = useState(10);
    const pages = Math.ceil(39 / itemsPerPage);

    const loadVehicles = async () => {
        setLoading(true);
        const vehicles = await api.getVehicles(page);
        setList(vehicles.results);
        setLoading(false);
    }

    const nextPage = (e: any) => {
        if (page !== parseInt(e.target.value)) {
            setPage(parseInt(e.target.value));
            setList([]);
        }
    }

    useEffect(()=>{
        loadVehicles();
    },[page])

    return (
        <div>
            {loading&& 
                <LoadingSpinner />
            }

            {list &&
                <div className="vehicles">
                    <div className="vehicles_container">
                        {list.map((item, index)=>(
                            <Vehicle id={index} data={item} page={page}/>
                        ))}
                    </div>
                    <div className='pagination'>
                        {Array.from(Array(pages), (item, index) => {
                            return (
                                <button value={index + 1} className={index + 1 === page ?'button_pagination-active' : 'button_pagination'} onClick={nextPage} key={index}>
                                    {index + 1}
                                </button>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
        )       
}