import { ReactNode } from "react";
import style from  '../../styles/Component.Images.module.scss';

interface IImages{
   children : ReactNode,
   marginToTop? : number
}

export function Images({children, marginToTop} : IImages) {

   return (
      <>      
      <div className={style.imagesContainer} style={{marginTop:marginToTop}}>  
         <div style={{position: 'relative', maxHeight:'350px', maxWidth:'350px', alignSelf: 'center'}}>  
            {children}
         </div>
      </div>
      </>
   );
}