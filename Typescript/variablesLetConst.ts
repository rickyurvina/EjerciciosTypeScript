(function(){
    
    function saludar( nombre:string ) {
        console.table( 'Hola ' + nombre ); // Hola Logan
    }  
    const wolverine = {
        nombre: 'Logan'
    };  
    
    saludar(wolverine.nombre);
    
    var mensaje = 'Hola';
    if(true){
        var mensaje= 'Mundo';
    }
    console.log(mensaje);
    
    let mensaje2 ="Hola";
    if(true){
        let mensaje2="Mundo";
    }
    
    console.log(mensaje2);
    
    const mensaje3='123';
   

}());

