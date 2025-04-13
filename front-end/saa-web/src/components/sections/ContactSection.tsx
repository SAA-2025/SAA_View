import SocialMedia from "../../layout/footer/SocialMedia";
import ContactsList from "../lists/ContactsList";
import ContactForm from "../form/ContactForm";
import contactDecorationImage from "../../assets/images/contact-image.png";
import Circle from "../shapes/Circle";
import React from "react";

const ContactSection = () => {
  const socialMedia = [
    { icon: "twitter", link: "https://x.com" },
    { icon: "instagram", link: "https://instagram.com" },
    {
      icon: "facebook",
      link: "https://www.facebook.com/profile.php?id=61567478023616",
    },
    { icon: "linkedin", link: "https://www.linkedin.com/in/saa-smart-accounting-and-audit-226bba215/ " },
  ];

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
            <img src={contactDecorationImage} alt="Decoration" style={styles.decorationImage} />

            <Circle radius={150} coordinats={{ bottom: -100, right: -50 }}></Circle>
            
            <Circle radius={75} coordinats={{ bottom: 110, right: 110 }}></Circle>

            <p
              className="text-center fw-bold text-white fs-2"
              style={{ zIndex: 1 }}
            >
              ჩვენი კონტაქტები
            </p>
            <ContactsList />
            <SocialMedia socials={socialMedia} />
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
