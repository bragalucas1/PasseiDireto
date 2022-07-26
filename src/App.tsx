import { Login } from './pages/Login'
// import {createContext, useState, useEffect} from 'react' //use effect = hook pra disparo de efeitos colaterais - funcionalidades - dispara uma  função sempre que algo acontecer
// //informaçao mudar ou componente for mostrado em tela.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewRoom } from './pages/NewRoom';
// import { auth } from './services/firebase';
// import firebase from 'firebase';
import {AuthContextProvider} from './contexts/AuthContext'
import { Menu } from './pages/Menu';
import { Register } from './pages/Register';
import { Upload } from './pages/Upload';
import { Download } from './pages/Download';
import { Chat } from './pages/Chat';

function App(){
  return (
    /*Todas essas rotas conseguirão enxergar o valor do provider.*/
    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
          <Route path="/"  element={<Login />} />
          <Route path = "/register" element ={<Register/>}/>
          <Route path = "/menu" element ={<Menu/>}/>
          <Route path = "/upload" element ={<Upload/>}/>
          <Route path = "/download" element ={<Download/>}/>
          <Route path = "/chat" element ={<Chat/>}/>
          {/* <Route path = "/rooms/new"   element ={<NewRoom />} /> */}
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
