import React, { Component } from 'react'
import treatment1 from "../images/treatment1.png";
import treatment5 from "../images/treatment5.jpg";
import treatment3 from "../images/treatment3.jpg";
import treatment4 from "../images/treatment4.jpg";
import aqua from "../images/aqua/aqua.jpg";
import treatment2 from "../images/treatment2.png";
import ayurveda from "../images/ayurveda.jpg";
import anandspa1 from "../images/ananda/anandspa1.jpg";
import anandspa3 from "../images/ananda/anandspa3.jpg";
export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <section id="portfolio" className="section-bg">
            <div className="container">
              <header className="section-header">
                <h3 className="section-title">GALLERY</h3>
              </header>

              <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src={aqua} className="img-fluid" alt="" />
                      <a
                        href="img/portfolio/app1.jpg"
                        data-lightbox="portfolio"
                        data-title="App 1"
                        className="link-preview"
                        title="Preview"
                      >
                        <i className="ion ion-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="ion ion-android-open"></i>
                      </a>
                    </figure>
                    <div className="portfolio-info"></div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img src={treatment1} className="img-fluid" alt="" />
                      <a
                        href="img/portfolio/web3.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Web 3"
                        title="Preview"
                      >
                        <i className="ion ion-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="ion ion-android-open"></i>
                      </a>
                    </figure>
                    <div className="portfolio-info"></div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img src={treatment5} className="img-fluid" alt="" />
                      <a
                        href="img/portfolio/app2.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="App 2"
                        title="Preview"
                      >
                        <i className="ion ion-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="ion ion-android-open"></i>
                      </a>
                    </figure>
                    <div className="portfolio-info"></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src={treatment3} className="img-fluid" alt="" />
                      <a
                        href="img/portfolio/card2.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Card 2"
                        title="Preview"
                      >
                        <i className="ion ion-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div className="portfolio-info"></div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img src={treatment2} className="img-fluid" alt="" />
                      <a
                        href="img/portfolio/web2.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Web 2"
                        title="Preview"
                      >
                        <i className="ion ion-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div className="portfolio-info"></div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img src={ayurveda} className="img-fluid" alt="" />
                      <a
                        href="img/portfolio/app3.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="App 3"
                        title="Preview"
                      >
                        <i className="ion ion-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div className="portfolio-info"></div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src={anandspa1} className="img-fluid" alt="" />
                      <a
                        href="img/portfolio/card1.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Card 1"
                        title="Preview"
                      >
                        <i className="ion ion-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div className="portfolio-info"></div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img src={treatment4} className="img-fluid" alt="" />
                      <a
                        href="img/portfolio/card3.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Card 3"
                        title="Preview"
                      >
                        <i className="ion ion-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div className="portfolio-info"></div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img src={anandspa3} className="img-fluid" alt="" />
                      <a
                        href="img/portfolio/web1.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Web 1"
                        title="Preview"
                      >
                        <i className="ion ion-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div className="portfolio-info"></div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
            </div>
        )
    }
}
