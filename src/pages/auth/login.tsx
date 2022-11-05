import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useAuth } from "../../context/authProvider/useAuth";

import "./login.css";
import Register from "./register";

const initialState = {
    email: "",
    password: "",
};

export default function Login() {
    const [state, setState] = useState(initialState);
    const { email, password } = state;
    const navegate = useNavigate();
    const auth = useAuth();

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await auth.authenticate(email, password)
            .then(()=>{navegate('/')})
            
        } catch (error) {

        }
    };


    return (
        <>
            <Helmet><title>Login</title></Helmet>

            <div className="container">
                <div className="row">
                    <div className="col-sm" id="login">
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
                    <div className="col-sm">
                        <Register/>
                    </div> 
                </div>
            </div>
        </>
    )
}
