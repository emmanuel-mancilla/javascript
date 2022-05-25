solicitarNombre ();
let car=0;



const autos = [
    {
        nombre: "Ford Fiesta",
        ano: 2018,
        precio: "10.000 USD",
        id: 1
    },
        {
        nombre: "Gol Trend",
        ano: 2017,
        precio: "7.000 USD",
        id: 2
        },

        {
            nombre: "Honda Civic",
            ano: 2020,
            precio: "15.000 USD",
            id: 3
            }



]




do {

    car=prompt("Para ver los autos en stock presiona 1, 2 o 3")
    if (car<=0 || isNaN(car) || car>3)  {
        alert ("Ingresar numeros validos")
    }
} while (car<=0 || isNaN(car))

let found = autos.find(autos => autos.id == car);

console.log(found);
if (found.id == 1)
{
    alert("El auto seleccionado es "+found.nombre)
    alert("Hecho el año "+found.ano)
    alert("Con un precio de "+found.precio)
}
if (found.id == 2)
{
    alert("El auto seleccionado es "+found.nombre)
    alert("Hecho el año "+found.ano)
    alert("Con un precio de "+found.precio)
}
if (found.id == 3)
{
    alert("El auto seleccionado es "+found.nombre)
    alert("Hecho el año "+found.ano)
    alert("Con un precio de "+found.precio)
}



function solicitarNombre () {

    let nombreIngresado = prompt("Ingresar nombre")
    alert("El nombre ingresado es " +nombreIngresado)
}
