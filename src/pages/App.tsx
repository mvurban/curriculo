import './App.scss';
import '../styles/header-animation.css'
import clock from '../assets/clock3.png';
import nuvem from '../assets/nuvem.png';
import corona from '../assets/corona.png';
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
                     <p>
                     A cada nova etapa novas skills vão se juntando na formação. E nesta área de constante mudança, estar por dentro das
                     tecnologias mais recentes é fundamental para a produção de produtos e serviços mais modernos e em menos tempo.
                     </p>
                  </Moments>
                  {/* <Moments title="Recomeçando..." marginToTop={900}>
                     Mais do que nunca esse momento é de aprender, toda uma stack nova de desenvolvimento, novamente a programação como foco e não mais a gestão.
                     É um desafio, mas é com prazer que me dedico a essa nova empreitada.
                  </Moments> */}
                  <Moments title="Mudanças" marginToTop={1200}>
                     <p>Agora é hora de recomeçar, muito esforço e dedicação são sempre recompensadores, mas abrir mão de certas
                     posições visando a melhora de qualidade de vida é um processo que tem o tempo correto. E esse tempo chegou pra mim.</p>
                     <p>
                        Com mais de 23 anos de trabalho no campus Maracanã da Uerj - Universidade do Estado do Rio de Janeiro,
                        sendo 10 anos como coordenador de tecnologia na área de Recursos Humanos, realizei a transferência para o campus Nova Friburgo, sem uma equipe,
                        sem poder de decisão, mas com novas oportunidades.
                     </p>
                  </Moments>

                  <Images marginToTop={2100} >
                     <img src={corona} alt="Corona Vírus"></img>
                  </Images>
                  
                  <Moments title='Momentos difíceis' marginToTop={2400}>
                     <p>A pandemia não dá trégua, todo cuidado é necessário. </p>
                      <p>Muitas notícias ruins, parece que é um movimento sem fim. A cabeça no lugar nessas horas faz toda a diferença. Vamos em frente.</p>
                  </Moments>
               </div>
            </div>
            <div className='container-center'>
               <Ano year='2023' start={anoStart} height={200} ></Ano>
               <Ano year='2022' start={anoStart += anoHeight + 400} height={1000} ></Ano>
               <Ano year='2021' start={anoStart += anoHeight + 1000} height={800} ></Ano>
               <Ano year='2020' start={anoStart += anoHeight + 800} height={1400} ></Ano>
               <Ano year='2014 - Nova equipe' start={anoStart += anoHeight + 1400} height={800} ></Ano>
               <Ano year='2012 - Coordenador' start={anoStart += anoHeight + 800 } height={400} ></Ano>               
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
                  <img src={nuvem} alt='Apontando pra nuvem'></img>
               </Images>

               <Moments title="O futuro é o reflexo do que escolhemos" marginToTop={280}>
                  <p>A medida que o tempo passa, nossa página progride, enquanto estivermos por aqui, sempre que algo importante no âmbito profissional
                  acontece vamos registrando...</p>
               </Moments>


               <Moments title="Novas" titleLine2='Tecnologias' marginToTop={800}>
                  <p>O momento atual é de aprendizagem e mudanças. </p>
                  <p>A criação desta página é parte deste processo. Me dedico atualmente a melhorar minhas habilidades na programação de uma nova STACK.</p> 
                  <p>
                  <strong>Javascript</strong> já tenho contato de alguns anos atrás, com jquery e javascript puro. Mas agora com a inserção do <strong>TypeScript</strong>, 
                  e de versões mais atuais, tudo fica mais encaixado e funcional.</p>
                  <p><strong>ReactJs, React-Native e Firebase </strong>são as tecnologias que estou dedicando 100% do tempo que tenho disponível, pra treinar e aprimorar. </p>
                  <p>Projetos exemplo das semanas de aprendizagem da <a href="https://www.rocketseat.com.br/" rel='noreferrer' target={'_blank'} > RocketSeat </a>  
                  (empresa voltado pra educação em programação), são sempre aproveitadas ao máximo. Sempre gravo as aulas e passo semanas aprendendo todos os detalhes.  </p>
               </Moments>

               <Moments title='Trabalho a distância' titleLine2='Reuniões e mais reuniões' marginToTop={1800}>
                  <p>Muitos projetos estão sendo coordenados e produzidos a distância, reuniões de equipe são frequentes e os resultados estão sendo animadores, 
                   pois sem o deslocamento e o comprometimento da equipe conseguimos entregar mais com menos tempo.</p>
                   <p>Foco essencialmente em ajustes e melhorias nos projetos de Avaliação de Estágio Probatório, sistema de Relatórios e outros.</p>
               </Moments>

               <Moments title='Projetos e Soluções' marginToTop={2400}>
                  <p>Agora já estamos com uma equipe de respeito: 6 profissionais do mais algo gabarito, dedicados, comprometidos e competentes.</p>
                  <p>Conseguimos transformar um setor de apoio de informática numa fábrica de soluções, que apesar das dificuldades de planejamento e investimentos, conseguimos 
                     entregar muito valor aos processos de trabalho através da tecnologia.</p>

                  <p>Criamos soluções que abrangem vários micro segmentos dentro da area de recursos humanos. 
                     Alguns exemplos são: </p>
                     <ul>
                        <li>Sistema para envio de declaração de imposto de renda</li>
                        <li>Sistema de avaliação de estágio probatório</li>
                        <li>Sistema integrado de emissão de relatórios de várias áreas.</li>
                        <li>Sistema de protocolo</li>
                        <li>Sistema de pesquisa e controle cadastral</li>
                        <li>entre outros</li>
                     </ul>
                     
                     <p>Todos os projetos foram construídos com JAVA para desenvolvimento WEB e SQL SERVER como banco de dados.</p>
                     <p>Apesar de <strong>não ter domínio especificamente em JAVA</strong> e seu ecossistema, foi consideravelmente tranquilo coordenar a equipe, 
                        pois tinha uma <strong>boa base de C# e SQL Server</strong>, além das skills em projetos web.</p>
                  
               </Moments>
               
               <Moments title='Nova equipe' titleLine2='Novas cobranças' marginToTop={3800}>
                  <p>Chegou o momento de realmente darmos uma guinada na criação de soluções. <strong>Uma nova equipe está em formação.</strong></p>
                  
                  <p>No início a equipe era apenas de 2 profissionais, um com 1 ano pra se aposentar e outro com perfil não mais ligado a área de tecnologia. Toda a programação caia 
                  exclusivamente sob minha responsabilidade. Ainda assim conseguimos criar alguns sistemas, todos baseados nas seguintes tecnologias: ASP 3.0, Html, Css, JavaScript
                  para interface gráfica Photoshop e banco de dados SQL SERVER.</p>
                  
                  <p>Sistemas como inscrição para concurso público, consulta a contra-cheques e a declarações de tempo de serviço foram alguns projetos.</p>

                  <p>Agora a ideia é termos uma equipe real, com desenvolvedores e projetos bem definidos, que possamos cada vez mais promover a melhoria e a 
                     modernização dos processos de Recursos Humanos da Universidade</p>


               </Moments>
               
               <Moments title="Uma nova fase... Agora coordenando" marginToTop={5000}>
                  <p>
                  Assumo agora na Superintendência de Recursos Humanos da UERJ a <strong>coordenação de uma equipe de tecnologia</strong>. 
                  Espero crescer pessoalmente e profissionalmente com este novo desafio. 
                  Nossa equipe começa com 2 profissionais e muitos projetos pela frente.
                  </p>
               </Moments>


            </div>

         </main>
         <footer></footer>

      </>

   );
}

export default App;
