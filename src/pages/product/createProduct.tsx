import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
    const [selectGenre] = useState([]);
    const [selectCategory] = useState([]);
    const navegate = useNavigate();

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
            setTimeout(() => navegate("/dashboard/produto"), 500);
        }
    };

    return (
        <>
            <Helmet><title>Cadastro - Produto - Dashboard</title></Helmet>

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
                                                    {selectCategory.map((item, index) => {
                                                        return (
                                                            <>
                                                                <option value={0}>Categoria</option>
                                                                <option value={index}>{item}</option>
                                                            </>
                                                        )
                                                    })}
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
                                                    {selectCategory.map((item, index) => {
                                                        return (
                                                            <>
                                                                <option value={0}>Gênero</option>
                                                                <option value={index}>{item}</option>
                                                            </>
                                                        )
                                                    })}

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