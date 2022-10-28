import { Helmet } from "react-helmet";
import Menu from "../../componete/menu";;

export default function indexProduct() {
    return (
        <>
            <Helmet><title>Produto - Dashboard</title></Helmet>
            <Menu />

            <section className="resume-section">
                <div className="resume-section-content">
                    <div className="container">
                        <div className="row">
                            <h1>Produtos</h1>
                            <div className="col-sm"></div>
                            <div className="col-sm">
                                <a href="/dashboard/produto/cadastrar">Cadastrar</a>
                                </div>
                            <h5>Tabela de Produtos</h5>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}