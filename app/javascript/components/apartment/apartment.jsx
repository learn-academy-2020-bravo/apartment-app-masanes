import React from "react";
import "./apartment.style.css";

export const Apartmento = (props) => (
  <div>
    <p>populate the data here my friend</p>
    <h1> {props.apartment.street}</h1>
    <p>{props.apartment.city}</p>
  </div>
);
