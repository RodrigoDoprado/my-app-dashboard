import { Helmet } from "react-helmet";
import "./404.css";

export default function Page404() {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <div className="container">
            <div className="row">
              <div className="col-sm" id="page404">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">404</div>
                    <div className="card-subtitle">Não Há Conexão</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
