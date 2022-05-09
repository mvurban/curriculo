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

                  <Images marginToTop={150} >
                     <img src={clock} alt='clock time' />
                  </Images>

                  <Moments title='É sempre hora de aprender!!' marginToTop={450}>
                     A cada nova etapa novas skills vão se juntando na formação. E nesta área de constante mudança, estar por dentro das
                     tecnologias mais recentes é fundamental para a produção de produtos e serviços mais modernos e em menos tempo.
                  </Moments>
                  <Moments title="Recomeçando..." marginToTop={900}>
                     Mais do que nunca esse momento é de aprender, toda uma stack nova de desenvolvimento, novamente a programação como foco e não mais a gestão.
                     É um desafio, mas é com prazer que me dedico a essa nova empreitada.
                  </Moments>
                  <Moments title="Mudanças" marginToTop={1300}>
                     Agora é hora de recomeçar, muito esforço e dedicação são sempre recompensadores, mas abrir mão de certas
                     posições visando a melhora de qualidade de vida é um processo que tem o tempo correto. E esse tempo chegou pra mim.
                     <p>
                        Com mais de 23 anos de trabalho no campus Maracanã da Uerj - Universidade do Estado do Rio de Janeiro,
                        sendo 10 anos como coordenador de tecnologia na área de Recursos Humanos, realizei a transferência para o campus Nova Friburgo, sem uma equipe,
                        sem poder de decisão, mas com novas oportunidades.
                     </p>
                  </Moments>


               </div>
            </div>
            <div className='container-center'>

               <Ano year='2023' start={anoStart} height={200} ></Ano>
               <Ano year='2022' start={anoStart += anoHeight + 200} height={1000} ></Ano>
               <Ano year='2021' start={anoStart += anoHeight + 1000} height={800} ></Ano>
               <Ano year='2020' start={anoStart += anoHeight + 800} height={400} ></Ano>
               <Ano year='2014 - Nova equipe' start={anoStart += anoHeight + 400} height={400} ></Ano>
               <Ano year='2012 - Coordenador' start={anoStart += anoHeight + 400 } height={400} ></Ano>               
               <Ano year='2001 - Creare' start={anoStart += anoHeight + 400} height={400} ></Ano>
               <Ano year='1999 - Fim Faculdade' start={anoStart += anoHeight + 400} height={400} ></Ano>
               <Ano year='1998  - UERJ' start={anoStart += anoHeight + 400} height={400} ></Ano>
               <Ano year='1995 - Miller' start={anoStart += anoHeight + 400} height={400} ></Ano>
               <Ano year='1995 - Faculdade' start={anoStart += anoHeight + 400} height={400} ></Ano>
               <Ano year='1995 - Faculdade' start={anoStart += anoHeight + 400} height={400} ></Ano>
               <Ano year='1994 - Virgínia Patrick' start={anoStart += anoHeight + 400} height={400} ></Ano>
               <Ano year='1974 - Nascimento' start={anoStart += anoHeight + 400} height={0} ></Ano>


            </div>
            <div className='container-right'>

               <Images marginToTop={0}>
                  <img src={nuvem} alt='Apontando pra núvem'></img>
               </Images>

               <Moments title="O futuro é o reflexo do que foi" marginToTop={220}>
                  A medida que o tempo passa, nossa página progride, enquanto estivermos por aqui, sempre que algo importante no âmbito profissional
                  acontece vamos registrando...
               </Moments>


               <Moments title="Novas" titleLine2='Tecnologias' marginToTop={800}>
                  O momento atual é de aprendizagem e mudanças. 
                  <p>A criação desta página é parte deste processo. Me didico atualmente a melhorar minhas habilidades na programação de uma nova STACK.</p> 
                  <p>
                  <strong>Javascript</strong> já tenho contato de alguns anos atras, com jquery e javascript puro. Mas agora com a inserção do <strong>TypeScript</strong>, 
                  e de versões mais atuais, tudo fica mais encaixado e funcional.</p>
                  <p><strong>ReactJs, React-Native e Firebase </strong>são as tecnologias que estou dedicando 100% do tempo que tenho disponível, pra treinar e aprimorar. </p>
                  <p>Projetos exemplo das semanas de aprendizagem da <a href="https://www.rocketseat.com.br/" rel='noreferrer' target={'_blank'} > RocketSeat </a>  
                  (empresa voltado pra educação em programação), são sempre aproveitadas ao máximo. Sempre gravo as aulas e passo semanas aprendento todos os detalhes.  </p>
               </Moments>

               <Moments title="Coordenando e aprendendo" marginToTop={1820}>
                  Desde 2012, venho coordenando uma equipe de tecnologia que cria soluções para area de recursos humanos da UERJ. Hoje a equipe é formada por 6 profissionais, 
                  ligados principalmente com programação JAVA para desenvolvimento WEB e SQL SERVER como banco de dados.

                  <p>No início a equipe era apenas de 2 profissionais, um com 1 ano pra se aposenatar e outro com perfil não mais ligado a área de tecnologia. Toda a programação caia 
                  exclusivamente sob minha responsabilidade. Ainda assim conseguimos criar alguns sistemas, todos baseados nas seguintes tecnologias: ASP 3.0, Html, Css, JavaScript
                  para interface gráfica Photoshop e banco de dados SQL SERVER.</p>

                  <p></p>





               </Moments>


            </div>

         </main>
         <footer></footer>

      </>

   );
}

export default App;
