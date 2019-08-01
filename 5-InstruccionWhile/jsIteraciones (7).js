function mostrar()
{

	var acumulador= 0;
	var contador= 0;
	var respuesta;
	var numero;


	do {
			numero=prompt("Ingrese un numero");
			while(isNaN(numero))
			{
				numero=prompt("ingrese un numero");
			}			
			
			numero=parseInt(numero);
			respuesta= prompt("¿ Desea seguir ?  S/N ");
			acumulador = acumulador + numero ;
			contador++;

				respuesta = prompt ("¿Desea seguir?  S/N :");
			while{ respuesta != "S" && respuesta != "N"}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN