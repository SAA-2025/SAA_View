import SocialMedia from "../../layout/footer/SocialMedia";
import ContactsList from "../lists/ContactsList";
import ContactForm from "../form/ContactForm";
import Circle from "../shapes/Circle";
import React from "react";
import socials from "../../data/socials";

const ContactSection = () => {

  const styles = {
    decorationImage: {
      position: "absolute",
      top: 0,
      right: 0,
      maxWidth: "50%",
      height: "auto",
      zIndex: 0,
      pointerEvents: "none",
    } as React.CSSProperties,
  };

  return (
    <section id="contact-section">
      <div className="container-fluid">
        <div className="row d-flex flex-wrap flex-row-reverse">
          <div
            className="col-12 col-md-6 bg-accent p-4 px-5 text-white d-none d-lg-flex flex-column justify-content-between position-relative"
            style={{ overflow: "hidden" }}
          >
            <img src='/images/contact-image.png' alt="Decoration" style={styles.decorationImage} />

            <Circle radius={150} coordinats={{ bottom: -100, right: -50 }}></Circle>
            
            <Circle radius={75} coordinats={{ bottom: 110, right: 110 }}></Circle>

            <p
              className="text-center fw-bold text-white fs-2"
              style={{ zIndex: 1 }}
            >
              ჩვენი კონტაქტები
            </p>
            <ContactsList />
            <SocialMedia socials={socials} />
          </div>

          <div className="col-12 col-lg-6 py-5 px-3 px-lg-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
