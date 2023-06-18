import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Sabores from '../paginas/Sabores/'
import PaginaInicial from '../paginas/Home/';
import Sobre from '../paginas/Sobre/';





const Rotas = () => (

    <BrowserRouter>
    <Routes>
        <Route exact path ='/' element= {<PaginaInicial/>}/>
        <Route path='/pagina-sabores' element={<Sabores/>}/>
        <Route path='/pagina-sobre' element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>

);

export default Rotas;