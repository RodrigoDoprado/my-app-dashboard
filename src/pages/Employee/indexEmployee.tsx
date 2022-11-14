import { Helmet } from "react-helmet";
import Sidebar from "../../componete/sidebar";
import"./employee.css"


export default function IndexEmployee() {
    return (
        <>
            <Helmet><title>Funcionario - Dashboard</title></Helmet>
            <Sidebar />
            <section className="resume-section">
                <div className="container">
                    <div className="row" id="employee">
                        <div className="col-sm">
                            <a href="/dashboard/funcionario"><h1>Funcionario</h1></a>
                        </div>
                        <div className="col-sm">
                            <a href="/dashboard/funcionario/cadastrar"><h4>Novo Funcionario</h4></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Imagem</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Função</th>
                                        <th scope="col">Data</th>
                                        <th scope="col">Config</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        {/* <td colSpan="2">Larry the Bird</td> */}
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}