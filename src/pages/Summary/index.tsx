import Image from "next/image";
import Link from "next/link";
import foto from '../../assets/fotoProfile.jpg'
import style from './summary.module.scss'
import back from '../../assets/voltar.png'

export default function Summary() {
   return (
      <>
         <aside className={style.aside}>            
            <div className={style.profile}>               
               <div className={style.fotocontainer}>
                  <Image src={foto} className={style.foto}></Image>
               </div>
               <span>Marcelo Vendas Urban</span>
               <span>48 anos</span>
            </div>
            <div className={style.socialmedia}>
               <ul>
                  <li><Link href={'https://www.trocafigurinhas.com/'} target={'_blank'}>TrocaFigurinhas.com</Link></li>
                  <li><Link href={'https://www.linkedin.com/in/mvurban/'} target={'_blank'}>Linked-in</Link></li>
                  <li><Link href={'https://github.com/mvurban'} target={'_blank'}>GitHub</Link></li>
                  <li><Link href={'https://mvurban.github.io/React-Treinos/'} target={'_blank'}>Treinos</Link></li>                  
               </ul>               

            </div>
         </aside>
         <menu>
            <button>
               <Link href={'./'}>
                  <Image src={back}></Image>
               </Link>
            </button>
         </menu>
         <main>

         </main>
      </>

   );
}