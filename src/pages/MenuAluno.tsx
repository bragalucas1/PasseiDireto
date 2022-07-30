import { Link, useNavigate } from "react-router-dom";
import '../styles/navbar.css';
import foto from '../assets/images/listardisciplina.jpeg';
import { useState } from "react";
export function MenuAluno(){

    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    async function handleQueryInput(){
        console.log(query);
        navigate('/queryResult');
    }
    
    return (
    <div className="wrapper">
        <div className="sidebar">
            <ul>
                <li>Lista</li>
                <li>Prova 1</li>
                <li>Prova 2</li>
                <li>Prova 3</li>
            </ul> 
    </div>
    <div className="main_content">
        <header>
            <i></i>
            <nav >
                <ul className="nav_links">
                    <li><a href="/Chat"><i className="fas fa-home"></i>Chat</a></li>
                    <li><a href="/Historico"><i className="fas fa-user"></i>Histórico</a></li>
                    <li><a href="/Disciplinas"><i className="fas fa-address-card"></i>Disciplinas</a></li>
                    <li><a href="/Salvos"><i className="fas fa-project-diagram"></i>Salvos</a></li>
                    <li><a href="/Upload"><i className="fas fa-blog"></i>Criar</a></li>
                    <form onSubmit={handleQueryInput}>
                        <input 
                        type="text" id="myInput" 
                        placeholder="Nome/código da disciplina"
                        onChange={event => setQuery(event.target.value)}
                        value = {query}
                        />
                    </form>
                </ul>
            </nav>
        </header>
        <div className="portrait"> 
            <img src ={foto}  alt="disciplina"/>
        </div>
    </div>
</div>
);
}