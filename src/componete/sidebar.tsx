
import { useAuth } from "../context/authProvider/useAuth";
import "./sidebar.scss";

export default function Sidebar() {

    const auth = useAuth()

    const logoutUser = () => {
        auth.logout();
    }

    return (
        <nav className="main-nav" role="navigation">
            <ul className=" desktop unstyled list-hover-slide">
            <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/assets/img/profile.jpg" alt="..." /></span>
                <li><a href="/dashboard">Dashbord</a></li>
                <li><a href="/dashboard/produto">Produto</a></li>
                <li><a href="/dashboard/funcionario">Funcionario</a></li>
                <li><a href="/dashboard/perfil">Perfil</a></li>
                <li><a href="/login" onClick={logoutUser}>Sair</a></li>
            </ul>
        </nav>
    )
} 
