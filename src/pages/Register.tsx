import { Link, useNavigate } from 'react-router-dom';
import { FormEvent,useState } from 'react';
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
        navigate('/menu');
    }
    
    return(
        <div id ="page-auth">
            <aside>
                <strong>Passei direto</strong>
                <p>O portal de provas, listas e testes das disciplinas da UFV.</p>
            </aside>
            <main>
                <div className='main-content'>
                     <div className='teste'>
                        <strong>Registre-se e contribua conosco</strong>
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
                        <p>Já possui uma conta? <Link to = "/">Entre ja!</Link></p>   
                    </form> 
                </div>
            </main>
        </div>
    );
}