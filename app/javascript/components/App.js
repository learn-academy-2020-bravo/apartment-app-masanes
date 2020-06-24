import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import CreateApartment from "./CreateApartment";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      apartments: [],
      images: [
        image1,
        image2,
        // image3,
        // image4,
        // image5,
        // image6,
        // image7,
        // image8,
        // image9,
        // image10,
        // image11,
        // image12,
        // image13,
        // image14,
        // image15,
        // image16,
        // image17,
        // image18,
      ],
    };
  }

  // ImageDisplay = image`${apartment.id}`;

  componentDidMount() {
    fetch("/apartments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ apartments: data });
      });
  }

  render() {
    const { logged_in, sign_in_route, sign_out_route } = this.props;

    return (
      <React.Fragment>
        <Header />
        <h1>Apartment Finder</h1>
        {/* <img src={image1}></img> */}
        {this.state.apartments.map((apartment, index) => (
          <p key={index}>
            {" "}
            <img src={this.state.images[index]}></img>
            {apartment.street},{""} {apartment.city}
          </p>
        ))}
        {logged_in && (
          <div id="sign_out">
            <a href={sign_out_route}>Sign Out</a>
          </div>
        )}
        {!logged_in && (
          <div id="sign_out">
            <a href={sign_in_route}>Sign In</a>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
