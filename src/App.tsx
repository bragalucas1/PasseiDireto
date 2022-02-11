// import { Button } from './components/Button'
import { Home } from './pages/Home'
// import {createContext, useState, useEffect} from 'react' //use effect = hook pra disparo de efeitos colaterais - funcionalidades - dispara uma  função sempre que algo acontecer
// //informaçao mudar ou componente for mostrado em tela.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewRoom } from './pages/NewRoom';
// import { auth } from './services/firebase';
// import firebase from 'firebase';
import {AuthContextProvider} from './contexts/AuthContext'

// type User = {
//   id: string, name: string, avatar: string;
// }
// type AuthContextType = {
//   user: User | undefined,
//   signInWithGoogle:  () => Promise<void>;
// }
// export const  AuthContext = createContext({} as AuthContextType); //tipágem
function App(){
  return (
    // <NewRoom/>
    /*Todas essas rotas conseguirão enxergar o valor do provider.*/
    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
          <Route path="/"  element={<Home />} />
          <Route path = "/rooms/new" element ={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
