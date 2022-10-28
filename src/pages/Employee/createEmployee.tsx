import { Helmet } from "react-helmet";
import Menu from "../../componete/menu";
import Register from "../auth/register";

export default function CreateEmployee() {
    return (
        <>
            <Helmet><title>Cadastro - Funcionario - Dashboard</title></Helmet>
            <Menu />
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <div className="container">
                        <div className="row">
                            <h1>Funcionario</h1>
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