
import {Link} from 'react-router-dom';


import './estilo-topo.css';



const Topo = () => (
    <header>
       <div>
       <div className="cabecalho container-limite">
            <div>
                <img src="assets/logo.png" alt='logo' title='logo' />
            </div>

            <nav>
               <ul type='none'>

                    <li><Link className='opcao opcao-home' to='/'>Home</Link></li>
                    <li> <Link className='opcao opcao-sobre' to='/pagina-sabores'>Sabores</Link></li>
                    <li> <Link className='opcao opcao-sabores' to='/pagina-sobre'>Sobre</Link></li>

               </ul>
            
            </nav>
        </div>
       </div>
    </header>
);
export default Topo;