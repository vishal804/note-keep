import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <main class="main">
        <section class="section">
          <div class="heading">Meet Your Modren Note Taking App</div>

          <div class="sub-heading">
            Manage your daily tasks and workflow in a modren way and boost your
            efficiency without any efforts
          </div>
          <Link to="/signup">
            <button class="btn btn-primary btn-link">Join Now</button>
          </Link>
        </section>
      </main>
    </>
  );
};

export { LandingPage };
