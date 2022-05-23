import {Ano} from '../Ano'

export function Center(){

   let anoStart = 100;
   const anoHeight = 100

   return(
      <>
         <Ano year='2023' start={anoStart} height={200} ></Ano>
         <Ano year='2022' start={anoStart += anoHeight + 200} height={800} ></Ano>
         <Ano year='2021' start={anoStart += anoHeight + 800} height={1000} ></Ano>
         <Ano year='2019' start={anoStart += anoHeight + 1000} height={1200} ></Ano>
         <Ano year='2014' start={anoStart += anoHeight + 1200} height={800} ></Ano>

         {/* Coordenador - UERJ */}
         <Ano year='2012' start={anoStart += anoHeight + 800 } height={400} ></Ano> 
         
         {/* TrocaFigurinhas criação */}
         <Ano year='2005' start={anoStart += anoHeight + 400} height={400} ></Ano>

         {/* Creare - Início */}
         <Ano year='2001' start={anoStart += anoHeight + 400} height={400} ></Ano>

         {/* Faculdade - Formatura */}
         <Ano year='1999' start={anoStart += anoHeight + 400} height={400} ></Ano>

         {/* Uerj - Início */}
         <Ano year='1998' start={anoStart += anoHeight + 400} height={400} ></Ano>

         {/* Miller - Inicio */}
         <Ano year='1995' start={anoStart += anoHeight + 400} height={400} ></Ano>

         {/* Faculdade - Inicio */}
         <Ano year='1995' start={anoStart += anoHeight + 400} height={400} ></Ano>

         {/* Virginia Patrick */}
         <Ano year='1994' start={anoStart += anoHeight + 400} height={400} ></Ano>         
      </>
   );
}