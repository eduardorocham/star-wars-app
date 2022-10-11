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
                            <div className='info_title'>Know the main films</div>
                            <div className='info_bar'></div>
                            <div className='info_desc'>
                                A guide to the main films of the franchise
                            </div>
                        </div>
                    </div>
                    <Link to='/movies'><Button text='Go to movies'/></Link>
                </div>  
            </section>
            <section className="section_characteres">
                <div className="opacity">
                    <div className="container">
                        <div className='info'>
                            <div className='info_title'>Know the main characters</div>
                            <div className='info_bar'></div>
                            <div className='info_desc'>
                                A guide to the main characteres of the franchise
                            </div>
                        </div>
                    </div>
                    <Link to='/characters'><Button text='Go to characters'/></Link>
                </div>  
            </section>
            <section className="section_veiculos">
                <div className="opacity">
                    <div className="container">
                        <div className='info'>
                            <div className='info_title'>Know the main vehicles</div>
                            <div className='info_bar'></div>
                            <div className='info_desc'>
                                A guide to the main vehicles of the franchise
                            </div>
                        </div>
                    </div>
                    <Link to='/vehicles'><Button text='Go to vehicles'/></Link>
                </div>  
            </section>
        </div>
    )
}