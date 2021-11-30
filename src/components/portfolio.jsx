import React from "react";

//import stock
import head from '../img/head.jpeg'
import heli from '../img/heli.jpeg'
import doc from '../img/doc.jpeg'
import music from '../img/music.jpeg'
import car from '../img/car.jpeg'
import Headphonedet from '../img/Headphonedet.jpg'
import Headphone1 from '../img/Headphone1.png'
import Headphone2 from '../img/Headphone2.png'
import Headphone3 from '../img/Headphone3.png'
import helidet from '../img/helitourdet.png'
import heli1 from '../img/Helitour1.png'
import heli2 from '../img/Helitour2.png'
import heli3 from '../img/Helitour3.png'
import surgerydet from '../img/surgerydet.png'
import surgery1 from '../img/Surgery1.png'
import surgery2 from '../img/Surgery2.png'
import surgery3 from '../img/Surgery3.png'
import musicdet from '../img/musicdet.png'
import music1 from '../img/Music1.png'
import music2 from '../img/Music2.png'
import music3 from '../img/Music3.png'
import cardet from '../img/cardet.png'
import car1 from '../img/Car.png'
import car2 from '../img/Car1.png'
import car3 from '../img/Car2.png'



class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  These are five of my projects
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
               
                  <div className="work-img">
                    <img src={head} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Headphone Mania</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML5, CSS3, React, React Bootstrap, React Router, NodeJS, ExpressJS, MongoDB, Firebase
                          </span>
                        </div>
                        
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href={head} data-lightbox="gallery-vmarine">
                          <span className="ion-ios-plus-outline"></span>
                          </a>
                          <a href="https://assignhero12.web.app/" target="_blank" rel="noopener noreferrer">
                        <h2 className="w-title">Live Site</h2>
                        </a>
                        <a href="https://github.com/arikint/Headphone-Mania-Client-Side" target="_blank" rel="noopener noreferrer">
                        <h2 className="w-title">GitHub</h2>
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
       
                <a
                  href={Headphonedet}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Headphone1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Headphone2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Headphone3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">

                  <div className="work-img">
                    <img src={heli} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">HeliTour</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML5, CSS3, React, React Bootstrap, React Router, NodeJS, ExpressJS, MongoDB, Firebase
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href={heli} data-lightbox="gallery-aguadeluz">
                          <span className="ion-ios-plus-outline"></span>
                          </a>
                          <a href="https://assignhero11.web.app/" target="_blank" rel="noopener noreferrer">
                        <h2 className="w-title">Live Site</h2>
                        </a>
                        <a href="https://github.com/arikint/HeliTour-Client-Side" target="_blank" rel="noopener noreferrer">
                        <h2 className="w-title">GitHub</h2>
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                <a
                  href={helidet}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={heli1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={heli2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={heli3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">

                  <div className="work-img">
                    <img src={doc} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Surgery Plus</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML5, CSS3, React, React Bootstrap, React Router, Firebase, React Hooks
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href={doc} data-lightbox="gallery-todo">
                          <span className="ion-ios-plus-outline"></span>
                          </a>
                          <a href="https://fireforhero.web.app/" target="_blank" rel="noopener noreferrer">
                        <h2 className="w-title">Live Site</h2>
                        </a>
                        <a href="https://github.com/arikint/Surgery-Plus" target="_blank" rel="noopener noreferrer">
                        <h2 className="w-title">GitHub</h2>
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                <a
                  href={surgerydet}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={surgery1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={surgery2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={surgery3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">

                  <div className="work-img">
                    <img src={music} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Creative Learners</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML5, CSS3, React, React Bootstrap, React Router
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href={music} data-lightbox="gallery-mus">
                          <span className="ion-ios-plus-outline"></span>
                          </a>
                          <a href="https://epic-bose-c45965.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <h2 className="w-title">Live Site</h2>
                        </a>
                        <a href="https://github.com/arikint/Creative-Learners-Music-Studio" target="_blank" rel="noopener noreferrer">
                        <h2 className="w-title">GitHub</h2>
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                <a
                  href={musicdet}
                  data-lightbox="gallery-mus"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={music1}
                  data-lightbox="gallery-mus"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={music2}
                  data-lightbox="gallery-mus"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={music3}
                  data-lightbox="gallery-mus"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">

                  <div className="work-img">
                    <img src={car} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Classic Car Show</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML5, CSS3, React, React Bootstrap
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href={car} data-lightbox="gallery-car">
                          <span className="ion-ios-plus-outline"></span>
                          </a>
                          <a href="https://elegant-meninsky-d8402c.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <h2 className="w-title">Live Site</h2>
                        </a>
                        <a href="https://github.com/arikint/Classic-Car-Show" target="_blank" rel="noopener noreferrer">
                        <h2 className="w-title">GitHub</h2>
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                <a
                  href={cardet}
                  data-lightbox="gallery-car"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={car1}
                  data-lightbox="gallery-car"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={car2}
                  data-lightbox="gallery-car"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={car3}
                  data-lightbox="gallery-car"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
