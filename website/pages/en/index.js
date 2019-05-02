/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Meio extends React.Component {
  render(){
    return (
      <div>
      <section className="about-area section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6 about-left">
              <img className="img-fluid" src="img/usage.gif" alt=""/>
            </div>
            <div className="offset-lg-1 col-lg-6 offset-md-0 col-md-12 about-right">
              <h1>
                O que é o app?
              </h1>
              <div className="wow fadeIn" data-wow-duration="1s">
              <p>
                  Nos modelos atuais as monitorias disponibilizadas pela faculdade estão limitadas, pois há um número específico de alunos que podem ser monitores, horários conflitantes.
                  Com isso em mente, o <strong>+Monitoria</strong> ajuda os estudantes à compartilhar e adquirir conhecimentos referentes as disciplinas da FGA.  
                </p>
              </div>
              <a href="https://homolog.maismonitoria.com/" className="primary-btn">Visite a plataforma</a>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

class Membros extends React.Component {
  render(){
    return(
        <section className="faculty-area section-gap">
		      <div className="container">
			      <div className="row justify-content-center">
				      <div className="col-lg-8">
					      <div className="section-title text-center">
						      <h1>Time de Desenvolvimento</h1>
					      </div>
				      </div>
			      </div>
            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/caio.png" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Caio Oliveira</h4>
                  <p className="designation">Product Owner</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/caiooliv"><i className="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/p5.jpeg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Lucas Macêdo</h4>
                  <p className="designation">Software Architect</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/lukassxp"><i className="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/lucassiqz.png" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Lucas Siqueira</h4>
                  <p className="designation">Scrum Master</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/lucassiqz"><i className="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/matheus.png" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Matheus Rodrigues</h4>
                  <p className="designation">DevOps</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/matheus-rn"><i className="fa fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/joao.jpg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>João Pedro</h4>
                  <p className="designation">Desenvolvedor</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/jpcirqueira"><i className="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/LucasA.png" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Lucas Alexandre</h4>
                  <p className="designation">Desenvolvedor</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/lucasA27"><i className="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/cristo.jpeg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Matheus de Cristo </h4>
                  <p className="designation">Desenvolvedor</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/MatheusEstanislau"><i className="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/Moacir.jpg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Moacir Júnior</h4>
                  <p className="designation">Desenvolvedor</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/MoacirMSJ"><i className="fa fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center d-flex align-items-center">
                <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                  <div className="thumb d-flex justify-content-center">
                    <img className="img-fluid" src="img/faculty/Renan.jpg" alt=""/>
                  </div>
                  <div className="meta-text text-center">
                    <h4>Renan Cristyan</h4>
                    <p className="designation">Desenvolvedor</p>

                    <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/RCristyan"><i className="fa fa-github"></i></a>
                    </div>
                  </div>
                </div>
            </div>    
          </div>
	      </section>
    );
  }
}

class Features extends React.Component {
  render(){
    return(
      <section className="feature-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h1>Principais funcionalidades</h1>
              </div>
            </div>
          </div>
          <div className="feature-inner row">

          <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-files"></i>
                <h4>Interface PWA</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
                  <p>
                    Para a melhor experiência dos usuários oferecemos uma aplicação web progressiva, com fácil instalação e usabiliade agradável.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-headphone-alt"></i>
                <h4>Monitorias</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
                  <p>
                    Cadastre suas monitorias com o conteúdo que deseja ensinar e combine as aulas com aqueles que desejam aprender com você.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-crown"></i>
                <h4>Feed</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                  <p>
                  Veja as monitorias mais recentes e que mais se encaixam no seu perfil.                                                                                                                                                                      
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-briefcase"></i>
                <h4>Pesquisa</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
                  <p>
                    Pesquise por uma monitoria que melhor se encaixa no seu perfil, usando os filtros que melhor se adequem à você.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-medall-alt"></i>
                <h4>Ranking</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
                  <p>
                    Veja sua colocação no ranking dos melhores monitores, com as colocações baseadas no seu engajamento do app.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-key"></i>
                <h4>Seguir</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                  <p>
                    Siga seus monitores preferidos para que possa ver novas monitorias e atividades do monitor. 
                  </p>
                
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
        <div>
          <div>
          <section className="home-banner-area relative">
            <div className="container">
              <div className="row fullscreen d-flex align-items-center justify-content-center">
                <div className="banner-content col-lg-8 col-md-12">
                  <h1 className="wow fadeIn" data-wow-duration="4s"><span style={{color:'#0E4C72'}}>+</span>Monitoria</h1>
                  <p className="text-white" style={{fontSize: 30}}>
                  Uma aplicação para integrar alunos que desejam aprender, e os que desejam ensinar.
                  </p>
                </div>
              </div>
            </div>
              <div className="rocket-img">
                <img src="img/rocket.png" alt=""/>
              </div>
          </section>
          </div>
          <Meio />
          <Features />
          <Membros />
          <div id="back-top">
		        <a title="Go to Top" href="#"></a>
	        </div>
        </div>
    );
  }
}


module.exports = Index;
