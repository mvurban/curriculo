import './App.scss';
import '../styles/header-animation.css'
import clock from '../assets/clock.png';


function App() {

   return (
      <>

         <header>
            <h1 className='user-name'>Marcelo Vendas Urban</h1>
            <h3>Evolução de carreira, projetos desafiadores e experiência adiquirida. </h3>
            <h3>Tecnologias e skills desenvolvidas.</h3>
            <ul className="header-animated">
               <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
            </ul>
         </header>

         <main>
            <div>
               <div className='container-left'>
                  <img src={clock} alt='clock time' />
                  <h2>É sempre hora de aprender</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nulla assumenda. Consectetur labore facilis reprehenderit inventore incidunt aspernatur dolores doloremque velit nam nemo, fuga, sapiente magni excepturi, saepe ut. Autem?</p>
               </div>               
            </div>
            <div>meio</div>
            <div>
               <h2>Novas <br />Tecnologias</h2>
               <p>
                  O momento atual é de aprendizagem e mudanças.
               </p>
            </div>

         </main>
         <footer></footer>

      </>

   );
}

export default App;
