import { Link } from 'react-router-dom';
import { Vehicle as VehicleType } from '../../types/vehicle';
import './vehicle.css';

type Props = {
    id: number,
    data: VehicleType,
    page: number
}

export const Vehicle = ({id, data, page}:Props) => {
    const url = data.url;
    const urlArray = url.split('/');
    console.log(urlArray[5]);

    return (
        <Link to={`/vehicles/${urlArray[5]}`} className="vehicle">
            <img src= {page <= 2 ? `https://starwars-visualguide.com/assets/img/vehicles/${urlArray[5]}.jpg` : 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'} alt={data.name} />
            <div className='vehicle_desc'>
                <div className='vehicle_bar'>
                        <div className='vehicle_bar-item1'></div>
                        <div className='vehicle_bar-item2'></div>
                </div>
                <div className="vehicle_title">{data.name}</div>
            </div>
        </Link>
    )
}