import style from './summary.module.scss'
import Profile from './profile';
import Menu from './menu';
import Experience from "./experience";
import Link from 'next/link';

export default function Summary() {
   return (
      <div className={style.main_container}>

         <aside className={style.profile}>
            <Profile></Profile>
         </aside>
         <menu className={style.menu}>
            <Menu></Menu>
         </menu>

         <main className={style.main}>

            <p className={style.topic}>Objetivo:</p>
            <p className={style.topic_description}>
               Trabalhar em equipe no desenvolvimento front-end, back-end e/ou full-stack de forma totalmente
               remota e com horário flexível.
            </p>
            <p className={style.topic}>Horário disponível:</p>
            <p className={style.topic_description}>
               De segunda a sexta das 15:30 às 23:30
            </p>

            <div className={style.experiences}>

               <Experience ano={2022} title='Uerj - Universidade do Estado do Rio de Janeiro' subTitle='Iprj - Campus Nova Friburgo' sinceTitle='3 meses' sinceDescription='desde 2022'>
                  <p>
                     Estudos voltados para o desenvolvimento de habilidades em novas plataformas. 
                  </p>
                  <p>
                     <strong>Função:</strong> Desenvolvedor de software Web - FrontEnd.
                     <br></br>
                     <strong>Tecnologias utilizadas:</strong> ReactJs, NextJs, Scss. 
                  </p>
               </Experience>

               <Experience title='TrocaFigurinhas.com' subTitle='Projeto pessoal' sinceTitle='17 anos' sinceDescription='desde 2005'>
                  <p>
                     Hoje a plataforma já conta com mais de 2500 álbuns de figurinhas disponíveis e 
                     mais de 130 mil colecionadores. O sistema conta com um série de ferramentas que auxiliam os participantes a completarem seus álbuns.
                     Mais detalhes de como funciona a plataforma pode ser visto aqui: 
                     <Link href={'https://www.trocafigurinhas.com/como-funciona.html'} target={'_blank'} > https://www.trocafigurinhas.com/como-funciona.html</Link>
                  </p>
                  
                  <p>
                     <strong>Função:</strong> Idealizador, criador, mantenedor e owner.
                     <br></br>
                     <strong>Tecnologias utilizadas:</strong> Asp, Asp.Net, C#, Entity Framework, MVC, Razor, Sql Server, Html, Css, Javascript, Jquery
                  </p>
               </Experience>

               <Experience ano={2021} title='Uerj - Universidade do Estado do Rio de Janeiro' subTitle='Campus Maracanã' sinceTitle='23 anos' sinceDescription='desde 1998'>
                  <p>
                     Como coordenador de equipe de desenvolvimento fui responsável pela transformação do setor de tecnologia de recursos humanos. Transformamos um setor que 
                     apenas dava suporte com relatórios gerenciais em um departamento de criação de soluções de tecnologia.
                  </p>
                  <p>
                     Gerenciamento de equipe em projetos Web e Gestão de informações. Responsável pela avaliação de tecnologias, montagem de equipe, solução de problemas etc.
                     Contato com clientes, elaboração de projetos, coleta de requisitos etc.
                  </p>
                  <p>
                     <strong>Função: </strong>Coordenador de equipe de desenvolvedores.
                     <br></br>
                     <strong>Tecnologias utilizadas:</strong> Trello 
                  </p>

               </Experience>
               <Experience ano={2014} title='Creare Computação Ciência e Arte' subTitle='Soluções exclusivas' sinceTitle='13 anos' sinceDescription='desde 2001'>
                  <p>
                     A Creare era uma empresa que promovia soluções personalizadas e exclusivas a dezenas de clientes. Uma fábrica de projetos e sistemas web que atendia a
                     necessidades exclusivas de seus parceiros comerciais.
                  </p>
                  <p>
                     Empresas para as quais criamos as mais variadas soluções, como por exemplo, sistemas de monitoramento, sistemas de RH, portais institucionais, plataformas de
                     educação continuada dentre muitas outras.
                  </p>
                  <p>
                     Accor Brasil | CEL - Centro Educacional da Lagoa | Gisplan | Globosat | Guto Goffi | IBM Brasil | Liceu Franco Brasileiro | Petrobras | PUC-Rio | Shell | Sul América | Unilever
                  </p>
                  <p>
                     <strong>Função: </strong>Desenvolvedor de Softwares Web - Full Stack
                     <br></br>
                     <strong>Tecnologias utilizadas:</strong> ASP, Asp.net, C#, SQL Server, Jquery, Html, Css, Javascript, Bootstrap
                  </p>
               </Experience>


            </div>
         </main>
      </div>
   );
}