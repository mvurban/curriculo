import Link from 'next/link';
import style from './footer.module.scss';

export function Footer() {
   return (
      <div className={style.container}>
         <section>
            <h2>Contato</h2>
            <p>
               <strong>Marcelo Vendas Urban</strong>
            </p>
            <p>
               <strong>Tel/Whatsapp:</strong><br></br>
               +55 (21) 98604-5607
            </p>            
            <p>
               <strong>Emails:</strong><br></br>
               mvurban@mvurban.eti.br<br></br>
               mvurban2@gmail.com
            </p>
         </section>
         <section>
            <h2>Links relacionados</h2>
            <p>
               <Link href={'https://www.trocafigurinhas.com/'} target={'_blank'} >Troca Figurinhas</Link>               
            </p>
            <p>
               <Link href={'https://github.com/mvurban'} target={'_blank'}>Git Hub</Link>               
            </p>
            <p>
               <Link href={'https://mvurban.github.io/React-Treinos/'} target={'_blank'} >Treinos</Link>                              
            </p>            
         </section>
         <section>
            <h2>Tecnologias</h2>
            <ul>
               <li>React Js</li>
               <li>Next</li>
               <li>JavaScript</li>
               <li>Sass</li>
               <li>Html5</li>
               <li>Css3</li>
            </ul>
         </section>
      </div>
   );
}