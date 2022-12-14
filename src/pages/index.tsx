import { Helmet } from "react-helmet";
import Sidebar from "../componete/sidebar";
import { useAuth } from "../context/authProvider/useAuth";
import "./index.css"

export default function DashboardIndex() {

    const auth = useAuth()

    return (
        <>
            <Helmet><title>Home - Dashboard</title></Helmet>
            <Sidebar />
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm" id="index">
                                <div className="card">
                                    <div className="card-head">
                                        <h1 className="card-title">Dashboard</h1>
                                        <h3 className="card-subtitle">Bem vindo {auth.firstName+" "+auth.lastName}</h3>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">id: {auth.id}</p>
                                        <p className="card-text">email: {auth.email}</p>
                                        <p className="card-text">token: {auth.token}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}