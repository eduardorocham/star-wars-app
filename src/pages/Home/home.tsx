import { Button } from '../../components/Button/button';
import { Link } from 'react-router-dom';
import './home.css';

export const Home = () => {
    return (
        <div>   
            <section className="section_movies">
                <div className="opacity">
                    <div className="container">
                        <div className='info'>
                            <div className='info_title'>Conheça os principais filmes</div>
                            <div className='info_bar'></div>
                            <div className='info_desc'>
                                Um guia sobre os principais filmes da franquia
                            </div>
                            <Link to='/movies'><Button text='Go to movies'/></Link>
                        </div>
                    </div>
                </div>  
            </section>
            <section className="section_characteres">
                <div className="opacity">
                    <div className="container">
                        <div className='info'>
                            <div className='info_title'>Conheça os principais personagens</div>
                            <div className='info_bar'></div>
                            <div className='info_desc'>
                                Um guia sobre os principais personagens da  franquia
                            </div>
                            <Link to='/characteres'><Button text='Go to characters'/></Link>
                        </div>
                    </div>
                </div>  
            </section>
            <section className="section_veiculos">
                <div className="opacity">
                    <div className="container">
                        <div className='info'>
                            <div className='info_title'>Conheça os principais veículos</div>
                            <div className='info_bar'></div>
                            <div className='info_desc'>
                                Um guia sobre os principais veículos da  franquia
                            </div>
                            <Link to='/vehicles'><Button text='Go to vehicles'/></Link>
                        </div>
                    </div>
                </div>  
            </section>
        </div>
    )
}