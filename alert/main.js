const convertir=(a,b) => a /b;


let dolar= 40;
let euro= 42;
let real= 10;

let pesos =(prompt("Ingrese el monto"));

while(true){
  let moneda =(prompt("Elige la moneda a convertir Dolar , Euro, Real"));
switch(moneda.toLowerCase()){

case "dolar":

let resultado=convertir(pesos,dolar);

alert(resultado);

    break;
case "euro":

let resultado2=convertir(pesos,euro);

alert(resultado2);
    break;

    case "real":
    
let resultado3=convertir(pesos,real);

alert(resultado3);
    break;
    default:

    alert("Moneda no valida");

 break;
      
}

    pesos=prompt("ingrese el monto");
}







