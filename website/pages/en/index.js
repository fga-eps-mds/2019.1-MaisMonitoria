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
              <img className="img-fluid" src="img/about.jpg" alt=""/>
            </div>
            <div className="offset-lg-1 col-lg-6 offset-md-0 col-md-12 about-right">
              <h1>
                The standard <br/> Lorem Ipsum
              </h1>
              <div className="wow fadeIn" data-wow-duration="1s">
                <p>
                  There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think
                  about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that first
                  telescope. It’s exciting to think about setting up your own viewing station.
                </p>
              </div>
              <a href="#" className="primary-btn">Explore Courses</a>
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
                  <img className="img-fluid" src="img/faculty/f1.jpg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Caio Oliveira</h4>
                  <p className="designation">Product Owner</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/caiooliv"><i class="fa fa-github"></i></a>
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
                      <a href="https://www.github.com/lukassxp"><i class="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/f1.jpg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Lucas Siqueira</h4>
                  <p className="designation">Scrum Master</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/lucassiqz"><i class="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/f1.jpg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Matheus Rodrigues</h4>
                  <p className="designation">DevOps</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/matheus-rn"><i class="fa fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/f1.jpg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>João Pedro</h4>
                  <p className="designation">Desenvolvedor</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/jpcirqueira"><i class="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/f1.jpg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Lucas Alexandre</h4>
                  <p className="designation">Desenvolvedor</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/lucasA27"><i class="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/f1.jpg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Matheus de Cristo </h4>
                  <p className="designation">Desenvolvedor</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/MatheusEstanislau"><i class="fa fa-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/f1.jpg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Moacir Júnior</h4>
                  <p className="designation">Desenvolvedor</p>

                  <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/MoacirMSJ"><i class="fa fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center d-flex align-items-center">
                <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                  <div className="thumb d-flex justify-content-center">
                    <img className="img-fluid" src="img/faculty/f2.jpg" alt=""/>
                  </div>
                  <div className="meta-text text-center">
                    <h4>Renan Cristyan</h4>
                    <p className="designation">Desenvolvedor</p>

                    <div className="align-items-center justify-content-center d-flex">
                      <a href="https://www.github.com/RCristyan"><i class="fa fa-github"></i></a>
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
                <h1>Features That Make Us Hero</h1>
                <p>
                  If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for
                  as low as $.17 each.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-inner row">
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-crown"></i>
                <h4>Lorem Ipsum</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-briefcase"></i>
                <h4>Lorem Ipsum</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-medall-alt"></i>
                <h4>Lorem Ipsum</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-key"></i>
                <h4>Lorem Ipsum</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-files"></i>
                <h4>Lorem Ipsum</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="ti-headphone-alt"></i>
                <h4>Lorem Ipsum</h4>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
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
          <section className="home-banner-area relative" style={{height: "38.7em"}}>
            <div className="container">
              <div className="row fullscreen d-flex align-items-center justify-content-center">
                <div className="banner-content col-lg-8 col-md-12">
                  <div><br/><br/><br/><br/><br/><br/><br/></div>
                  <h1 className="wow fadeIn" data-wow-duration="4s"> The standard Lorem Ipsum <br/> on the Web</h1>
                  <p className="text-white">
                    In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space
                    telescope.
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
