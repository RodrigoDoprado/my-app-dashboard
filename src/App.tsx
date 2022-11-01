import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Api } from './service';
import Login from './pages/auth/login';
import DashboardIndex from './pages';
import Perfil from './pages/perfil';
import IndexProduct from './pages/product/indexProduct';
import IndexEmployee from './pages/Employee/indexEmployee';
import CreateProduct from './pages/product/createProduct';
import CreateEmployee from './pages/Employee/createEmployee';
import { AuthProvider } from './context/authProvider';
import { RouterPrivete } from './componete/routerPrivete';
import Menu from './componete/sidebar';
import Page404 from './pages/404';
import './App.css';

function App() {

  const [page, listPage] = useState(Boolean);
  useEffect(() => {
    Api.get("/")
      .then(() => { listPage(true) })
      .catch(() => { listPage(false); })

  }, []);
  return (
    <>
      {page === true ? <>
        <div className="App">
          <Menu />
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                {/* rota public */}
                <Route path="/login" element={<Login />} />

                {/* rota Privada */}
                <Route path="*" element={<RouterPrivete><DashboardIndex /></RouterPrivete>} />
                <Route path="/" element={<RouterPrivete><DashboardIndex /></RouterPrivete>} />
                <Route path="/dashboard" element={<RouterPrivete><DashboardIndex /></RouterPrivete>} />
                <Route path="/dashboard/produto" element={<RouterPrivete><IndexProduct /></RouterPrivete>} />
                <Route path="/dashboard/produto/cadastrar" element={<RouterPrivete><CreateProduct /></RouterPrivete>} />
                <Route path="/dashboard/funcionario" element={<RouterPrivete><IndexEmployee /></RouterPrivete>} />
                <Route path="/dashboard/funcionario/cadastrar" element={<RouterPrivete><CreateEmployee /></RouterPrivete>} />
                <Route path="/dashboard/perfil" element={<RouterPrivete><Perfil /></RouterPrivete>} />

              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </div>
      </>
        : <Page404 />}
    </>
  )
}

export default App
