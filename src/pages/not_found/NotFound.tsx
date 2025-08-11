import { useEffect } from "react";
import Title from "../../components/others/Title";

export const NotFound = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <article>
      <section className="vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-6 px-5 ">
              <Title title="Error 404 - Page Not Found" hrDisplay={false} />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
