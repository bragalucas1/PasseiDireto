import { Login } from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AuthContextProvider} from './contexts/AuthContext'
import { MenuAluno } from './pages/MenuAluno';
import { Register } from './pages/Register';
import { Upload } from './pages/Upload';
import { Download } from './pages/Download';
import { Chat } from './pages/Chat';
import { AdminRoom } from './pages/AdminRoom';
import { Historico } from './pages/Historico';
import { AdminCreate } from './pages/AdminCreate';
import { FiltrarResult } from './pages/FiltrarResult';

function App(){
  return (
    /*Todas essas rotas conseguirão enxergar o valor do provider.*/
    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path = "/register" element ={<Register/>}/>
          <Route path = "/menu/aluno" element ={<MenuAluno/>}/>
          <Route path = "/upload" element ={<Upload/>}/>
          <Route path = "/download" element ={<Download/>}/>
          <Route path = "/chat" element ={<Chat/>}/>
          <Route path = "/admin/dashboard" element ={<AdminRoom/>}/>
          <Route path = "/admin/criar" element ={<AdminCreate/>}/>
          <Route path = "/historico" element ={<Historico/>}/>
          <Route path = "/queryresult" element ={<FiltrarResult/>}/>
          <Route path = "/Disciplinas" element ={<MenuAluno/>}/>

        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
    
  );
}
export default App;
