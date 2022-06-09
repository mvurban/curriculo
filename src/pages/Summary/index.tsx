import Image from "next/image";
import Link from "next/link";
import style from './summary.module.scss'
import back from '../../assets/voltar.png'
import Profile from './profile';

export default function Summary() {
   return (
      <div className={style.main_container}>

         <Profile></Profile>
         
         <menu className={style.menu}>
            <button>
               <Link href={'./'}>
                  <Image src={back}></Image>
               </Link>
            </button>
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

               <div>
                  <div className={style.ano_container}>
                     <div className={style.ano}>
                        <span>2022</span>
                     </div>
                     <div className={style.line}></div>
                  </div>


                  <div className={style.local_container}>
                     <div className={style.local}>
                        <div>
                           <p className={style.title}>Uerj - Iprj</p>
                           <p className={style.subtitle}>Campus Nova Friburgo</p>
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
                        </div>


                        <div className={style.time}>
                           <p className={style.title}>3 meses</p>
                           <p className={style.subtitle}>desde 2022</p>
                        </div>


                     </div>

                     <div className={style.bullet} >

                     </div>
                     <div className={style.local}>
                        <div>
                           <p className={style.title}>TrocaFigurinhas.com</p>
                           <p className={style.subtitle}>Projeto pessoal</p>
                           <p className={style.atividade}>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, expedita cupiditate earum nam
                              quas incidunt modi? Molestiae architecto voluptatum unde, commodi, atque necessitatibus
                              tempore dolorum odio excepturi, expedita optio.
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, expedita cupiditate earum nam
                              quas incidunt modi? Molestiae architecto voluptatum unde, commodi, atque necessitatibus
                              tempore dolorum odio excepturi, expedita optio.                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, expedita cupiditate earum nam
                              quas incidunt modi? Molestiae architecto voluptatum unde, commodi, atque necessitatibus
                              tempore dolorum odio excepturi, expedita optio.
                           </p>
                        </div>
                        <div className={style.time}>
                           <p className={style.title}>3 meses</p>
                           <p className={style.subtitle}>desde 2022</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                  <div className={style.ano_container}>
                     <div className={style.ano}>
                        <span>2022</span>
                     </div>
                     <div className={style.line}></div>
                  </div>


                  <div className={style.local_container}>
                     <div className={style.local}>
                        <div>
                           <p className={style.title}>Uerj - Iprj</p>
                           <p className={style.subtitle}>Campus Nova Friburgo</p>
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
                        </div>


                        <div className={style.time}>
                           <p className={style.title}>3 meses</p>
                           <p className={style.subtitle}>desde 2022</p>
                        </div>


                     </div>

                     <div className={style.bullet} >

                     </div>
                     <div className={style.local}>
                        <div>
                           <p className={style.title}>TrocaFigurinhas.com</p>
                           <p className={style.subtitle}>Projeto pessoal</p>
                           <p className={style.atividade}>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, expedita cupiditate earum nam
                              quas incidunt modi? Molestiae architecto voluptatum unde, commodi, atque necessitatibus
                              tempore dolorum odio excepturi, expedita optio.
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, expedita cupiditate earum nam
                              quas incidunt modi? Molestiae architecto voluptatum unde, commodi, atque necessitatibus
                              tempore dolorum odio excepturi, expedita optio.                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, expedita cupiditate earum nam
                              quas incidunt modi? Molestiae architecto voluptatum unde, commodi, atque necessitatibus
                              tempore dolorum odio excepturi, expedita optio.
                           </p>
                        </div>
                        <div className={style.time}>
                           <p className={style.title}>3 meses</p>
                           <p className={style.subtitle}>desde 2022</p>
                        </div>
                     </div>
                  </div>
               </div>



            </div>

         </main>

         <aside className={style.time}>

         </aside>

      </div>
   );
}