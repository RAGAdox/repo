import React, { Fragment } from "react";
import Menu from "./Menu";
export default function Base({
  title = "My Title",
  description = "My description",
  className = " text-white p-4",
  displayJumbotron = true,
  children,
}) {
  return (
    <div>
      <Menu />
      <div className="container-fluid main-body-scroll">
        {displayJumbotron ? (
          <div className="main-card jumbotron text-white text-center main-body">
            <h2 className="display-4">{title}</h2>
            <p className="lead">{description}</p>
          </div>
        ) : (
          <Fragment />
        )}
        {console.log(className)}
        <div
          className={className + " mt-0 mt-md-5"}
        >
          {children}
        </div>
      </div>
      {/* <footer className="page-footer footer bg-dark mt-auto py-3 fixed-bottom">
        <div className="container">
          <span className="text-muted">An Amazing place to buy sarees</span>
        </div>
      </footer> */}
    </div>
  );
}
