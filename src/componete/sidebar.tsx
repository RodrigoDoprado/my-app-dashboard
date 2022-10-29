
import { useAuth } from "../context/authProvider/useAuth";
import "./sidebar.css";

export default function Sidebar() {

    const auth = useAuth()

    const logout = () => {
        auth.logout();
    }

    return (
        <>
            {auth.token ?
                <>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="sideNav">
                        <a className="navbar-brand js-scroll-trigger" href="/dashboard">
                            {/* <span className="d-block d-lg-none">Clarence Taylor</span> */}
                            <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="..." /></span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link" href="/dashboard">Dashbord</a></li>
                                <li className="nav-item"><a className="nav-link" href="/dashboard/produto">Produto</a></li>
                                <li className="nav-item"><a className="nav-link" href="/dashboard/funcionario">Funcionario</a></li>
                                <li className="nav-item"><a className="nav-link" href="/dashboard/perfil">Perfil</a></li>
                                <li className="nav-item"><a className="nav-link" href="/login" onSubmit={logout}>Sair</a></li>
                            </ul>
                        </div>
                    </nav>
                </>
                :
                <></>
            }
        </>
    )
} 
