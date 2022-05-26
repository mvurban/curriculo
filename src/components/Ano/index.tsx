import { useEffect } from 'react';
import style from  './ano.module.scss'

interface IAno {
   year : string,
   start: number,
   height: number
}


export function Ano({year, start, height} : IAno) {

   useEffect(() => {

      const onScroll = () => coloraseLineSeparator(window.pageYOffset);
      
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });

      function coloraseLineSeparator(pageScrollY : number) {
   
         const lineColor = document.getElementById(`lineColor${year}`);
         const ano = document.getElementById(year);         
         const paintFrom = start+50; 
         const paintTo = start + height +50 ;
         
         
         if (lineColor && ano){   
            
            if(pageScrollY < paintFrom){
               lineColor.style.height = '0px'
            }   
            if(pageScrollY >= paintTo){
               lineColor.style.height = `${paintTo-paintFrom}px`
            }
   
            if((pageScrollY > paintFrom && pageScrollY <= paintTo) )
            {    
               lineColor.style.height = `${pageScrollY - paintFrom}px`;
               ano.style.color = '#5D3BA2';
            }
            else if(pageScrollY < paintTo){
               ano.style.color = '';
            }
         }              
      }
      
      return () => window.removeEventListener('scroll', onScroll);    
   }, [year, start, height]);


   return (
      <>
         <h1 id={year} className={style.ano }>{year}</h1>
         <div className={style.lineContainer}>
            <div className={style.lineSeparator} style={{height:height}}></div>
            <div id={"lineColor" + year} className={style.lineSeparatorColorfull}></div>
         </div>
      </>

   );
}