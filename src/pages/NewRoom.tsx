import IllustrationImg from '../assets/images/illustration.svg';
import { Link, useSearchParams } from 'react-router-dom';
import LogoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function NewRoom(){
    const {user} = useAuth();
    return(
        <div id ="page-auth">
            <aside>
                <img src = {IllustrationImg} alt = "question and answer"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire suas dúvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
                {/* <h1>value</h1> */}
                <div className='main-content'>
                    <img src = {LogoImg} alt = "imagem de logo" />
                    {/* <h1>{user?.name}</h1> */}
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                        type = "text"
                        placeholder='Nome da sala'
                        />
                        <Button type='submit'>Criar uma nova sala</Button>  
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to = "/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}