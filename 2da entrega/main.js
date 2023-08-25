class Coches {
    constructor(marca,precio,año,modelo,color,estado) {
      this.marca = marca;
      this.precio = precio;
      this.año=año;
      this.modelo=modelo;
      this.color=color;
      this.estado=estado;
      
      
    }
 
    
  }
  const coche= [];

  coche.push(new Coches("ford","3500$",1978,"f150","granate","Usado"));
  coche.push(new Coches("volkswagen","2899$",1998,"golf","Rojo","Usado"));
  coche.push(new Coches("peugeot","3280$",2004,"147","Amarillo","Usado"));
  coche.push(new Coches("nissan","23.400$",2023,"ariya","Negro","Nuevo"));
  coche.push(new Coches("toyota","33.999$",2022,"bz4x","Blanco","Nuevo"));
  coche.push(new Coches("alfa romeo","18.340$",2023,"tonale","Negro","Nuevo"));
  coche.push(new Coches("fiat","14.500$",2022,"b-suv","Blanco","Nuevo"));






  let entrada = prompt("1)Consultar coches disponibles 2)Descripcion Coche  3)Simular cuota , ESC para salir" );

  while (entrada != "ESC") {
    switch (entrada) {
      case "1":
     
   coche.forEach((item) => {
    alert("Marca: " + item.marca + '  ' +
     "Modelo: " + item.modelo + '  ' +
       "Costo: " + item.precio);
  });
        break;


      case "2":
      
  let nombre = prompt("Ingrese la marca o modelo del coche a consultar").toLowerCase();


  while (nombre != "ESC") {
    
    let coches;
  
   
    for (const item of coche) {
      if (item.marca === nombre || item.modelo === nombre) {
        coches = item;
      }
    }
  
    if (coches) {
      let mensaje = `
        Marca: ${coches.marca}
        Precio: ${coches.precio}
        año: ${coches.año}
        modelo: ${coches.modelo}
        color: ${coches.color}
        estado: ${coches.estado}
      `;
  
      alert(mensaje);
    } else {
      alert("El producto no se encuentra disponible");
    }
  
    nombre = prompt("Ingrese la marca o modelo del coche a consultar").toLowerCase();
  }


        break;
      case "3":
        const cuota = (a, b) => {
          return a / b;
        };
       
        coche.forEach((item) => {
      const z= item.precio;
          alert("Marca: " + item.marca + '  ' +
           "Modelo: " + item.modelo + '  ' +
             "Costo Total: " + item.precio + '  ' +
             "Costo en 6 cuotas: " + (cuota(z,6)) );
             
        });
    
         break;


      default:
        alert("Opción invalida");
        break;
    }
    entrada = prompt("1)Consultar coches disponibles 2)Descripcion Coche  3)Simular cuota , ESC para salir");
  }













