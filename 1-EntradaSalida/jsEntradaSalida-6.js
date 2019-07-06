/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;
    var suma;
   
    numero1 =document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;
   
    numero1=2;//parseint(numero1);
    numero2=2;//parseint(numero2);
    

    
   
     suma=numero1+numero2;

    alert("la suma es: "+suma);

}

