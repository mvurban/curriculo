import { ReactNode } from 'react';
import style from './experience.module.scss';

interface IExperience {

   ano?: number;
   title: string;
   subTitle: string;
   children: ReactNode;
   sinceTitle: string;
   sinceDescription: string;
   hasBullet?: boolean;
}


export default function Experience({ ano, title, subTitle, children, sinceTitle, sinceDescription }: IExperience) {
   return (

      <div className={ano? style.experience : ''}>
         <div className={style.ano_container}>
            {
               ano ?
                  <>
                     <div className={style.ano}>
                        <span>{ano}</span>
                     </div>
                     <div className={style.line}></div>
                  </>
                  :
                  <>
                     <div className={style.bullet}><div></div></div>
                     <div className={style.line_bullet}></div>
                  </>
            }
            
         </div>


         <div className={style.local_container}>

            <div className={style.local}>
               <div>
                  <p className={style.title}>{title}</p>
                  <p className={style.subtitle}>{subTitle}</p>
                  <div className={style.atividade}>
                     {children}
                  </div>
               </div>

            </div>

         </div>
         <div className={style.time}>
            <p className={style.title}>{sinceTitle}</p>
            <p className={style.subtitle}>{sinceDescription}</p>
         </div>

      </div>
   )
}
