function mostrar()
{   var notas;
    var sexo;
    var promedio;
    var contador =0;
    var respuesta="si";
    var minimo;
    var numero;
    var acumuladorDeNotas= 0;
    while( respuesta == "si")   
    {   
        notas=prompt("Ingrese La Nota");
        parseInt=(notas) 
        while(isNaN(notas) || notas <0 || notas >10)
        {
            notas=prompt("Ingrese La Nota correcta");
            parseInt=(notas)
        } 
    
        sexo=prompt("Ingrese el Sexo");
    
        while(!isNaN(sexo) || sexo != "f" && sexo !="m")
        {
            sexo=prompt("Ingrese un Sexo Correcto");
        }   
        
            contador++;
            acumuladorDeNotas++;
        if(contador == 1 )
        {

            maximo=numero;
            minimo=numero;


        }
        else { 
             if (numero < minimo)
             {

                minimo=numero;
             }

            

             


        }
            while(contador ==5){
                alert(""+promedio + notas);
                alert(minimo + sexo )

            }
    
    
    }


       
}
