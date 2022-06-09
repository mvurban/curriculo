import Image from 'next/image';
import Link from 'next/link';
import style from './menu.module.scss';
import back from '../../assets/voltar.png';

export default function Menu() {
   return (
      <>
         <button className={style.back}>
            <Link href={'./'}>
               <Image src={back}></Image>
            </Link>
         </button>
      </>
   );
}