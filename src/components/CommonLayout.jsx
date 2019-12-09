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
                    className="container"
                    style={{ marginTop: 80, background: "#ece6b7" }}
                >
                    <header style={{ padding: 20 }}>
                        <h2>
                            <b> {this.props.title}</b>
                        </h2>
                    </header>
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-6 col-lg-6">
                            <img
                                className="img-fluid mb-3 mb-lg-0"
                                src={this.props.image1}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="featured-text text-center text-lg-left">
                                <h4>{this.props.contentTitle}</h4>
                                <p className="text-black-50 mb-0">
                                    {this.props.content}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div className="col-lg-6">
                            <img className="img-fluid" src={this.props.image2} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-grey" style={{ color: '#a1a1a1', padding: 20 }}>{this.props.contentTitle2}</h4>
                                        <p className="mb-0 text-white-50">
                                            {this.props.content2}
                                        </p>
                                        <hr className="d-none d-lg-block mb-0 ml-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center no-gutters">
                        <div className="col-lg-6">
                            <img className="img-fluid" src={this.props.image3} alt="" />
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-grey" style={{ color: '#a1a1a1', padding: 20 }} >{this.props.contentTitle3}</h4>
                                        <p className="mb-0 text-white-50">
                                            {this.props.content3}
                                        </p>
                                        <hr className="d-none d-lg-block mb-0 mr-0" />
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
