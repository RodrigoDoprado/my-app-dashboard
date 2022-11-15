import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Sidebar from "../../componete/sidebar";
import { Api } from "../../service";
import "./employee.css"


export default function IndexEmployee() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await Api.get("account/getUsers");
        if (response.status === 200) {
            setData(response.data);
        }
    };

    const onDeleteUser = async (id: any) => {
        if (
            window.confirm("Are you sure that you wanted to delete that user record")
        ) {
            const response = await Api.delete(`account/del/${id}`);
            if (response.status === 200) {
                toast.success(response.data);
                getUsers();
            }
        }
    }



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
                                    {data &&
                                        data.map((item:any, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index+1}</th>
                                                    <td>{item.img}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.cargo}</td>
                                                    <td>{item.date}</td>
                                                    <td>
                                                        <a href={`/update/${item.id}`}>
                                                            <button className="btn btn-edit">Edit</button>
                                                        </a>
                                                        <button
                                                            className="btn btn-delete"
                                                            onClick={() => onDeleteUser(item.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <a href={`/view/${item.id}`}>
                                                            <button className="btn btn-view">View</button>
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}