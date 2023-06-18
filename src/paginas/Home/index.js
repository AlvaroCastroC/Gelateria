import React from 'react';

import Topo from '../../componentes/Topo/';
import Rodape from '../../componentes/Rodape/';

import './estilo-home.css';



function PaginaInicial() {
    return(
    <body>
        <Topo />
        <main>
        <section className='secao-banner'>
            <div className='conteudo-banner container-limite'>
                <h1>sorvete artesanal </h1>
            </div>

        </section>

        <section className='secao-sabores container-limite'>
            <div className=' conteudo'>
                    <div>
                        <img src='assets/banner-sabores.jpg' alt='imagem sorvete' title='imagem sorvete' />
                    </div>
                    <div className='container-texto'>
                        <h4>Nossos sabores</h4>
                        <p>Novos e deliciosos</p>
                        
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>

                    </div>

            </div>
        </section>

        <section className='secao-eventos container-limite'>
              <div className=' conteudo'>
                    <div  className='container-texto'>
                            <h4>Nosso eventos</h4>
                            <p>Delicias com sorvete!</p>

                            <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>

                        </div>

                        <div>
                            <img src='assets/eventos-image.jpg' alt='imagem de uma estande' title='imagem de uma estande' />
                        </div>
              </div>
        </section>

        <section className='secao-eventos'>
            <div className='container-limite conteudo'>
                    <div>
                        <img src='assets/sobre-image.jpg' alt='imagem de pessoas segurando sorvete' title='imagem pessoas' />
                    </div>
                    

                    <div  className='container-texto'>
                        <h4>Sobre nós</h4>
                            <p>Alegria em cada casquinha!</p>
                            
                            <p>Venha tomar o melhor sorvete da região aqui com a gente! nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>
            </div>
        </section>
        </main>

        <Rodape />
    </body>
    );
}
export default PaginaInicial;