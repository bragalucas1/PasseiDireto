import { useNavigate } from 'react-router-dom';
import { FormEvent, useContext, useState } from 'react';
import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import GoogleIcon from '../assets/images/google-icon.svg';
import '../styles/register.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function Register(){
    const {user} = useAuth();
    const [newUser, setUserName] = useState('');
    const navigate = useNavigate();
    
    async function handleCreateAccount(event: FormEvent){
        event.preventDefault();
        if(newUser.trim() === ''){
            return;
        }
        //Referencia a uma instância no banco de Dados Firebase
        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newUser,
            authorId: user?.id
        })
        navigate(`/rooms/${firebaseRoom.key}`)
    }
    
    return(
        <div id ="page-auth">
            <aside>
                <strong>Passei direto</strong>
                <p>O portal de provas, listas e testes das disciplinas da UFV.</p>
            </aside>
            <main>
                <div className='main-content'>
                     <div className='separator'>
                        Registre-se e contribua conosco
                    </div> 
                     <form onSubmit={handleCreateAccount}>
                        <input
                        type = "text"
                        placeholder='Nome'
                        />
                        <input 
                        type = "e-mail"
                        placeholder='Digite o e-mail institucional'
                        onChange={event => setUserName(event.target.value)}
                        value = {newUser}
                        />
                        <input
                        type = "password"
                        placeholder = "Digite sua senha"
                        />
                        <Button type='submit' color='000000'>Registrar</Button>   
                    </form> 
                </div>
            </main>
        </div>
    );
}