import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../componete/sidebar";
import { Api } from "../../service";
import "./form.css"

const initialState = {
    img: "",
    name: "",
    description: "",
    category: "",
    genre: "",
};

export default function CreateProduct() {
    const [state, setState] = useState(initialState);
    const { img, name, description, category, genre } = state;
    const [error, setError] = useState(false);
    // const [selectGenre] = useState([]);
    // const [selectCategory] = useState([]);
    const navegate = useNavigate();

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const addProduct = async (data: { name: string; description: string; category: string; genre: string; }) => {
        await Api.post("/product/create", data)
            .then(() => { navegate("/dashboard/produto") })
            .catch(() => { setError(true) })

    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // if (!id) {
        addProduct(state);
        // } else {
        //     updateUser(state, id);
        // }
    };

    return (
        <>
            <Helmet><title>Cadastro - Produto - Dashboard</title></Helmet>
            <Sidebar />
            <section className="resume-section">
                <div className="resume-section-content">
                    <div className="container">
                        <div className="row">
                            <h1>Produtos</h1>
                            <div className="col-sm" id="product">
                                <div className="card">
                                    <div className="card-title">
                                        <h2>Cadastar</h2>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="col">
                                                <input
                                                    className="form-control"
                                                    type="file"
                                                    id="img"
                                                    name="img"
                                                    value={img}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Nome"
                                                    required
                                                    value={name}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <select
                                                    className="form-select"
                                                    id="category"
                                                    name="category"
                                                    required
                                                    value={category}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value={0}>Categoria</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <select
                                                    className="form-select"
                                                    id="genre"
                                                    name="genre"
                                                    required
                                                    value={genre}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value={0}>Gênero</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="description"
                                                    name="description"
                                                    placeholder="Descrição"
                                                    required
                                                    value={description}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Salvar
                                                </button>
                                            </div>
                                            <div className="card-footer">
                                                {error ? <>
                                                    <div className="alert alert-danger" role="alert">
                                                        Alteração não Realizadas
                                                    </div>
                                                </> : <></>}
                                            </div>
                                        </form>
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