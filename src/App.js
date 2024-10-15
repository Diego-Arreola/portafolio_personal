
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#Info">Info</a>
          <a href="#Projects">Projects</a>
          <a href="#Experience">Experience</a>
          <a href="#Contact">Contact</a>
        </nav>
      </header>
      <div id='Info' className='Info'>
        <h1>Diego Arreola</h1>
        <img src="" alt="Foto de perfil"/>
        <p>Estudiante de Ingeniería de Software</p>
      </div>
      <div id='Projects' className='Projects'>
        <h2>Projects</h2>
        <div className='project-container'>
            <div className='project_1'>
              <p>Pagina de una compañia de creación de fiestas</p>
              <h2>Tecnologias:</h2>
              <img src="" alt="HTML"/>
              <img src="" alt="CSS"/>
              <img src="" alt="JavaScript"/>
              <img src="" alt="Vue"/>
              <img src="" alt="PHP"/>
            </div>
            <div className='project_2'>
              <p>Creación de portafolios Web</p>
              <h2>Tecnologias:</h2>
              <img src="" alt="HTML"/>
              <img src="" alt="CSS"/>
              <img src="" alt="JavaScript"/>
            </div>
            <div className='project_3'>
              <p>Sistema de registro de pacientes de un hospital</p>
              <h2>Tecnologias:</h2>
              <img src="" alt="HTML"/>
              <img src="" alt="CSS"/>
              <img src="" alt="JavaScript"/>
              <img src="" alt="React"/>
              <img src="" alt="Node"/>
            </div>
          </div>
      </div>
      <div id='Experience' className='Experience'>
        <h2>Experience</h2>
        <div className='experience_1'>
          <p>Freelancer en web scrapping y creación de codigo html</p>
          <p>Duracion:</p>
          <p>6 meses</p>
        </div>
      </div>
      <div id='Contac' className='Contact'>
        <h2>Contact</h2>
        <div className='contact_1'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
