import { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { Api } from "../../service";
import "./login.css";
import Register from "./register";

const initialState = {
    email: "",
    password: "",
};

export default function Login() {
    const [state, setState] = useState(initialState);
    const { email, password } = state;

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const loginUser = async (data: { email: string; password: string; }) => {
        const response = await Api.post("/accout/login", data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Please provide value in each input field");
        } else {
            // if (!id) {
            //     addUser(state);
            // } else {
            //     updateUser(state, id);
            // }
            loginUser(state)
            // setTimeout(() => history.push("/"), 500);
        }
    };


    return (
        <>
            <Helmet><title>Login</title></Helmet>
            <section className="resume-section" >
                <div className="resume-section-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="card">
                                    <div className="card-title">
                                        <h2>Login</h2>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
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
                                            <div className="mb-3">
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
                                            {/* <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                        </div> */}
                                            <div className="mb-3">
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