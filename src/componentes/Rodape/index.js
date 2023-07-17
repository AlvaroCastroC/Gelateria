import './estilo-rodape.css';

function Rodape () {
    return (
        <footer>
            <section className='container-limite rodape'>
                <div>
                    <img src='assets/logo.png' alt="logo" title="logo" />
                </div>
                <div className='container-dados'>
                    <div>
                        <h5>Endereço</h5>
                        <p>Av. Bernadinho de Campos, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>

                    <div>
                        <h5>Contato</h5>
                        <p>info@meusite.com</p>
                        <p>Telefone: (11) 3456-7890</p>
                    </div>

                    <div>
                        <h5>Horários</h5>
                        <p>Aberto todos os dias</p>
                        <p>10:00 - 22:00</p>
                    </div>

                </div>

            </section>
                <p>Gelateria. Orgulhosamente desenvolvido por Álvaro de C. Cunha</p>
        </footer>
    );
}
export default Rodape;