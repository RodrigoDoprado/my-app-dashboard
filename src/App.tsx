import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import DashboardIndex from './pages';
import Perfil from './pages/perfil';
import IndexProduct from './pages/product/indexProduct';
import IndexEmployee from './pages/Employee/indexEmployee';
import CreateProduct from './pages/product/createProduct';
import CreateEmployee from './pages/Employee/createEmployee';
import { AuthProvider } from './context/authProvider';
import { DashPrivete } from './componete/routerPrivete/dashboard';
import { LogPrivete } from './componete/routerPrivete/login';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* rota public */}
            <Route path="/login" element={<LogPrivete><Login /></LogPrivete>} />

            {/* rota Privada */}
            <Route path="*" element={<DashPrivete><DashboardIndex /></DashPrivete>} />
            <Route path="/" element={<DashPrivete><DashboardIndex /></DashPrivete>} />
            <Route path="/dashboard" element={<DashPrivete><DashboardIndex /></DashPrivete>} />
            <Route path="/dashboard/produto" element={<DashPrivete><IndexProduct /></DashPrivete>} />
            <Route path="/dashboard/produto/cadastrar" element={<DashPrivete><CreateProduct /></DashPrivete>} />
            <Route path="/dashboard/funcionario" element={<DashPrivete><IndexEmployee /></DashPrivete>} />
            <Route path="/dashboard/funcionario/cadastrar" element={<DashPrivete><CreateEmployee /></DashPrivete>} />
            <Route path="/dashboard/perfil" element={<DashPrivete><Perfil /></DashPrivete>} />
            DashPrivete
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
