import { Helmet } from "react-helmet";

export default function DashboardIndex() {
    return (
        <>
            <Helmet><title>Home - Dashboard</title></Helmet>

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