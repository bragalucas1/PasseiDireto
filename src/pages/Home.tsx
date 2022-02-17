import { useNavigate } from 'react-router-dom';
import { FormEvent, useContext, useState } from 'react';
import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import GoogleIcon from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function Home(){
    const navigate = useNavigate();
    const {user,signInWithGoogle} = useAuth();
    const [roomCode, setRoomCode] = useState('');


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
    async function handleJoinRoom(event: FormEvent){
        event.preventDefault();  //previne o redirecioamento automatico 
        if(roomCode.trim() === ''){
            return;
        }
        const roomRef = await database.ref(`rooms/${roomCode}`).get();
        if(!roomRef.exists()){
            alert('Room does not exists.')
            return;
        }
        navigate(`/rooms/${roomCode}`);
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
                    <form onSubmit={handleJoinRoom}>
                        <input 
                        type = "text"
                        placeholder='Digite o código da sala'
                        onChange={event => setRoomCode(event.target.value)}
                        value = {roomCode}
                        />
                        <Button type='submit'>Entrar na sala</Button>   
                    </form>
                </div>
            </main>
        </div>
    )
}