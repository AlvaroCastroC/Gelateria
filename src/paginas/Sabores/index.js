import React from 'react';

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape/';
import './estilo-sabores.css';

function Sabores () {
    return (
        <body>
            <Topo />
            <main>
            <section className='secao-banner-sabores'>
                <div className='conteudo-banner-sabores container-limite'>
                    <h1>nossos sabores </h1>
                </div>

            </section>

            <section className='container-limite'>

                <h2> Sabores de soverte </h2>
               <div className='secao-card'>
                     <div className='card-box'>

                        <div>
                            <img src='assets/sabor-cookies-avela.png' alt='imagem sorvete' title='imagem sorvete' />
                        </div>

                        <div className='container-texto'>
                            <h4>Sorvete de Cookies & Avelã</h4>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                            

                        </div>

                </div>

                <div className='card-box'>

                        <div>
                            <img src='assets/sabor-oreo.png' alt='imagem sorvete' title='imagem sorvete' />
                        </div>
                        
                        <div className='container-texto'>
                            <h4>Sorvete de oreo</h4>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            
                        </div>

                </div>
                <div className='card-box'>

                        <div>
                            <img src='assets/sabor-pistache.png' alt='imagem sorvete' title='imagem sorvete' />
                        </div>
                        
                        <div className='container-texto'>
                            <h4>Sorvete de Pistache</h4>
                            <p>Cremoso sorvete sabor Pistache com pedacinhos de semente.</p>

                        </div>

                </div>

                    <div className='card-box'>

                        <div>
                            <img src='assets/sorbet-kiwi.png' alt='imagem sorvete' title='imagem sorvete' />
                        </div>
                        
                        <div className='container-texto'>
                            <h4>Sorvete de Kiwi</h4>
                            <p>Delicioso e refrescante sorvete sabor Kiwi. Rico em vitamina C.</p>
                          
                        </div>

                </div>

                <div className='card-box'>

                        <div>
                            <img src='assets/sorbet-limao.png' alt='imagem sorvete' title='imagem sorvete' />
                        </div>
                        
                        <div className='container-texto'>
                            <h4>Sorvete de Limão Siciliano</h4>
                            <p>O incrível sorvete gourmet de Limão Siciliano vai te encantar</p>
                        
                        </div>

                </div>

                <div className='card-box'>

                        <div>
                            <img src='assets/sorbet-morango.png' alt='imagem sorvete' title='imagem sorvete' />
                        </div>
                        
                        <div className='container-texto'>
                            <h4>Sorvete de Morango</h4>
                            <p>Sorvete de Morango gourmet tradicional e saboroso.</p>
                            
                        </div>

                </div>
               </div>
            </section>
            </main>

        <Rodape />
    </body>

    );
}
export default Sabores;