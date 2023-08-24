class Coches {
    constructor(marca,precio,año,modelo,color,estado) {
      this.marca = marca;
      this.precio = precio;
      this.año=año;
      this.modelo=modelo;
      this.color=color;
      this.estado=estado;
      this.vendido = false;
      
    }
  
    Stock() {
      this.vendido = true;
    }
  }
  const coche= [];

  coche.push(new Coches("ford","3500$",1978,"f150","granate","Usado"));
  coche.push(new Coches("volkswagen","2899$",1998,"golf","Rojo","Usado"));
  coche.push(new Coches("alfa romeo","3280$",2004,"147","Amarillo","Usado"));
  coche.push(new Coches("nissan","23.400$",2023,"ariya","Negro","Nuevo"));
  coche.push(new Coches("toyota","33.999$",2022,"bz4x","Blanco","Nuevo"));
  coche.push(new Coches("alfa romeo","18.340$",2023,"tonale","Negro","Nuevo"));
  coche.push(new Coches("fiat","14.500$",2022,"b-suv","Blanco","Nuevo"));

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
