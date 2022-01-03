import React from "react";
import { Helmet } from "react-helmet-async";
import "./About.scss";

const TITLE = "About Page";

export default function About() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="about-container">
        <h1 className="section-title">About Us</h1>
        <p>
          Listicle is a database of{" "}
          <span className="twenty">TWENTY THOUSAND!!!</span> EMPLOYEES,
        </p>
        <p>"Whose employees ?" you might ask, we don't know 😂.</p>
        <p>
          But if you ever feel like searching{" "}
          <span className="twenty">TWENTY THOUSAND!!!</span> random EMPLOYEES,{" "}
        </p>
        <p>we are at your service 🙏.</p>
      </div>
    </>
  );
}
