import IllustrationImg from '../assets/images/illustration.svg';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import LogoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function NewRoom(){
    const {user} = useAuth();
    const [newRoom, setNewRoom] = useState('');
    const navigate = useNavigate();
     async function handleCreateRoom(event: FormEvent){
         event.preventDefault();
         if(newRoom.trim() === ''){
             return;
         }
         //Referencia a uma instância no banco de Dados Firebase
         const roomRef = database.ref('rooms');
         const firebaseRoom = await roomRef.push({
             title: newRoom,
             authorId: user?.id
         })

         navigate(`/rooms/${firebaseRoom.key}`)
     }
    return(
        <div id ="page-auth">
            <aside>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire suas dúvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
                <div className='main-content'>
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                        type = "text"
                        placeholder='Nome da sala'
                        onChange={event => setNewRoom(event.target.value)}
                        value = {newRoom}
                        />
                        <Button type='submit'>Criar uma nova sala</Button>  
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to = "/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}