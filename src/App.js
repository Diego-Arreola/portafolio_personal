

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#Info">Info</a>
          <a href="#Projects">Proyectos</a>
          <a href="#Experience">Experiencia</a>
          <a href="#Contact">Contacto</a>
        </nav>
      </header>
      <div id='Info' className='Info'>
        <h1>Diego Arreola</h1>
        <p>Estudiante de Ingeniería de Software</p>
        <a href='/CV.pdf' download><button >Descargar CV</button>
        </a>
      </div>
      <div id='Projects' className='Projects'>
        <h2>Proyectos</h2>
        <div className='project-container'>
            <div className='project_1'>
              <p>Pagina de una compañia de creación de fiestas</p>
              <h2>Tecnologias:</h2>
              <div className='images'>
                <img src="/HTML5.png" alt="HTML"/>
                <img src="/css.png" alt="CSS"/>
                <img src="/javascript.png" alt="JavaScript"/>
                <img src="/Vue.png" alt="Vue"/>
                <img src="/php.png" alt="PHP"/>
              </div>
            </div>
            <div className='project_2'>
              <p>Creación de portafolios Web</p>
              <h2>Tecnologias:</h2>
              <div className='images'>
                <img src="/HTML5.png" alt="HTML"/>
                <img src="/css.png" alt="CSS"/>
                <img src="/javascript.png" alt="JavaScript"/>
              </div>
            </div>
            <div className='project_3'>
              <p>Sistema de registro de pacientes de un hospital</p>
              <h2>Tecnologias:</h2>
              <div className='images'>
                <img src="/HTML5.png" alt="HTML"/>
                <img src="/css.png" alt="CSS"/>
                <img src="/javascript.png" alt="JavaScript"/>
                <img src="/React.svg.png" alt="React"/>
                <img src="/node.png" alt="Node"/>
              </div>
            </div>
          </div>
      </div>
      <div id='Experience' className='Experience'>
        <h2>Experiencia</h2>
        <div className='experience_1'>
          <p>Freelancer en web scrapping y <span><br></br></span>creación de codigo html</p>
          <p>Duracion:</p>
          <p>6 meses</p>
        </div>
      </div>
      <div id='Contact' className='Contact'>
        <h2>Contacto</h2>
        <div className='contact_1'>
          <p>E-mail: diegoarreola03@outlook.com</p>
          <div>
            <p>Linkedin:</p>
            <a href='https://www.linkedin.com/in/diego-arreola-hernandez'><img src="/linkedin.png" alt="Linkedin"/></a>
          </div>
          <div>
            <p>Github:</p>
            <a href='https://github.com/Diego-Arreola'><img src="/github.png" alt="Github"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
