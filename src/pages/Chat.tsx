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
        <div className="social_media">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
    <div className="main_content">
        <header>
            <i></i>
            <nav >
                <ul className="nav_links">
                    <li><a href="#"><i className="fas fa-home"></i>Chat</a></li>
                    <li><a href="#"><i className="fas fa-user"></i>Histórico</a></li>
                    <li><a href="#"><i className="fas fa-address-card"></i>Disciplinas</a></li>
                    <li><a href="#"><i className="fas fa-project-diagram"></i>Salvos</a></li>
                    <li><a href="#"><i className="fas fa-blog"></i>Criar</a></li>
                    <input type="text" id="myInput" placeholder="Nome/código da disciplina "/>
                </ul>
            </nav>
        </header>
        <div> 
            <h1>OLA</h1>  
        </div>
    </div>
</div>
);
}