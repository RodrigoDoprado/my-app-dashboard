
import "./menu.css";

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="/dashboard">
                {/* <span className="d-block d-lg-none">Clarence Taylor</span> */}
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/dashboard">Dashbord</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/dashboard/produto/cadastrar">Produto</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/dashboard/perfil">Perfil</a></li>
                    {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li> */}
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/login">Sair</a></li>
                </ul>
            </div>
        </nav>
    )
}
