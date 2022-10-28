import { useState } from "react";

import { toast } from "react-toastify";
import { Api } from "../../service";
import "./login.css"

const initialState = {
    avatar: "",
    name: "",
    email: "",
    password: "",
};

export default function Register() {
    const [state, setState] = useState(initialState);
    const { avatar, name, email, password } = state;

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const addUser = async (data: { avatar: string; name: string; email: string; password: string; }) => {
        const response = await Api.post("/accout/login", data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!name || !email || !password) {
            toast.error("Please provide value in each input field");
        } else {
            // if (!id) {
            //     addUser(state);
            // } else {
            //     updateUser(state, id);
            // }
            addUser(state)
            // setTimeout(() => history.push("/"), 500);
        }
    };

    return (
        <>
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
                                Avançar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}