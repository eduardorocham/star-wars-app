import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from '../pages/Home/home';
import { Films } from "../pages/Films/films";
import { Characteres } from "../pages/Characters/characters";
import { Vehicles } from "../pages/Vehicles/vehicles";
import { Header } from "../components/Header/header";
import { FilmPage } from "../pages/FilmPage/filmPage";
import { CharacterPage } from "../pages/CharacterPage/characterPage";
import { VehiclePage } from "../pages/VehiclePage/vehiclePage";
import { Footer } from "../components/Footer/footer";

export const MainRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/movies' element={<Films/>} />
                <Route path='/characters' element={<Characteres />} />
                <Route path='/vehicles' element={<Vehicles />} />
                <Route path='/movies/:id' element={<FilmPage/>} />
                <Route path='/characters/:id' element={<CharacterPage />} />
                <Route path='/vehicles/:id' element={<VehiclePage />} />
            </Routes>
            <Footer />
        </Router>
    )
}