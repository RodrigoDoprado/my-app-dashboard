import { Helmet } from "react-helmet";
import Menu from "../../componete/menu";

export default function IndexEmployee() {
    return (
        <>
            <Helmet><title>Funcionario - Dashboard</title></Helmet>
            <Menu />
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <div className="container">
                        <div className="row">
                            <h1>Funcionario</h1>
                            <div className="col-sm"></div>
                            <div className="col-sm">
                                <a href="/dashboard/funcionario/cadastrar">Cadastrar</a>
                            </div>
                            <h5>Tabela de Funcionarios</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}