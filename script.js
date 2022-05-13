//declarando variables
solicitarNombre ();
let precio= -1;
let iva;
let final;
do {

    precio=prompt("Ingresar precio del producto")
    if (precio<0 || isNaN(precio))  {
        alert ("Ingresar numeros validos")
    }
} while (precio<0 || isNaN(precio)==true)

iva = precio*0.21;
final= Number(precio)+Number(iva);
alert ("El iva del producto es "+iva )
alert ("El precio final del producto teniendo en cuenta el iva es "+final)


function solicitarNombre () {

    let nombreIngresado = prompt("Ingresar nombre")
    alert("El nombre ingresado es " +nombreIngresado)
}
