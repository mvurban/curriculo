import './App.scss';
import '../styles/header-animation.css'
import clock from '../assets/clock3.png';
import nuvem from '../assets/nuvem.png';
import { Ano } from '../components/Ano';
import { Moments } from '../components/Moments';
import { Images } from '../components/Images';

function App() {

   let anoStart = 100;
   const anoHeight = 100

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
                  
                  <Moments title='É sempre hora de aprender!!' marginToTop={350}>                     
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nulla assumenda. Consectetur labore facilis reprehenderit inventore incidunt aspernatur dolores doloremque velit nam nemo, fuga, sapiente magni excepturi, saepe ut. Autem?</p>
                  </Moments>
               </div>
            </div>
            <div className='container-center'>

               <Ano year='2023' start={anoStart} height={400} ></Ano>
               <Ano year='2022' start={anoStart += anoHeight + 400 } height={400} ></Ano>
               <Ano year='2021' start={anoStart += anoHeight + 400} height={800} ></Ano>
               <Ano year='2020' start={anoStart += anoHeight + 800} height={400} ></Ano>
               <Ano year='2019' start={anoStart += anoHeight + 400} height={400} ></Ano>

            </div>
            <div className='container-right'>

               <Images  marginToTop={0}>
                  <img src={nuvem} alt='Apontando pra núvem'></img>
               </Images>

               <Moments title="O futuro é o reflexo do que foi" marginToTop={220}>
                  A medida que o tempo passa, nossa página progride, enquanto estivermos por aqui, sempre que algo importante no âmbito profissional acontece vamos registrando por aqui.
               </Moments>


               <Moments title="Novas" titleLine2='Tecnologias'  marginToTop={900}>
                  O momento atual é de aprendizagem e mudanças. 
               </Moments>

               <Moments title="Mudanças" marginToTop={1300}>                                    
                  Agora é hora de recomeçar, muito esforço e dedicação são sempre recompensadores, mas abrir mão de certas 
                  posições visando a melhora de qualidade de vida é um processo que tem o tempo correto. E esse tempo chegou pra mim.                  
                  <p>
                     Com mais de 23 anos de trabalho no campus Maracanã da Uerj - Universidade do Estado do Rio de Janeiro, 
                     sendo 10 anos como coordenador de tecnologia na área de Recursos Humanos, pedi transferência para o campus Nova Friburgo, sem uma equipe, 
                     sem poder de decisão, mas com novas oportunidades.                     
                  </p>
               </Moments>


            </div>

         </main>
         <footer></footer>

      </>

   );
}

export default App;
