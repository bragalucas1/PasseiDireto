import foto from '../assets/images/profaprova1.jpeg';
export function AdminRoom(){
    return(
        <div className="wrapper">
        <div className="sidebar">
        <ul>
                <li><strong>Histórico</strong></li>
            </ul>
            <ul>
                <li><strong>Aprovações</strong></li>
                <li>* Prova MAT 666</li>
                <li>* Prova 2</li>
                <li>* Prova 3</li>
            </ul>
        <strong>VER MAIS</strong>
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
                    <li><a href="/Chat"><i className="fas fa-home"></i>Chat</a></li>
                    <li><a href="/Historico"><i className="fas fa-user"></i>Histórico</a></li>
                    <li><a href="/Disciplinas"><i className="fas fa-address-card"></i>Disciplinas</a></li>
                    <li><a href="/Salvos"><i className="fas fa-project-diagram"></i>Salvos</a></li>
                    <li><a href="/Upload"><i className="fas fa-blog"></i>Criar</a></li>
                    <input type="text" id="myInput" placeholder="Nome/código da disciplina "/>
                </ul>
            </nav>
        </header>
        <div className= "portrait"> 
            <img src ={foto} alt="disciplina"/>
        </div>
    </div>
</div>
    );
}