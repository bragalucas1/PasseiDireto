import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import GoogleIcon from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Home(){
    const navigate = useNavigate();
    const { user,signInWithGoogle} = useAuth();

    /*Autenticação com FireBase.*/
    async function handleCreateRoom(){
        if(!user){
           await signInWithGoogle();
        }
        // const provider = new firebase.auth.GoogleAuthProvider();
        // auth.signInWithPopup(provider).then(result => {
        //     // console.log(result);
        //     navigate('/rooms/new');
        //     //Precisamos compartihar essa informação com vários componentes/telas do react => CONTEXTO.
        // }); 
        
        navigate('/rooms/new');
    }
    return(
        <div id ="page-auth">
            <aside>
                <img src = {IllustrationImg} alt = "question and answer"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire suas dúvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
                {/* <h1>{value}</h1> */}
                <div className='main-content'>
                    <img src = {LogoImg} alt = "imagem de logo" />
                    <button  onClick = {handleCreateRoom} className='create-room'>
                        <img src = {GoogleIcon} alt = "google icon" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>
                        Ou entre em uma sala
                    </div>
                    <form>
                        <input 
                        type = "text"
                        placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>Entrar na sala</Button>   
                    </form>
                </div>
            </main>
        </div>
    )
}