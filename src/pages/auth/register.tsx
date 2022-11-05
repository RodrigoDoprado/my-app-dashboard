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
    const auth = useAuth();

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const addUser = async (data: { avatar: string; name: string; email: string; password: string; }) => {
        try {
            
            await Api.post("account/create", data)
            .then(()=>{alert("User cadastrado com Sucesso")})
            
        } catch (error) {
            alert("Error ao cadastrar user ")
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
        }
    };

    return (
        <>
            <div className="col-sm" id="register">
                <div className="card">
                    <div className="card-title">
                        {!auth.token?<><h2>Registrar</h2></>:<><h2>Alteração</h2></>}
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
            </div>
        </>
    )
}