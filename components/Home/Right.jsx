import { Images } from "../Images";
import Image from "next/image";
import { Moments } from "../Moments";
import robogear from '../../public/assets/robogear.png'
import produtos from '../../public/assets/produtos.png'
import equipe from '../../public/assets/equipe.png'

export function Right() {
   return (
      <>
         <Images marginToTop={0}>
            <Image src={robogear} alt='Imagem do futuro'></Image>
         </Images>

         <Moments title="O futuro é o reflexo do que escolhemos" marginToTop={370}>
            <p>A medida que o tempo passa, nossa página progride, enquanto estivermos por aqui, sempre que algo importante no âmbito profissional
               acontece vamos registrando.</p>
            <p><strong>Atualmente trabalhando na UERJ e no projeto TrocaFigurinhas.com  </strong></p>
         </Moments>


         <Moments title="Novas" titleLine2='Tecnologias' marginToTop={900}>
            <p>O momento atual é de aprendizagem e mudanças. </p>
            <p>A criação desta página é parte deste processo. Me dedico atualmente a melhorar minhas habilidades na programação de uma nova STACK.</p>
            <p>
               <strong>Javascript</strong> já tenho contato de alguns anos atrás, com jquery e javascript puro. Mas agora com a inserção do <strong>TypeScript</strong>,
               e de versões mais atuais, tudo fica mais encaixado e funcional.</p>
            <p><strong>ReactJs, Sass, Firebase e NextJs </strong>são as tecnologias que estou dedicando 100% do tempo que tenho disponível, pra treinar e aprimorar. </p>
            <p>Projetos exemplo das semanas de aprendizagem da <a href="https://www.rocketseat.com.br/" rel='noreferrer' target={'_blank'} > RocketSeat </a>
               (empresa voltado pra educação em programação), são sempre aproveitadas ao máximo. Sempre gravo as aulas e passo semanas aprendendo todos os detalhes.  </p>
         </Moments>

         <Images marginToTop={1650}>
            <Image src={produtos} alt='Produtos'></Image>
         </Images>

         <Moments title='Projetos e Soluções' marginToTop={2100}>
            <h3>Recursos Humanos - Uerj</h3>
            <p>Com uma equipe de 6 profissionais do mais algo gabarito, dedicados, comprometidos e competentes, conseguimos transformar um setor
               de apoio de informática numa fábrica de soluções, que apesar das dificuldades de planejamento e investimentos, conseguimos
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
            <p>
               Apesar de <strong>não ter domínio especificamente em JAVA</strong> e seu ecossistema, foi consideravelmente tranquilo coordenar a equipe,
               pois tinha uma <strong>boa base de C# e SQL Server</strong>, além das skills em projetos web.
            </p>

            <p></p>
            <h3>Soft Skills</h3>
            <p>
               O trato com os colegas, a flexibilidade e compartilhamento de ideias são requisitos importantes quando estamos diante de profissionais
               que não podem ser recompensados por seus méritos e nem punidos pelo seu baixo profissionalismo. São todos funcionários concursados e estáveis.
               <strong> Conduzir a equipe de modo a ter uma produção acima do esperado é algo importante a ser comentado.</strong>
            </p>

         </Moments>

         <Images marginToTop={3450}>
            <Image src={equipe} alt='Equipe'></Image>
         </Images>

         <Moments title="Dor no coração, fim de uma fase fantástica" marginToTop={3900}>
            <h3>Projetos na Creare chegam ao fim.</h3>
            <p>
               Infelizmente chegou a hora do adeus, fica a gratidão por experiências maravilhosas, por conhecer pessoas brilhantes, verdadeiros amigos, que
               me fizeram com certeza uma pessoa melhor.
            </p>
            <p>Nos quase <strong>14 anos</strong> de muito trabalho e companheirismo, passamos por muitos projetos e muitas experiências:</p>

            <p>
               Accor Brasil
               <strong> | </strong>
               CEL - Centro Educacional da Lagoa
               <strong> | </strong>
               Gisplan
               <strong> | </strong>
               Globosat
               <strong> | </strong>
               Guto Goffi
               <strong> | </strong>
               IBM Brasil
               <strong> | </strong>
               Liceu Franco Brasileiro
               <strong> | </strong>
               Petrobras
               <strong> | </strong>
               PUC-Rio
               <strong> | </strong>
               Shell
               <strong> | </strong>
               Sul América
               <strong> | </strong>
               Unilever
            </p>
            <p>
               As tecnologias utilizadas foram em sua maioria: <strong>ASP 3.0, JavaScript, JQuery, CSS, Html, Sql Server.
                  Nos últimos anos começamos a adoção do .Net e C#</strong>
            </p>
         </Moments>


         <Moments title="Uma nova fase... Agora coordenando" marginToTop={4600}>
            <h3>Desafios a vista... UERJ</h3>
            <p>
               Assumo agora na Superintendência de Recursos Humanos da UERJ a <strong>coordenação de uma equipe de tecnologia</strong>.
               Espero crescer pessoalmente e profissionalmente com este novo desafio.
               Nossa equipe começa com 2 profissionais e muitos projetos pela frente.
            </p>
         </Moments>
      </>
   );
}