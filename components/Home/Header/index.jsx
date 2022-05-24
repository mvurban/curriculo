import styleHeader from './header-animation.module.scss'
import style from './header.module.scss'


export function Header() {
   return (
      <div className={style.container}>
         <h1 className={style.username}>Marcelo Vendas Urban</h1>
         <h3>Evolução de carreira, projetos desafiadores e experiência adiquirida. </h3>
         <h3>Tecnologias e skills desenvolvidas.</h3>
         <ul className={styleHeader.headeranimated}>
            <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
         </ul>
      </div>
   );
}