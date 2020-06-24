import React from "react";
import { Apartmento } from "../apartment/apartment";

export const Listings = (props) => (
  <div className="apartment-list">
    {props.apartments.map((apartment) => (
      <Apartmento key={apartments.id} />
    ))}
  </div>
);
