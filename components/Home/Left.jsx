import { Moments } from "../Moments"
import { Images } from "../Images"
import Image from 'next/image'
import buildappwithhands from '../../public/assets/buildappwithhands.png'

export function Left() {
   return(
      <>
         <Moments title='É sempre hora de aprender!' marginToTop={150}>
            <p>
               A cada nova etapa novas skills vão se juntando na formação. E nesta área de constante mudança, estar por dentro das
               tecnologias mais recentes é fundamental para a produção de produtos e serviços mais modernos e em menos tempo.
            </p>
         </Moments>

         <Images marginToTop={600} >
            <Image src={buildappwithhands} alt='Tempo de aprender' />
         </Images>


         <Moments title="Mudanças" marginToTop={1200}>
            <p>Agora é hora de recomeçar, muito esforço e dedicação são sempre recompensadores, mas abrir mão de certas
               posições visando a melhora de qualidade de vida é um processo que tem o tempo correto. E esse tempo chegou pra mim.</p>
            <p>
               Com mais de 23 anos de trabalho no campus Maracanã da Uerj - Universidade do Estado do Rio de Janeiro,
               sendo <strong>10 anos como coordenador de tecnologia na área de Recursos Humanos</strong>, realizei a transferência para o campus Nova Friburgo, sem uma equipe,
               sem poder de decisão, mas com novas oportunidades.
            </p>
         </Moments>

         <Moments title='Trabalho a distância' titleLine2='Reuniões e mais reuniões' marginToTop={1800}>
            <h3>Uerj em casa</h3>
            <p>Muitos projetos estão sendo coordenados e produzidos a distância, reuniões de equipe são frequentes e os resultados estão sendo animadores,
               pois sem o deslocamento e o comprometimento da equipe conseguimos entregar mais em menos tempo.</p>
            <p>Foco essencialmente em ajustes e melhorias nos projetos de Avaliação de Estágio Probatório, sistema de Relatórios e outros.</p>
         </Moments>

         <Moments title='Nova equipe' titleLine2='Novas perspectivas' marginToTop={2400}>
            <h3>RH da UERJ promete</h3>
            <p>Chegou o momento de realmente darmos uma guinada na criação de soluções em RH. <strong>Uma nova equipe está em formação.</strong></p>

            <p>No início a equipe era apenas de 2 profissionais, um com 1 ano pra se aposentar e outro com perfil não mais ligado a área de tecnologia. Toda a programação caia
               exclusivamente sob minha responsabilidade. Ainda assim conseguimos criar alguns sistemas, todos baseados nas seguintes tecnologias:
            <strong> ASP 3.0 e .NET, Html, Css e JavaScript. Para interface gráfica Photoshop e banco de dados SQL SERVER.</strong></p>

            <p>Sistemas como inscrição para concurso público, consulta a contra-cheques e a declarações de tempo de serviço foram alguns projetos.</p>

            <p>Agora a ideia é termos uma equipe real, com desenvolvedores e projetos bem definidos, que possamos cada vez mais promover a melhoria e a
               modernização dos processos de Recursos Humanos da Universidade</p>
         </Moments>

         <Moments title='TrocaFigurinhas.com' marginToTop={3400}>
            <h3>Uma comunidade de colecionadores</h3>
            <p>Já na versão 3 a comunidade evolui com sua própria energia. Sem problemas técnicos e sempre com alta disponibilidade, o site requer
               poucos ajustes e interferências. Coisas que os próprios coordenadores conseguem dar conta.</p>
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
         <Moments title='Album de figurinhas incompleto?' titleLine2="Jamais !!!" marginToTop={4800}>
            <h3>Surgimento do TrocaFigurinhas.com</h3>
            <p>O TrocaFigurinhas.com surgiu de uma </p>
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

      </>
   )
}