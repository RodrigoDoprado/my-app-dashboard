import { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Menu from "../../componete/menu";
import { Api } from "../../service";

const initialState = {
    img: "",
    name: "",
    description: "",
    category: "",
    genre: "",
};

export default function Cadastrar() {
    const [state, setState] = useState(initialState);
    const { img, name, description, category, genre } = state;

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const addProduct = async (data: { name: string; description: string; category: string; genre: string; }) => {
        const response = await Api.post("/product/create", data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!name) {
            toast.error("Please provide value in each input field");
        } else {
            // if (!id) {
            //     addUser(state);
            // } else {
            //     updateUser(state, id);
            // }
            addProduct(state)
            // setTimeout(() => history.push("/"), 500);
        }
    };

    return (
        <>
            <Helmet><title>Dashboard - Produto</title></Helmet>
            <Menu />

            <section className="resume-section">
                <div className="resume-section-content">
                    <div className="container-fluid">
                        <div className="row">
                            <h1>Produtos</h1>
                            <div className="col-sm">
                                <div className="card">
                                    <div className="card-title">
                                        <h2>Registrar</h2>
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
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="category"
                                                    name="category"
                                                    placeholder="Categoria"
                                                    required
                                                    value={category}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="genre"
                                                    name="genre"
                                                    placeholder="Gênero"
                                                    required
                                                    value={genre}
                                                    onChange={handleInputChange}
                                                />
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
                                                    Avançar
                                                </button>
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