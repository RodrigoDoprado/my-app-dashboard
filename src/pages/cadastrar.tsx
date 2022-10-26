import { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Menu from "../componete/menu";
import { Api } from "../service";

const initialState = {
    name: "",
    description: "",
    category: "",
    genre: "",
};

export default function Cadastrar() {
    const [state, setState] = useState(initialState);
    const { name, description, category, genre } = state;

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
                            <h1>Cadastar Produto</h1>
                            <div className="col-sm">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="col">
                                            {/* <label htmlFor="formFile" className="form-label">Default file input example</label> */}
                                            <input
                                                className="form-control"
                                                type="file"
                                                id="FileAvatar"
                                                name="FileAvatar"
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Titulo"
                                                id="name"
                                                name="name"
                                                value={name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="categoria"
                                                id="category"
                                                name="category"
                                                value={category}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Genero"
                                                id="genre"
                                                name="genre"
                                                value={genre}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Descrição"
                                                id="description"
                                                name="description"
                                                value={description}
                                                onChange={handleInputChange}
                                            />
                                            <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Avançar
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}