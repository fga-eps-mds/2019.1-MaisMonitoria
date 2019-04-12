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
	
class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/docusaurus.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}


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
                Over 2500 Courses <br/> from 5 Platform
              </h1>
              <div className="wow fadeIn" data-wow-duration="1s">
                <p>
                  There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think
                  about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that first
                  telescope. It’s exciting to think about setting up your own viewing station.
                </p>
              </div>
              <a href="courses.html" className="primary-btn">Explore Courses</a>
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
						      <h1>Membros</h1>
					      </div>
				      </div>
			      </div>
            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
                <div className="thumb d-flex justify-content-center">
                  <img className="img-fluid" src="img/faculty/f1.jpg" alt=""/>
                </div>
                <div className="meta-text text-center">
                  <h4>Ethel Davis</h4>
                  <p className="designation">Sr. Faculty Data Science</p>
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
          <section className="home-banner-area relative" style={{height: "37.2em"}}>
            <div className="container">
              <div className="row fullscreen d-flex align-items-center justify-content-center">
                <div className="banner-content col-lg-8 col-md-12">
                  <h1 className="wow fadeIn" data-wow-duration="4s">We Rank the Best Courses <br/> on the Web</h1>
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
          <Membros />
          <div id="back-top">
		        <a title="Go to Top" href="#"></a>
	        </div>
        </div>
    );
  }
}


module.exports = Index;
