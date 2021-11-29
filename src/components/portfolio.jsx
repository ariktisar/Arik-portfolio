import React from "react";

//import stock
import head from '../img/head.jpeg'
import heli from '../img/heli.jpeg'
import doc from '../img/doc.jpeg'
import music from '../img/music.jpeg'
import car from '../img/car.jpeg'

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  This are three of my projects
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://assignhero12.web.app/" target="_blank">
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
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={head1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={head2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={head3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://assignhero11.web.app/" target="_blank">
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
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
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
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://fireforhero.web.app/" target="_blank">
                  <div className="work-img">
                    <img src={doc} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Surgery Plus</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML5, CSS3, React, React Bootstrap, React Router, Firebase
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={doc1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={doc2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={doc3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://epic-bose-c45965.netlify.app/" target="_blank">
                  <div className="work-img">
                    <img src={music} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Creative Learners Music Studio</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML5, CSS3, React, React Bootstrap, React Router, Firebase
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={doc1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={doc2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={doc3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://elegant-meninsky-d8402c.netlify.app/" target="_blank">
                  <div className="work-img">
                    <img src={car} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Classic Car Show</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML5, CSS3, React, React Bootstrap, React Router, Firebase
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={doc1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={doc2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={doc3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
