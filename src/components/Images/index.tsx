import { ReactNode } from "react";
import './style.scss';

interface IImages{
   children : ReactNode,
   marginToTop? : number
}

export function Images({children, marginToTop} : IImages) {

   return (
      <>      
      <div className="images-container" style={{marginTop:marginToTop}}>    
         {children}
      </div>
      </>
   );
}