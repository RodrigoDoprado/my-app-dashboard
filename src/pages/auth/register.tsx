import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authProvider/useAuth";
import { Api } from "../../service";
import "./register.css"

const initialState = {
    avatar: "",
    name: "",
    email: "",
    password: "",
};

export default function Register() {

    const [state, setState] = useState(initialState);
    const { avatar, name, email, password } = state;
    const [error, setError] = useState(false);
    const auth = useAuth();

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const addUser = async (data: { avatar: string; name: string; email: string; password: string; }) => {
        await Api.post("account/create", data)
            .then(() => { alert("User cadastrado com Sucesso") })
            .catch(() => { setError(true) })
    }

    const updateUser = async (data: { avatar: string; name: string; email: string; password: string; }, id: string) => {
        await Api.put(`account/up/${id}`, data)
            .then(() => { alert("User cadastrado com Sucesso") })
            .catch(() => { setError(true) })
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!auth.id) {
            addUser(state);
        } else {
            updateUser(state, auth.id);
        }
    };

    return (
        <>
            <div className="col-sm" id="register">
                <div className="card">
                    <div className="card-head">
                        {error ? <>
                            <div className="alert alert-danger" role="alert">
                                Alteração não Realizadas
                            </div>
                        </> : <></>}
                    </div>
                    <div className="card-title">
                        {!auth.token ? <><h2>Registrar</h2></> : <><h2>Alteração</h2></>}
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="col">
                                <input
                                    className="form-control"
                                    type="file"
                                    id="avatar"
                                    name="avatar"
                                    value={avatar}
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
                                    {auth.id ? "Salvar" : "Avançar"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}