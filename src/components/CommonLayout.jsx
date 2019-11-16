import React, { Component } from 'react'

export default class CommonLayout extends Component {
    render() {
        return (
            <div className="wrapper" style={{ background: '#716d4d' }}>
                <div>
                    <div className="header">
                        <img
                            src={this.props.headerImage}
                            className="background-Medical-spa"
                            style={{ width: "100%" }}
                            alt="backround-image"
                        ></img>
                        <div className="container">
                            <h1 className="heading container">{this.props.heading}</h1>
                        </div>
                    </div>
                </div>
                <div
                    class="container"
                    style={{ marginTop: 80, background: "#ece6b7" }}
                >
                    <header style={{ padding: 20 }}>
                        <h2>
                            <b> {this.props.title}</b>
                        </h2>
                    </header>
                    <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div class="col-xl-6 col-lg-6">
                            <img
                                class="img-fluid mb-3 mb-lg-0"
                                src={this.props.image1}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="featured-text text-center text-lg-left">
                                <h4>{this.props.contentTitle}</h4>
                                <p class="text-black-50 mb-0">
                                    {this.props.content}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div class="col-lg-6">
                            <img class="img-fluid" src={this.props.image2} alt="" />
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-grey" style={{ color: '#a1a1a1', padding: 20 }}>{this.props.contentTitle2}</h4>
                                        <p class="mb-0 text-white-50">
                                            {this.props.content2}
                                        </p>
                                        <hr class="d-none d-lg-block mb-0 ml-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center no-gutters">
                        <div class="col-lg-6">
                            <img class="img-fluid" src={this.props.image3} alt="" />
                        </div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-grey" style={{ color: '#a1a1a1', padding: 20 }} >{this.props.contentTitle3}</h4>
                                        <p class="mb-0 text-white-50">
                                            {this.props.content3}
                                        </p>
                                        <hr class="d-none d-lg-block mb-0 mr-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
