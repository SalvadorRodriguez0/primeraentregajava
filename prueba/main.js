const productos = [
    { id: 1, nombre: "media", precio: 1000 },
    { id: 2, nombre: "gorra", precio: 750 },
    { id: 3, nombre: "zapato", precio: 1200 },
    { id: 4, nombre: "camisa", precio: 375 },
  ];
   

   productos.forEach((item) => {
    log.console(item.nombre + item.precio + item.id);
   
  });