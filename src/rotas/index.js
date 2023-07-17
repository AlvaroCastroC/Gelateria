import React from 'react';

import {HashRouter, Routes, Route} from 'react-router-dom';

import Sabores from '../paginas/Sabores/'
import PaginaInicial from '../paginas/Home/';
import Sobre from '../paginas/Sobre/';


function Rotas () {
    return (

        <HashRouter>
            <Routes>
            <Route exact path ='/' element= {<PaginaInicial/>}/>
            <Route path='/pagina-sabores' element={<Sabores/>}/>
            <Route path='/pagina-sobre' element={<Sobre/>}/>
            </Routes>
         </HashRouter>
         
    );
}

export default Rotas;