import style from './profile.module.scss'
import Image from "next/image";
import foto from '../../assets/fotoProfile.jpg'

export default function Profile() {
   return (
      <>
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
                  <li>Git</li>
                  <li>GitHub</li>
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
      </>
   );
}