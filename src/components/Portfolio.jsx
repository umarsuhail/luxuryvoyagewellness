import React, { Component } from 'react'
import treatment1 from "../images/treatment1.png";
import treatment5 from "../images/treatment5.jpg";
import treatment3 from "../images/treatment3.jpg";
import treatment4 from "../images/treatment4.jpg";
import aqua from "../images/aqua/aqua.jpg";
import treatment2 from "../images/treatment2.png";
import ayurveda from "../images/ayurveda.jpg";
import anandspa1 from "../images/ananda/anandspa1.png";
import anandspa3 from "../images/ananda/anandspa3.jpg";
export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <section id="portfolio" class="section-bg">
            <div class="container">
              <header class="section-header">
                <h3 class="section-title">GALLERY</h3>
              </header>

              <div class="row portfolio-container">
                <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                  <div class="portfolio-wrap">
                    <figure>
                      <img src={aqua} class="img-fluid" alt="" />
                      <a
                        href="img/portfolio/app1.jpg"
                        data-lightbox="portfolio"
                        data-title="App 1"
                        class="link-preview"
                        title="Preview"
                      >
                        <i class="ion ion-eye"></i>
                      </a>
                      <a href="#" class="link-details" title="More Details">
                        <i class="ion ion-android-open"></i>
                      </a>
                    </figure>
                    <div class="portfolio-info"></div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="portfolio-wrap">
                    <figure>
                      <img src={treatment1} class="img-fluid" alt="" />
                      <a
                        href="img/portfolio/web3.jpg"
                        class="link-preview"
                        data-lightbox="portfolio"
                        data-title="Web 3"
                        title="Preview"
                      >
                        <i class="ion ion-eye"></i>
                      </a>
                      <a href="#" class="link-details" title="More Details">
                        <i class="ion ion-android-open"></i>
                      </a>
                    </figure>
                    <div class="portfolio-info"></div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div class="portfolio-wrap">
                    <figure>
                      <img src={treatment5} class="img-fluid" alt="" />
                      <a
                        href="img/portfolio/app2.jpg"
                        class="link-preview"
                        data-lightbox="portfolio"
                        data-title="App 2"
                        title="Preview"
                      >
                        <i class="ion ion-eye"></i>
                      </a>
                      <a href="#" class="link-details" title="More Details">
                        <i class="ion ion-android-open"></i>
                      </a>
                    </figure>
                    <div class="portfolio-info"></div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                  <div class="portfolio-wrap">
                    <figure>
                      <img src={treatment3} class="img-fluid" alt="" />
                      <a
                        href="img/portfolio/card2.jpg"
                        class="link-preview"
                        data-lightbox="portfolio"
                        data-title="Card 2"
                        title="Preview"
                      >
                        <i class="ion ion-eye"></i>
                      </a>
                      <a href="#" class="link-details" title="More Details">
                        <i class="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div class="portfolio-info"></div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="portfolio-wrap">
                    <figure>
                      <img src={treatment2} class="img-fluid" alt="" />
                      <a
                        href="img/portfolio/web2.jpg"
                        class="link-preview"
                        data-lightbox="portfolio"
                        data-title="Web 2"
                        title="Preview"
                      >
                        <i class="ion ion-eye"></i>
                      </a>
                      <a href="#" class="link-details" title="More Details">
                        <i class="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div class="portfolio-info"></div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div class="portfolio-wrap">
                    <figure>
                      <img src={ayurveda} class="img-fluid" alt="" />
                      <a
                        href="img/portfolio/app3.jpg"
                        class="link-preview"
                        data-lightbox="portfolio"
                        data-title="App 3"
                        title="Preview"
                      >
                        <i class="ion ion-eye"></i>
                      </a>
                      <a href="#" class="link-details" title="More Details">
                        <i class="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div class="portfolio-info"></div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                  <div class="portfolio-wrap">
                    <figure>
                      <img src={anandspa1} class="img-fluid" alt="" />
                      <a
                        href="img/portfolio/card1.jpg"
                        class="link-preview"
                        data-lightbox="portfolio"
                        data-title="Card 1"
                        title="Preview"
                      >
                        <i class="ion ion-eye"></i>
                      </a>
                      <a href="#" class="link-details" title="More Details">
                        <i class="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div class="portfolio-info"></div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="portfolio-wrap">
                    <figure>
                      <img src={treatment4} class="img-fluid" alt="" />
                      <a
                        href="img/portfolio/card3.jpg"
                        class="link-preview"
                        data-lightbox="portfolio"
                        data-title="Card 3"
                        title="Preview"
                      >
                        <i class="ion ion-eye"></i>
                      </a>
                      <a href="#" class="link-details" title="More Details">
                        <i class="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div class="portfolio-info"></div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div class="portfolio-wrap">
                    <figure>
                      <img src={anandspa3} class="img-fluid" alt="" />
                      <a
                        href="img/portfolio/web1.jpg"
                        class="link-preview"
                        data-lightbox="portfolio"
                        data-title="Web 1"
                        title="Preview"
                      >
                        <i class="ion ion-eye"></i>
                      </a>
                      <a href="#" class="link-details" title="More Details">
                        <i class="ion ion-android-open"></i>
                      </a>
                    </figure>

                    <div class="portfolio-info"></div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
            </div>
        )
    }
}
