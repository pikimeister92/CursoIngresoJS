function mostrar()
{

	// declarar variables
	
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;
	var esPrimeraIteracion = true;
	 
		   
		   
	while(respuesta!='no')
	{  
		numero = prompt("ingrese un numero");
		numero =parseInt(numero);

		if(esPrimeraIteracion === true)
		{
			maximo = numero
			minimo = numero;
		    esPrimeraIteracion=false;
		
		
		}
		else if(numero > maximo){
			maximo = numero;
		}
		else if(numero < minimo){
			
			minimo = numero
			
		}
		 respuesta =prompt("quiere seguir ingresando numero ");
	   
		 while( respuesta != "si" && respuesta != "no") 
		 {
	   
		 respuesta=prompt("error , ingrese si o no en caso de querer seguir sumando numeros"); 
	   
		}

	}

			document.getElementById("maximo")=maximo;
			document.getElementById("minimo")=minimo;


}//FIN DE LA FUNCIÓN