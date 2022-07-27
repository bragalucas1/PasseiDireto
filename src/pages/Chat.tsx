import { Link } from 'react-router-dom';
import '../styles/navbar.css';
export function Chat(){
    return(
    <div className="wrapper">
        <div className="sidebar">
            <ul>
                <li>Lista</li>
                <li>Prova 1</li>
                <li>Prova 2</li>
                <li>Prova 3</li>
                <li>PQP</li>
            </ul> 
    </div>
    <div className="main_content">
        <header>
            <nav>
                <ul className="nav_links">
                    <li><a href="/Chat"><i className="fas fa-home"></i>Chat</a></li>
                    <li><a href="/Historico"><i className="fas fa-user"></i>Histórico</a></li>
                    <li><a href="/Disciplinas"><i className="fas fa-address-card"></i>Disciplinas</a></li>
                    <li><a href="/Salvos"><i className="fas fa-project-diagram"></i>Salvos</a></li>
                    <li><a href="/Upload"><i className="fas fa-blog"></i>Criar</a></li>
                    <input type="text" id="myInput" placeholder="Código da disciplina"/>
                </ul>
            </nav>
        </header>
        <div> 
            <h1>SOCOROOOOOOOOOOOOOOOOOOO</h1>  
        </div>
    </div>
</div>
);
}