
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import DashboardIndex from './pages';
import Perfil from './pages/perfil';
import Funcionario from './pages/Employee/createEmployee';
import IndexProduct from './pages/product/indexProduct';
import IndexEmployee from './pages/Employee/indexEmployee';
import CreateProduct from './pages/product/createProduct';
import CreateEmployee from './pages/Employee/createEmployee';

function App() {

  return (
    <div className="App">
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Routes>
          {/* rota public */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* rota Privada */}
          <Route path="*" element={<DashboardIndex />} />
          <Route path="/" element={<DashboardIndex />} />
          <Route path="/dashboard" element={<DashboardIndex />} />
          <Route path="/dashboard/produto" element={<IndexProduct />} />
          <Route path="/dashboard/produto/cadastrar" element={<CreateProduct />} />
          <Route path="/dashboard/funcionario" element={<IndexEmployee />} />
          <Route path="/dashboard/funcionario/cadastrar" element={<CreateEmployee />} />
          <Route path="/dashboard/perfil" element={<Perfil />} />
          
        </Routes>
      </BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  )
}

export default App
