import style from  '../styles/Home.module.scss';
import styleHeader from  '../styles/HeaderAnimation.module.scss'
import {Left} from '../components/Home/Left';
import { Center } from '../components/Home/Center';
import { Right } from '../components/Home/Right';

export default function index() {

   return (
      <>
         <header className={style.header}>
            <h1 className={style.username}>Marcelo Vendas Urban</h1>
            <h3>Evolução de carreira, projetos desafiadores e experiência adiquirida. </h3>
            <h3>Tecnologias e skills desenvolvidas.</h3>
            <ul className={styleHeader.headeranimated}>
               <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
            </ul>
         </header>

         <main className={style.main}>
            <div>
               <div className={style.containerLeft}>
                  <Left></Left>
               </div>
            </div>
            <div className={style.containerCenter}>
               <Center></Center>
            </div>
            <div className={style.containerRight}>
               <Right></Right>

            </div>
         </main>
         <footer></footer>
      </>
   );
}


