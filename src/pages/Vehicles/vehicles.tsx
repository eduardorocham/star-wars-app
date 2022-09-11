import { useState, useEffect } from "react";
import { api } from "../../api";
import { Vehicle } from "../../components/Vehicle/vehicle";
import { LoadingSpinner } from "../../components/LoadingSpinner/loadingSpinner";
import { Vehicle as VehicleType } from "../../types/vehicle";
import './vehicles.css';

export const Vehicles = () => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<VehicleType[]>([]);

    const loadVehicles = async () => {
        setLoading(true);
        const vehicles = await api.getVehicles();
        setList(vehicles.results);
        setLoading(false);
    }

    useEffect(()=>{
        loadVehicles();
    },[])

    return (
        <div>
            {loading&& 
                <LoadingSpinner />
            }

            {list &&
                <div className="vehicles">
                    <div className="vehicles_container">
                        {list.map((item, index)=>(
                            <Vehicle id={index} data={item}/>
                        ))
                        }
                    </div>
                </div>
            }
        </div>
        )       
}