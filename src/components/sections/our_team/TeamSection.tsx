import React from "react";
import Button from "../../buttons/Button";
import TeamMemberCard from "../../cards/TeamMemberCard";

import employees from "../../../data/employees";

const TeamSection = () => {
  const styles = {
    mesh: {
      position: "absolute",
      width: "140px",
      bottom: 30,
      left: 0,
    } as React.CSSProperties,
    bgDecoration: {
      backgroundColor: "gray",
      width: "40%",
      height: "90%",
      opacity: "10%",
      borderRadius: "24px 0 0 24px",
      position: "absolute",
      bottom: "5%",
      zIndex: -10,
      right: 0,
    } as React.CSSProperties,
  };

  return (
    <section className="position-relative py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-5 d-flex flex-column align-items-start justify-content-center">
            <h1 className="display-3 fw-bold">ჩვენი</h1>
            <h1 className="display-3 fw-bold ms-5 ps-5 mb-4">გუნდი</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id inventore molestiae fuga saepe minima.
            </p>
            <div className="d-flex justify-content-center mt-4">
              <Button text="მეტი დეტალი" href="/about-us/" />
            </div>
          </div>
          <div className="col-lg-6 col-12 d-lg-block d-none p-5">
            <div className="row">
              {employees.slice(0, 4).map((employee) => (
                <div className="col-6" key={employee.name}>
                  <TeamMemberCard
                    name={employee.name}
                    position={employee.position}
                    image={employee.image}
                  />
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-end ms-3">
              <a
                className="custom-nav-btn"
                href = "/about-us/"
              >
                <i className="ri-arrow-right-long-line"></i>
              </a>
            </div>
          </div>

          <img
            src='/images/red-dot-mesh.png'
            alt="mesh"
            className="d-none d-lg-block"
            style={styles.mesh}
          />
          <div className="d-none d-lg-block" style={styles.bgDecoration}></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
