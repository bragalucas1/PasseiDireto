import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useContext, useState } from 'react';
import GoogleIcon from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function Login(){
    const navigate = useNavigate();
    const {user,signInWithGoogle} = useAuth();
    const [email, setEmail] = useState('');

    /*Autenticação com FireBase.*/
    async function handleSucessfullAccess(): Promise<void>{
        if(!user){
           await signInWithGoogle();
        }
        navigate('/menu');
    }
    async function handleJoinSucessfull(event: FormEvent): Promise<void>{
        event.preventDefault();  //previne o redirecioamento automatico 
        if(email.trim() === ''){
            return;
        }
        const userRef = await database.ref(`menu/${email}`).get();
        if(!userRef.exists()){
            alert('User does not exists.')
            return;
        }
        navigate(`/menu/${email}`);
    }
    return(
        <div id ="page-auth">
            <aside>
                <strong>Passei direto</strong>
                <p>O portal de provas, listas e testes das disciplinas da UFV.</p>
            </aside>
            <main>
                <div className='main-content'>
                    <div className ='negrito'>
                        <strong>Bem vindo novamente!</strong>
                    </div>
                    <button  onClick = {handleSucessfullAccess} className='goto-menu'>
                        <img src = {GoogleIcon} alt = "google icon" />
                        Entre com o google 
                    </button>
                    <div className='separator'>
                        Ou entre com suas credenciais
                    </div>
                    <form onSubmit={handleJoinSucessfull}>
                        <input 
                        type = "e-mail"
                        placeholder='Digite o e-mail institucional'
                        onChange={event => setEmail(event.target.value)}
                        value = {email}
                        />
                        <input
                        type = "password"
                        placeholder = "Digite sua senha"
                        />
                        <Button type='submit'>Entrar</Button>   
                    </form>
                    <p>Não possui uma conta? <Link to = "/register">Registre-se</Link></p>
                </div>
            </main>
        </div>
    )
}