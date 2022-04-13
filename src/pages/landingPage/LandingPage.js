import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <main className="main">
        <section className="section">
          <div className="heading">Meet Your Modren Note Taking App</div>

          <div className="sub-heading">
            Manage your daily tasks and workflow in a modren way and boost your
            efficiency without any efforts
          </div>
          <Link to="/signup">
            <button className="btn btn-primary btn-link">Join Now</button>
          </Link>
        </section>
      </main>
    </>
  );
};

export { LandingPage };
