import {Ano} from '../../Ano';
import style from './center.module.scss';

export function Center(){

   let anoStart = 100;
   const anoHeight = 100

   function getStart(start) {
      anoStart += anoHeight + start
      return anoStart;
   }

   return(
      <div className={style.container}>
         <Ano year='2023' start={anoStart} height={200} ></Ano>
         <Ano year='2022' start={getStart(200)} height={800} ></Ano>
         <Ano year='2021' start={getStart(800)} height={1000} ></Ano>
         <Ano year='2019' start={getStart(1000)} height={1200} ></Ano>
         <Ano year='2014' start={getStart(1200)} height={900} ></Ano>

         {/* Coordenador - UERJ */}
         <Ano year='2012' start={getStart(900) } height={200} ></Ano> 
         
         {/* TrocaFigurinhas criação */}
         <Ano year='2005' start={getStart(200)} height={400} ></Ano>

         {/* Creare - Início */}
         <Ano year='2001' start={getStart(400)} height={400} ></Ano>

         {/* Faculdade - Formatura */}
         <Ano year='1999' start={getStart(400)} height={600} ></Ano>

         {/* Uerj - Início */}
         <Ano year='1998' start={getStart(600)} height={400} ></Ano>

         {/* Miller e faculdade - Inicio */}
         <Ano year='1995' start={getStart(400)} height={400} ></Ano>

         {/* Virginia Patrick */}
         <Ano year='1994' start={getStart(400)} height={500} ></Ano>         
         <Ano year='Fim' start={getStart(500)} height={300} ></Ano>         
      </div> 
   );
}