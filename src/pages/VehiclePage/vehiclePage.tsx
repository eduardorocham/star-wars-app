import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import { Vehicle } from '../../types/vehicle';
import './vehiclePage.css';

export const VehiclePage = () => {
    const [loading, setLoading] = useState(false);
    const [vehicle, setVehicle] = useState<Vehicle>();

    const getVehicle = async (id: string) => {
        setLoading(true);
        const vehicle = await api.getVehicle(id);
        setVehicle(vehicle);
        setLoading(false);
    }

    const params = useParams();

    useEffect(()=>{
        if(params.id) {
            getVehicle(params.id);
        }
    }, []);

    return (
        <section className='vehicle_Page'>
            <div className='vehiclePage_img'>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} alt={vehicle?.name} />
            </div>
            <div className='vehiclePage_data'>
                <div className='vehiclePage_name'>{vehicle?.name}</div>
                <div className='vehiclePage_bar'></div>
                <div className='vehiclePage_infos'>
                    <div className='vehiclePage_infos-left'>
                        <div className='vehiclePage_info'><span>Model:</span>{vehicle?.model}</div>
                        <div className='vehiclePage_info'><span>Manufacturer:</span>{vehicle?.manufacturer}</div>
                        <div className='vehiclePage_info'><span>Cost in credits:</span>{vehicle?.cost_in_credits}</div>
                        <div className='vehiclePage_info'><span>Lenght:</span>{vehicle?.length}</div>
                    </div>
                    <div className='characterPage_infos-right'>
                        <div className='characterPage_info'><span>Crew:</span>{vehicle?.crew}</div>
                        <div className='characterPage_info'><span>Passengers:</span>{vehicle?.passengers}</div>
                        <div className='characterPage_info'><span>Cargo Capacity:</span>{vehicle?.cargo_capacity}</div>
                        <div className='characterPage_info'><span>Consumables:</span>{vehicle?.consumables}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}