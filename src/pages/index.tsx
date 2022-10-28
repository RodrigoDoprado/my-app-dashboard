import { Helmet } from "react-helmet";
import Menu from "../componete/menu";
import Register from "./auth/register";

export default function DashboardIndex() {
    return (
        <>
            <Helmet><title>Dashboard - Home</title></Helmet>
            <Menu />

            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <div className="container">
                        <div className="row">
                            <h1>Dashboard</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}