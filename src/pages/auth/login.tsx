import { Helmet } from "react-helmet";
import "./login.css";

export default function Login() {
    return (
        <>
            <Helmet><title>Login</title></Helmet>
            <section className="resume-section" >
                <div className="resume-section-content">
                    <div className="container"> 
                        <div className="row">
                            <div className="card">
                                <div className="card-title">
                                    <h2>Login</h2>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            {/* <label htmlFor="exampleInputEmail1"className="form-label">Email address</label> */}
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email1"
                                                placeholder="Email"
                                                // aria-describedby="emailHelp"
                                                required
                                            />
                                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                        </div>
                                        <div className="mb-3">
                                            {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password1"
                                                placeholder="Senha"
                                                required
                                            />
                                        </div>
                                        {/* <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                        </div> */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Avançar
                                        </button>
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