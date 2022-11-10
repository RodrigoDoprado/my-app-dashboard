import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IContext } from "../../context/authProvider/types";
import { useAuth } from "../../context/authProvider/useAuth";
import { Api } from "../../service";
import "./register.css"

export default function Register() {
    const auth = useAuth();
    const [state, setState] = useState(auth);
    const {id, img, name, email, password, } = state;
    const [error, setError] = useState(false);
    const navegate = useNavigate()

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const addUser = async (data: IContext) => {
        await Api.post("account/create", data)
            .then(() => { alert("User cadastrado com Sucesso") })
            .catch(() => { setError(true) })
    }

    const updateUser = async (data: IContext, id: number) => {
        await Api.put(`account/up/${id}`, data)
            .then(() => { navegate("/") })
            .catch(() => { setError(true) })
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!id) {
            addUser(state);
        } else {
            updateUser(state, id);
        }
    };

    return (
        <>
            <div className="col-sm" id="register">
                <div className="card">
                    <div className="card-head">
                        {error ? <>
                            <div className="alert alert-danger" role="alert">
                                {auth.token?<>Alteração não Realizadas</>:<>E-mail Já Cadastrado</>}
                            </div>
                        </> : <></>}
                    </div>
                    <div className="card-title">
                        {!auth.token ? <><h2>Registrar</h2></> : <><h2>Alteração</h2></>}
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="col">
                                {/* <input
                                    name="token"
                                    value={auth.token}
                                    onChange={handleInputChange}
                                /> */}
                                <input
                                    className="form-control"
                                    type="file"
                                    id="img"
                                    name="img"
                                    // multiple={false}
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
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Senha"
                                    required
                                    value={password}
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
        </>
    )
}