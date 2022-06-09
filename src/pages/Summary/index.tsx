import style from './summary.module.scss'
import Profile from './profile';
import Menu from './menu';
import Experience from "./experience";

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

               <Experience ano={2022}
                  title='Uerj - Iprj'
                  subTitle='Campus Nova Friburgo'
                  sinceTitle='3 meses'
                  sinceDescription='desde 2022'>

                  <p className={style.atividade}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, expedita cupiditate earum nam
                     quas incidunt modi? Molestiae architecto voluptatum unde, commodi, atque necessitatibus
                     tempore dolorum odio excepturi, expedita optio.
                  </p>
                  <p className={style.atividade}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, expedita cupiditate earum nam
                     quas incidunt modi? Molestiae architecto voluptatum unde, commodi, atque necessitatibus
                     tempore dolorum odio excepturi, expedita optio.
                  </p>
               </Experience>

               <Experience                   
                  title='TrocaFigurinhas'
                  subTitle='Campus Nova Friburgo'
                  sinceTitle='3 meses'
                  sinceDescription='desde 2022'>

                  <p className={style.atividade}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, expedita cupiditate earum nam
                     quas incidunt modi? Molestiae architecto voluptatum unde, commodi, atque necessitatibus
                     tempore dolorum odio excepturi, expedita optio.
                  </p>
                  <p className={style.atividade}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, expedita cupiditate earum nam
                     quas incidunt modi? Molestiae architecto voluptatum unde, commodi, atque necessitatibus
                     tempore dolorum odio excepturi, expedita optio.
                  </p>
               </Experience>



            </div>

         </main>


      </div>
   );
}