import { Helmet } from "react-helmet";
import Sidebar from "../../componete/sidebar";
import Register from "../auth/register";

export default function CreateEmployee() {
    return (
        <>
            <Helmet><title>Cadastro - Funcionario - Dashboard</title></Helmet>
            <Sidebar />
            <section className="resume-section">
                <div className="container">
                    <div className="row" id="employee">
                        <a href="/dashboard/funcionario"><h1>Funcionario</h1></a>
                        <div className="col-sm">
                            <Register />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}