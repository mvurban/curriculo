import './App.scss';
import '../styles/header-animation.css'
import clock from '../assets/clock.png';
import { Ano } from '../components/Ano';
import { Moments } from '../components/Moments';
import { Images } from '../components/Images';

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

                  <Images marginToTop={50} >                     
                     <img src={clock} alt='clock time' />   
                  </Images>
                  
                  <Moments title='É sempre hora de aprender!!' marginToTop={380}>                     
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nulla assumenda. Consectetur labore facilis reprehenderit inventore incidunt aspernatur dolores doloremque velit nam nemo, fuga, sapiente magni excepturi, saepe ut. Autem?</p>
                  </Moments>
               </div>
            </div>
            <div className='container-center'>

               <Ano year='2022' start={200} height={400} ></Ano>
               <Ano year='2021' start={700} height={400} ></Ano>
               <Ano year='2020' start={1200} height={800} ></Ano>
               <Ano year='2019' start={2100} height={400} ></Ano>
               <Ano year='2018' start={2600} height={400} ></Ano>

            </div>
            <div className='container-right'>

               <Moments title="Novas" titleLine2='Tecnologias'  marginToTop={400}>
                  O momento atual é de aprendizagem e mudanças. 
               </Moments>

               <Moments title="Mudanças" marginToTop={700}>
                  Agora é hora de recomeçar, muito esforço e dedicação são sempre recompensadores, mas abrir mão de certas posições visando a melhora de qualidade de vida é um processo que tem o tempo correto. E esse tempo chegou pra mim.
               </Moments>


            </div>

         </main>
         <footer></footer>

      </>

   );
}

export default App;
