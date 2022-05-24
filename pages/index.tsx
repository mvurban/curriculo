import style from './index.module.scss';
import { Left } from '../components/Home/Left';
import { Center } from '../components/Home/Center';
import { Right } from '../components/Home/Right';
import { Header } from '../components/Home/Header';

export default function index() {

   return (
      <>
         <header className={style.header}>
            <Header></Header>
         </header>

         <main className={style.main}>
            <div className={style.containerLeft}>
               <Left></Left>
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


