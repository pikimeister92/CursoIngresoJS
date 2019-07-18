function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	
switch (mesDelAño) {

    case "Marzo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    case "Enero":
    case "Mayo":

        alert("este mes tiene 31 dias");
    break;

    case "Febrero":

        alert("este mes tiene 29 o 28 dias");

    break;
    
    case "Noviembre":
    case "Septiembre":
    case "Junio":
    case "Abril":
    
        alert("este mes tiene 30 dias");

    break;    




}


}//FIN DE LA FUNCIÓN