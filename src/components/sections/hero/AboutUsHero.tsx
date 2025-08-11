import React from "react";
import Title from "../../others/Title";

const AboutUsHero = () => {
  const styles = {
    info: {
      maxWidth: '800px',
      borderRadius: '16px 16px 90% 16px / 16px 16px 20% 16px'
    } as React.CSSProperties,
    heroImage: {
      maxWidth: '85%',
      height: 'auto',
      position: 'absolute',
      bottom: 30,
      left: '7.5%'
    } as React.CSSProperties
  };

  return (
    <section>
      <div
        className="container py-lg-5 py-3 d-flex flex-column align-items-center"
        style={{ paddingBottom: '500px !important' }} 
      >
        <Title title="ჩვენ აქ ვართ - თქვენი წარმატებისთვის" hrWidth={50} fontSize="2" className="text-center d-flex flex-column align-items-center"/>

        <div
          className="row position-relative"
          style={{ minHeight: '500px' }} 
        >
          <div className="col">
            <div
              style={styles.info}
              className="story bg-accent text-white fw-medium fs-4 p-5"
            >
              ყველაფერი დაიწყო 2010 წელს, როდესაც რამდენიმე მეგობარმა, რომლებსაც
              ჰქონდათ საერთო ხედვა და მიზანი, გადაწყვიტეს შექმნან კომპანია,
              რომელიც შეცვლიდა ინდუსტრიას.
            </div>

            <img 
              src='/images/about-us-hero.png' 
              style={styles.heroImage} 
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
