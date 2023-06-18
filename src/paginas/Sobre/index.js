import React from 'react';

import Topo from '../../componentes/Topo';

import Rodape from '../../componentes/Rodape/';
import './estilo-sobre.css';

function Sobre (){
    return(
        <body>
        <Topo />
        <main>
        <section className='secao-banner-sobre'>
            <div className='conteudo-banner-sobre container-limite'>
                <h1>Sobre nós </h1>
            </div>

        </section>

        <section className='secao-sobre container-limite'>
            <h2>A Gelateria</h2>
            <h4>Nós simplismente amamos sorvete!</h4>
            
            <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
              sorvete produzido. Fazemos o melhor sorvete para os nossos
              clientes e gostamos de receber elogios. Estamos operando desde
              2009 com as melhores matérias-primas para a produção final do
              sorvete. Vendemos tanto para varejo como para atacado.</p>

            <p>Nossos clientes podem comprar os nossos sorvetes e degustar na
              nossa loja ou levar para sua residência e aproveitar junto com a
              família. Também vendemos para estabelecimentos e criamos eventos
              como festa de aniversário, formaturas e eventos empresariais. Para
              contratar os nossos serviços, basta entrar em contato conosco.
              Iremos proporcionar o melhor atendimento e os melhores produtos
              para você fazer a sua festa mais saborosa, com o melhor sorvete da
              cidade.</p>

            <div className='imagens-sobre'>
                <img src='assets/sobre-image.jpg' alt='imagem com pessoas' title='imagem com pessoas segurando sorvete' />

                <img src='assets/sorveteria.jpg' alt='sorveteria' title='sorveteria'/>

               

            </div>
        </section>
        </main>

        <Rodape />
    </body>

    );
}

export default Sobre;