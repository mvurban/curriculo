import Image from "next/image";
import Link from "next/link";
import foto from '../../assets/fotoProfile.jpg'
import style from './summary.module.scss'
import back from '../../assets/voltar.png'

export default function Summary() {
   return (
      <div className={style.main_container}>
         <aside className={style.profile}>            
            <div className={style.user_container}>
               <div className={style.foto_container}>
                  <Image src={foto} className={style.foto}></Image>
               </div>
               <div className={style.username_container}>
                  <span>Marcelo Vendas Urban</span>
                  <span>48 anos</span>
               </div>
            </div>
            <div className={style.tech_container}>
               <ul>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javascript</li>
               </ul>
               <ul>
                  <li>ReactJs</li>
                  <li>Scss</li>
                  <li>Typescript</li>
                  <li>Next</li>
               </ul>
               <ul>
                  <li>Sql Server</li>
                  <li>Firebase</li>
               </ul>
               <ul>
                  <li>Photoshop</li>
                  <li>Figma</li>
               </ul>
            </div>
            <div className={style.contact_container}>
               <ul>
                  <li>mvurban2@gmail.com</li>
                  <li>mvurban@mvurban.eti.br</li>
                  <li>+55 (21) 98604-5607</li>                  
               </ul>               

            </div>
         </aside>
         <menu className={style.menu}>
            <button>
               <Link href={'./'}>
                  <Image src={back}></Image>
               </Link>
            </button>
         </menu>
         <main className={style.main}>
               MAIN
         </main>
         <aside className={style.time}>
               TIME
         </aside>
      </div>
   );
}