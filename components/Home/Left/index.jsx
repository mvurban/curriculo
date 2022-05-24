import { Moments } from "../../Moments"
import { Images } from "../../Images"
import Image from 'next/image'
import buildappwithhands from '../../../public/assets/buildappwithhands.png'
import tf from '../../../public/assets/trocafigurinhas.png'
import style from './left.module.scss'

export function Left() {
   return(
      <div className={style.container}>
         <Moments title='É sempre hora de aprender!' marginToTop={150}>
            <p>
               A cada nova etapa novas skills vão se juntando na formação. E nesta área de constante mudança, estar por dentro das
               tecnologias mais recentes é fundamental para a produção de produtos e serviços mais modernos e em menos tempo.
            </p>
         </Moments>

         <Images marginToTop={600} >
            <Image src={buildappwithhands} alt='Tempo de aprender' />
         </Images>


         <Moments title="Mudanças" marginToTop={1100}>
            <p>Agora é hora de recomeçar, muito esforço e dedicação são sempre recompensadores, mas abrir mão de certas
               posições visando a melhora de qualidade de vida é um processo que tem o tempo correto. E esse tempo chegou pra mim.</p>
            <p>
               Com mais de 23 anos de trabalho no campus Maracanã da Uerj - Universidade do Estado do Rio de Janeiro,
               sendo <strong>10 anos como coordenador de tecnologia na área de Recursos Humanos</strong>, realizei a transferência para o campus Nova Friburgo, sem uma equipe,
               sem poder de decisão, mas com novas oportunidades.
            </p>
         </Moments>

         <Moments title='Trabalho a distância' titleLine2='Reuniões e mais reuniões' marginToTop={1700}>
            <h3>Uerj em casa</h3>
            <p>Muitos projetos estão sendo coordenados e produzidos a distância, reuniões de equipe são frequentes e os resultados estão sendo animadores,
               pois sem o deslocamento e o comprometimento da equipe conseguimos entregar mais em menos tempo.</p>
            <p>Foco essencialmente em ajustes e melhorias nos projetos de Avaliação de Estágio Probatório, sistema de Relatórios e outros.</p>
         </Moments>

         <Moments title='Nova equipe' titleLine2='Novas perspectivas' marginToTop={2300}>
            <h3>RH da UERJ promete</h3>
            <p>Chegou o momento de realmente darmos uma guinada na criação de soluções em RH. <strong>Uma nova equipe está em formação.</strong></p>

            <p>No início a equipe era apenas de 2 profissionais, um com 1 ano pra se aposentar e outro com perfil não mais ligado a área de tecnologia. Toda a programação caia
               exclusivamente sob minha responsabilidade. Ainda assim conseguimos criar alguns sistemas, todos baseados nas seguintes tecnologias:
            <strong> ASP 3.0 e .NET, Html, Css e JavaScript. Para interface gráfica Photoshop e banco de dados SQL SERVER.</strong></p>

            <p>Sistemas como inscrição para concurso público, consulta a contra-cheques e a declarações de tempo de serviço foram alguns projetos.</p>

            <p>Agora a ideia é termos uma equipe real, com desenvolvedores e projetos bem definidos, que possamos cada vez mais promover a melhoria e a
               modernização dos processos de Recursos Humanos da Universidade</p>
         </Moments>

         {/* //TODO Trocar a imagem do TF pra mostrar somente o logo */}

         <Images marginToTop={3200}>
            <Image src={tf} alt="trocafigurinhas.com"></Image>
         </Images>

         <Moments title='TrocaFigurinhas.com' marginToTop={3500}>
            <h3>Uma comunidade de colecionadores</h3>
            <p>Já na versão 3 a comunidade evolui com sua própria energia. Sem problemas técnicos e sempre com alta disponibilidade, o site requer
               poucos ajustes e interferências. Coisas que os próprios coordenadores conseguem dar conta.</p>
            <p>
               O site conta com uma estrutura robusta e que possibilita o participante achar pessoas que possuem suas figurinhas e solicitar trocas que são enviadas 
               pelos correios.
            </p>
            <p>
               O participante cadastra seus álbuns (agora são mais de 2600 álbuns disponíveis), suas figurinhas repetidas e as que já possui. Para trocar o 
               colecionador acessa a área de trocas e o sistema combina todas as figurinhas com outros participantes e fornece pra ele todos aqueles que possuem as 
               figurinhas que ele precisa e da mesma forma as figurinhas que ele tem que o outro participante precisa. Dessa forma conseguem fazer a troca.
            </p>
            <p>
               Além disso, tem todo um processo de avaliação após cada troca que permite qualificar participantes que a medida que fazem boas trocas, 
               vão subindo em uma hierarquia.
            </p>
            <p>
               O site ainda conta com fóruns, com um clube de trocas, coordenadores e uma série de funcionalidades que tornam um ambiente completo e divertido 
               para trocar figurinhas. 
            </p>
            <p>
               Competar os álbuns ficou muito, mas muito mais fácil e barato.
            </p>
            <p>
               As principais tecnologias envolvidas nessa versão são <strong>C#, ASP.NET Framework, Html, Css, Javascript, Jquery. </strong>
               As últimas evoluções, que foram o sistema de rifas e controle de roles de usuários já foram criados com  <strong>MVC, Code First, Entity Framework, Razor.</strong>
            </p>
            <p>
               Banco de dados utilizado desde o início foi o <strong>MSSQL Server</strong>, com uso de views, procedures, funções, índices, backups etc.
            </p>
            <p>
               Hospedagem do site, configuração de ambiente, instalação de certificado digital, email server, IIS server. Tudo rodando num servidor windows.
            </p>
         </Moments>

         <Moments title='Album de figurinhas incompleto?' marginToTop={5000}>
            <h3>Surgimento do TrocaFigurinhas.com</h3>
            <p>O TrocaFigurinhas.com surgiu de uma necessidade própria e um desejo de praticar programação com um projeto pessoal. </p>
            <p>
               Na época meu time de futebol estava indo bem, então resolvi, depois de velho, colecionar um álbum de figurinhas. Me deparei logo com 
               a principal dificuldade, as figurinhas repetidas e a quase impossibilidade de completar o álbum, já que não havia público da minha idade para
               realizar as trocas.
            </p>
            <p>
               Então fucei na internet algo que pudesse me ajudar e nada encontrei. Daí surgiu a ideia de criar algo pra me ajudar a completar o álbum.
            </p>
            <p>
               Surgia então a primeira versão do <a href='TrocaFigurinhas.com' alt='trocafigurinhas.com'>TrocaFigurinhas.com</a> feito basicamente com 
               <strong> Html, Css, Javascript, ASP e Sql Server </strong>
            </p>
            <p>
               Contemplava apenas um álbum que era o do Campeonato Brasileiro, justamente, é claro, o álbum que eu precisava completar.
            </p>
            <p>
               Aos poucos, mas de forma acelerada, novos participantes entravam e uma comunidade ia se formando e moldando como seria a troca de figurinhas no futuro.
            </p>
               
         </Moments>
         <Moments title="Agora formado" titleLine2="Ciência da Computação" marginToTop={6200}>
            <h3></h3>
            <p>
               Após longos 4 anos de estudos, dedicação e amizades enfim, formado.
            </p>
         </Moments>
         <Moments title="Miller" titleLine2="Assistência Médica" marginToTop={7000}>
            <h3></h3>
            <p>
               Meu primeiro emprego. Aqui aprendi muitas coisas, acho que a principal delas foi como não ser um gestor.
            </p>
            <p>
               O trabalho podia ser bom, o ambiente era bom, mas o gestor era péssimo. Tornava o dia a dia um ambiente competitivo, agressivo e de alta pressão.
               Algo simples que podia transcorrer com tranquilidade era transformado em desafio, em métrica e o ambiente era doentio.
            </p>
            <p>
               Principais tecnologias eram <strong>Clipper, dBase</strong>. Posteriormente usamos <strong>Power Builder e SQL Sybase</strong>
            </p>
         </Moments>

      </div>
   )
}