import React from "react";
import { Helmet } from "react-helmet-async";
import Job from "../../components/Job/Job";
import "./Home.scss";

const TITLE = "Listicle";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <main>
        <div className="rowHeader">
          <div className="IDHeader">
            <div>ID</div>
          </div>
          <div className="nameHeader">Name</div>
          <div className="emailHeader">Email Address</div>
          <div className="phoneHeader">Phone</div>
          <div className="companyHeader">Company</div>
          <div className="imageHeader">
            <img
              src={`https://avatars.dicebear.com/api/adventurer-neutral/${Math.random()}.svg`}
              alt="avatar"
            />
          </div>
        </div>
        <Job />
      </main>
    </>
  );
}
