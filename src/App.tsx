
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import DashboardIndex from './pages';
import Cadastrar from './pages/product/cadastrar';
import Perfil from './pages/perfil';
import Funcionario from './pages/func';

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
          <Route path="/dashboard/produto/cadastrar" element={<Cadastrar />} />
          <Route path="/dashboard/funcionario" element={<Funcionario />} />
          <Route path="/dashboard/perfil" element={<Perfil />} />
          
        </Routes>
      </BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  )
}

export default App
