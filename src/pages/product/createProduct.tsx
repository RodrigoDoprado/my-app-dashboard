import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../componete/sidebar";
import { Api } from "../../service";

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
    const [selectGenre, setSelectGenre] = useState([]);
    const [selectCategory, setSelectCategory] = useState([]);
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
                <div className="container">
                    <div className="row" id="product">
                        <a href="/dashboard/produto"><h1>Produtos</h1></a>
                        <div className="col-sm">
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
                                                id="file"
                                                name="file"
                                                value={img}
                                                multiple={false}
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
                                                {selectCategory &&
                                                    selectCategory.map((item: any) => {
                                                        return (
                                                            <option value={item.id}>{item.name}</option>
                                                        )
                                                    })
                                                }
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
                                                <option value={0}>G??nero</option>
                                                {selectGenre &&
                                                    selectGenre.map((item: any) => {
                                                        return (
                                                            <option value={item.id}>{item.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                name="description"
                                                placeholder="Descri????o"
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
                                                    Altera????o n??o Realizadas
                                                </div>
                                            </> : <></>}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}