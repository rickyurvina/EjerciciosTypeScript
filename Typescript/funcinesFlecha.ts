(function () {
    const miFuncion = function (a: string) {
      return a.toUpperCase();
    };
    const miFuncionF = (a: string) => a.toUpperCase();
  
    console.log(miFuncion("nORMAL"));
    console.log(miFuncionF("Flecha"));
  
    const sumarN = function (a: number, b: number) {
      return a + b;
    };
  
    const sumarF = (a: number, b: number) => a + b;
  
    console.log(sumarN(5, 5));
    console.log(sumarF(4, 9));
  
    const hulk={
        nombre:'Hulk',
        smash(){
  
          setTimeout(()=>{
              console.log(`${this.nombre} smash!!!`);
          }, 1000)
        }
    }
    hulk.smash();
  })();
  