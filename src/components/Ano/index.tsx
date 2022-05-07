import { useEffect } from 'react';
import './style.scss'

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

         //console.log(pageScrollY);         
   
         const lineColor = document.getElementById(`lineColor${year}`);
         const ano = document.getElementById(year);         
         const paintFrom = start
         const paintTo = start + height ;
         
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
               ano.classList.add('on');
            }
            else{
               //line.style.height = `0px`;
               ano?.classList.remove('on');
            }
         }              
      }
      
      return () => window.removeEventListener('scroll', onScroll);      
   }, [year, start, height]);


   



   return (
      <>
         <h1 id={year} className='ano'>{year}</h1>
         <div className='line-container'>
            <div className='line-separator' style={{height:height}}></div>
            <div id={"lineColor" + year} className='line-separator-colorfull'></div>
         </div>
      </>

   );
}