import React from 'react'


interface ListHeroProps {
  header: string;
  body: string;
  image: string;
}

const ListHero = ({header, body, image}: ListHeroProps) => {

  const styles = {
    archedDiv: {
      backgroundColor: "white",
      height: "80px",
      borderTopLeftRadius: "50% 100%",
      borderTopRightRadius: "50% 100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    } as React.CSSProperties,

    meshImg: {
      position: "absolute",
      bottom: '-80px',
      right: 0,
    } as React.CSSProperties,
  };

  return (
    <section className="pt-4 v-80 bg-accent text-center text-lg-start text-white d-flex flex-column">
      <div className="container flex-grow-1 d-flex flex-column justify-content-center">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center p-4">
            <h1 className="display-3 mb-4 fw-bold">{header}</h1>
            <p>{body}</p>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center align-items-center p-4 position-relative">
            <img
              src={image}
              alt="hero"
              className="img-fluid rounded position-relative"
              style={styles.meshImg}
            />
          </div>
        </div>
      </div>
      <div className="w-100" style={styles.archedDiv}></div>
    </section>
  );
}

export default ListHero;