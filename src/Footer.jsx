import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Footer.css';
import './Footer.responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logoConstellation from './img/ConstellationLogo.png';

const Footer = () => {

  const isResponsive = useMediaQuery({ query: '(min-width: 200px)' && '(max-width: 768px)' });
 
  const [isLinksDropdownOpen, setLinksDropdownOpen] = useState(false);
  const toggleLinksDropdown = () => {
        setLinksDropdownOpen(!isLinksDropdownOpen);
      };

  const [isSobreDropdownOpen, setSobreDropdownOpen] = useState(false);
  const toggleSobreDropdown = () => {
        setSobreDropdownOpen(!isSobreDropdownOpen);
      };

  const [isAtendimentoDropdownOpen, setAtendimentoDropdownOpen] = useState(false);
  const toggleAtendimentoDropdown = () => {
        setAtendimentoDropdownOpen(!isAtendimentoDropdownOpen);
      };

      return (
        <div>
            {isResponsive ? (
          <footer className='myFooter'>
            <div className='containerFooter'>
              <section className='sectionLinks'>
                  <h1 onClick={toggleLinksDropdown}>Links Rápidos {isLinksDropdownOpen ? '▲' : '▼'}</h1>
                  {isLinksDropdownOpen && (
                  <div>
                      <p><a href="#"> Perguntas Frequentes</a></p>
                      <p><a href="#"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</a></p>
                      <p><a href="#">Email</a></p>
                      <p><a href="#">Endereço</a></p>
                      </div>
                      )}
               </section>
      
               <section className='sectionSobre'>
                  <h1 onClick={toggleSobreDropdown}>Sobre a Constellation Seguros {isSobreDropdownOpen ? '▲' : '▼'}</h1>
                  {isSobreDropdownOpen && (
                  <div>
                      <p><a href="#">Quem Somos</a></p>
                      <p><a href="#">Nossa História</a></p>
                      <p><a href="#">Notícias</a></p>
                      <p><a href="#">Sustentabilidade</a></p>
                      </div>
                      )}
               </section>
      
               <section className='sectionAtendimento'>
                 <h1 onClick={toggleAtendimentoDropdown}>Atendimento 24 horas {isAtendimentoDropdownOpen ? '▲' : '▼'}</h1>
                   {isAtendimentoDropdownOpen && (
                     <div>
                        <h3>Selecione seu seguro:</h3>
                          <p><a href="https://www.hdiseguros.com.br/servicos/assistencia-24h" target="_blank" rel="noopener noreferrer">HDI</a></p>
                          <p><a href="https://www.mapfre.com.br/atendimento/nossos-telefones/" target="_blank" rel="noopener noreferrer">Mapfre</a></p>
                          <p><a href="https://www.bradescoseguros.com.br/clientes/atendimento/telefones-bradesco-seguros" target="_blank" rel="noopener noreferrer">Bradesco</a></p>
                          <p><a href="https://www.itau.com.br/seguros/sinistro" target="_blank" rel="noopener noreferrer">Itaú</a></p>
                          <p><a href="https://simularituran.com.br/?gad_source=1&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buMDdfGvxNEyhfbbnEoe2v1SMxtaIvf-VrVr8RAZPM5Of5Y2cn9MLWsaAj3wEALw_wcB" target="_blank" rel="noopener noreferrer">Ituran Seguros</a></p>
                          <p><a href="https://www.tokiomarine.com.br/atendimento/" target="_blank" rel="noopener noreferrer">Tokio Marine</a></p>
                          <p><a href="https://suhaiseguradora.com/contato/" target="_blank" rel="noopener noreferrer">Suhai</a></p>
                          <p><a href="https://www.portoseguro.com.br/faqs/como-peco-assistencia-24h" target="_blank" rel="noopener noreferrer">Porto seguro</a></p>
                          <p><a href="https://www.allianz.com.br/sobre-allianz/sala-de-imprensa/WhatsApp-assistencia-24H.html" target="_blank" rel="noopener noreferrer">Allianz Seguro</a></p>
                          <p><a href="https://www.libertyseguros.com.br/Pages/atendimento/nossos-telefones.aspx" target="_blank" rel="noopener noreferrer">Liberty Seguros</a></p>
                          <p><a href="https://portal.sulamericaseguros.com.br/canaisdeatendimento/" target="_blank" rel="noopener noreferrer">SulAmérica</a></p>
                          <p><a href="https://www.metlife.com.br/suporte/fale-conosco/" target="_blank" rel="noopener noreferrer">MetLife</a></p>
                          <p><a href="https://www.aliroseguro.com.br/Pages/atendimento/ouvidoria.aspx#:~:text=Telefone%3A%200800%20%2D740%2D3994,Deficientes%20auditivos%3A%200800%20721%209104." target="_blank" rel="noopener noreferrer">Aliro Seguro</a></p>
                          <p><a href="https://akadseguros.com.br/contato/" target="_blank" rel="noopener noreferrer">AKAD Seguros</a></p>
                      </div>
                      )}
               </section>

               <section className='icon'>
                <img src={logoConstellation} alt="" />
                  <h2>Acompanhe a Constellation Seguros nas Redes Sociais</h2>
                    <a href="https://www.instagram.com/seu_perfil_instagram" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.facebook.com/seu_perfil_facebook" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>  
            </section>
        </div>
           
        <div className='containerInferior'>

<hr />

          <section className='sectionContainerInferior'>
            <a href="#">Privacidade</a>
            <a href="#">Procon</a>
            <a href="#">Constellation Seguros em um clique</a>
            <a href="#">Ajuda</a>
          </section>
        </div>
    
    </footer>
          ) : (
            <footer className='myFooter'>
              <div className='containerFooter'>
                <section className='sectionLinks'>
                  <h1>Links Rápidos</h1>
                    <p><a href="#"> Perguntas Frequentes</a></p>
                    <p><a href="#"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</a></p>
                    <p><a href="#">Email</a></p>
                    <p><a href="#">Endereço</a></p>
                </section>

                <section className='sectionSobre'>
                  <h1>Sobre a Constellation Seguros</h1>
                    <p><a href="#">Quem Somos</a></p>
                    <p><a href="#">Nossa História</a></p>
                    <p><a href="#">Notícias</a></p>
                    <p><a href="#">Sustentabilidade</a></p>
                </section>

                <section className='sectionAtendimento'>
                  <h1 onClick={toggleAtendimentoDropdown}>Atendimento 24 horas {isAtendimentoDropdownOpen ? '▲' : '▼'}</h1>
                    {isAtendimentoDropdownOpen && (
                      <div>
                        <h3>Selecione seu seguro:</h3>
                          <p><a href="https://www.hdiseguros.com.br/servicos/assistencia-24h" target="_blank" rel="noopener noreferrer">HDI</a></p>
                          <p><a href="https://www.mapfre.com.br/atendimento/nossos-telefones/" target="_blank" rel="noopener noreferrer">Mapfre</a></p>
                          <p><a href="https://www.bradescoseguros.com.br/clientes/atendimento/telefones-bradesco-seguros" target="_blank" rel="noopener noreferrer">Bradesco</a></p>
                          <p><a href="https://www.itau.com.br/seguros/sinistro" target="_blank" rel="noopener noreferrer">Itaú</a></p>
                          <p><a href="https://simularituran.com.br/?gad_source=1&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buMDdfGvxNEyhfbbnEoe2v1SMxtaIvf-VrVr8RAZPM5Of5Y2cn9MLWsaAj3wEALw_wcB" target="_blank" rel="noopener noreferrer">Ituran Seguros</a></p>
                          <p><a href="https://www.tokiomarine.com.br/atendimento/" target="_blank" rel="noopener noreferrer">Tokio Marine</a></p>
                          <p><a href="https://suhaiseguradora.com/contato/" target="_blank" rel="noopener noreferrer">Suhai</a></p>
                          <p><a href="https://www.portoseguro.com.br/faqs/como-peco-assistencia-24h" target="_blank" rel="noopener noreferrer">Porto seguro</a></p>
                          <p><a href="https://www.allianz.com.br/sobre-allianz/sala-de-imprensa/WhatsApp-assistencia-24H.html" target="_blank" rel="noopener noreferrer">Allianz Seguro</a></p>
                          <p><a href="https://www.libertyseguros.com.br/Pages/atendimento/nossos-telefones.aspx" target="_blank" rel="noopener noreferrer">Liberty Seguros</a></p>
                          <p><a href="https://portal.sulamericaseguros.com.br/canaisdeatendimento/" target="_blank" rel="noopener noreferrer">SulAmérica</a></p>
                          <p><a href="https://www.metlife.com.br/suporte/fale-conosco/" target="_blank" rel="noopener noreferrer">MetLife</a></p>
                          <p><a href="https://www.aliroseguro.com.br/Pages/atendimento/ouvidoria.aspx#:~:text=Telefone%3A%200800%20%2D740%2D3994,Deficientes%20auditivos%3A%200800%20721%209104." target="_blank" rel="noopener noreferrer">Aliro Seguro</a></p>
                          <p><a href="https://akadseguros.com.br/contato/" target="_blank" rel="noopener noreferrer">AKAD Seguros</a></p>
                      </div>
                  )}
                </section>

                <section className='icon'>
                  <img src={logoConstellation} alt="" />
                    <h2>Acompanhe a Constellation Seguros nas Redes Sociais</h2>
                      <a href="https://www.instagram.com/seu_perfil_instagram" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href="https://www.facebook.com/seu_perfil_facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
            
                </section>
              </div>
       
              <div className='containerInferior'>
<hr />
                <section className='sectionContainerInferior'>
                  <a href="#">Privacidade</a>
                  <a href="#">Procon</a>
                  <a href="#">Constellation Seguros em um clique</a>
                  <a href="#">Ajuda</a>
                </section>
              </div>

    </footer>
          )}
        </div>
      );
    };


export default Footer;
