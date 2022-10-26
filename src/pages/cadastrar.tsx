import { Helmet } from "react-helmet";
import Menu from "../componete/menu";

export default function Cadastrar() {
    return (
        <>
            <Helmet><title>Dashboard - Produto</title></Helmet>
            <Menu />

            <section className="resume-section">
                <div className="resume-section-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm">
                                <h1>Cadatrar</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}