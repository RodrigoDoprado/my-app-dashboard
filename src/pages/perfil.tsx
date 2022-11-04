import { Helmet } from "react-helmet";
import Sidebar from "../componete/sidebar";
import Register from "./auth/register";

export default function Perfil() {
    return (
        <>
            <Helmet><title>Perfil - Dashboard</title></Helmet>
            <Sidebar/>
            <section className="resume-section">
                <div className="resume-section-content">
                    <div className="container-fluid">
                        <div className="row">
                            <h1>Perfil</h1>
                            <div className="col-sm">
                                <Register />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}