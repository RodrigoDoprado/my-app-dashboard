import { Helmet } from "react-helmet";
import Menu from "../componete/menu";

export default function Perfil() {
    return (
        <>
            <Helmet><title>Dashboard - Perfil</title></Helmet>
            <Menu />

            <section className="resume-section">
                <div className="resume-section-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm">
                                <h1>Perfil</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}