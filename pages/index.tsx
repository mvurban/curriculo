import style from './index.module.scss';
import { Left } from '../components/Home/Left';
import { Center } from '../components/Home/Center';
import { Right } from '../components/Home/Right';
import { Header } from '../components/Home/Header';
import { Contact } from '../components/Home/Contact';

export default function index() {

   return (
      <>
         <header className={style.header}>
            <Header></Header>
         </header>

         <main className={style.main}>
            <section className={style.containerLeft}>
               <Left></Left>
            </section>
            <section className={style.containerCenter}>
               <Center></Center>
            </section>
            <section className={style.containerRight}>
               <Right></Right>
            </section>
         </main>
         <footer className={style.footer}>
            <section>
               <Contact></Contact>
            </section>
            <section>
               
            </section>
         </footer>
      </>
   );
}


