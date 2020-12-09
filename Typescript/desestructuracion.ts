(()=> {

    const avenger={
        nombre:'Steve',
        clave:'Capitan America',
        poder:'Droga'
    }
 
    const extraer=({nombre, poder}: any)=>{
        console.log(nombre)
        console.log(poder);
    }

    extraer(avenger);


    var avengers=['Thor','Ironman','Dpiderman'];

   const[,, arana]=avengers;

   const extraerArr=([thor,ironman,spiderman]:string[])=>{
       console.log(thor);
       console.log(ironman);
       console.log(spiderman);
   }
   extraerArr(avengers);
})();
