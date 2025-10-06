import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/dashboard/Dashboard'
import './index.css'
import Register from './pages/register1/Register'
import ClientesList from './pages/register/clients/ClientesList'
import ClienteForm from './pages/register/clients/ClienteForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/registration' element={<Register />} />
          
          {/* Rotas de Clientes */}
          <Route path='/cadastros/clientes' element={<ClientesList />} />
          <Route path='/cadastros/clientes/novo' element={<ClienteForm />} />
          <Route path='/cadastros/clientes/editar/:id' element={<ClienteForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
