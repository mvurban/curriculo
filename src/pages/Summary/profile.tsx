import style from './profile.module.scss'
import Image from "next/image";
import foto from '../../assets/fotoProfile.jpg'

export default function Profile() {
   return (
      <>
         <div className={style.user_container}>
            <div className={style.foto_container}>
               <Image src={foto} className={style.foto}></Image>
            </div>
            <div className={style.username_container}>
               <p>Marcelo Vendas Urban <small>48 anos</small></p>
               <p>Bacharel em Ciência da Computação em 1999</p>
               <p>Centro Universitário Moacyr Sreder Bastos</p>
            </div>
         </div>
         <div className={style.tech_container}>
            <div className={style.teck_container_left}>

               <ul>
                  <li>ReactJs</li>
                  <li>Scss</li>
                  <li>Typescript</li>
                  <li>Next</li>
                  <li>C#</li>
                  <li>ASP.NET</li>
               </ul>
               <ul>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javascript</li>
               </ul>
               <ul>
                  <li>AWS</li>
                  <li>Versel</li>
               </ul>
               <ul>
                  <li>Scrun</li>
                  <li>Kanban</li>
               </ul>
            </div>
            <div className={style.teck_container_right}>
               <ul>
                  <li>MS-Sql Server</li>
                  <li>MySql</li>
                  <li>NodeJs
                     <ul>
                        <li>Express</li>
                        <li>Sequelize</li>
                     </ul>
                  </li>
                  <li>APIs Rest</li>
                  <li>Firebase</li>
               </ul>
               <ul>
                  <li>Photoshop</li>
                  <li>Figma</li>
               </ul>
               <ul>
                  <li>Git</li>
                  <li>GitHub</li>
               </ul>
               <ul>
                  <li>CI/CD</li>
               </ul>
            </div>
         </div>
         <div className={style.contact_container}>
            <ul>
               <li>mvurban2@gmail.com</li>
               <li>mvurban@mvurban.eti.br</li>
               <li>+55 (21) 98604-5607</li>
            </ul>
            <ul>
               <li>Nova Friburgo - RJ</li>
            </ul>

         </div>
      </>
   );
}