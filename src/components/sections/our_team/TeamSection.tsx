import React from "react";
import Button from "../../buttons/Button";
import meshImage from "../../../assets/images/red-dot-mesh.png";
import TeamMemberCard from "../../cards/TeamMemberCard";
import CarouselNavButton from "../../buttons/CarouselNavButton";

const TeamSection = () => {
  const styles = {
    button: {
      width: 40,
      height: 40,
      bottom: "calc(50% - 10px)",
      right: 0,
    } as React.CSSProperties,
    mesh: { 
      position: "absolute", 
      width: "140px", 
      bottom: 30, 
      left: 0 
    } as React.CSSProperties,
    bgDecoration: {
      backgroundColor: 'gray',
      width: '40%',
      height: '90%',
      opacity: '10%',
      borderRadius: '24px 0 0 24px',
      position: 'absolute',
      bottom: '5%',
      zIndex: -10,
      right: 0
    } as React.CSSProperties
  };

  return (
    <section className="position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-5">
            <h1 className="display-3 fw-bold">ჩვენი</h1>
            <h1 className="display-3 fw-bold ms-5 mb-4">გუნდი</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id inventore molestiae fuga saepe minima.
            </p>
            <div className="col d-flex justify-content-center mt-5">
              <Button text="მეტი დეტალი" href="/about" />{" "}
            </div>
          </div>
          <div className="col-lg-6 col-12 p-5">
            <div className="row">
              <div className="col-6">
                <TeamMemberCard />
                <TeamMemberCard />
              </div>
              <div className="col-6 position-relative">
                <TeamMemberCard />
                <TeamMemberCard />
                <CarouselNavButton href="/#/`about" direction="next"/>
              </div>
            </div>
          </div>
          <img src={meshImage} alt="mesh" className="d-none d-lg-block" style={styles.mesh} />
          <div className="d-none d-lg-block" style={styles.bgDecoration}></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
