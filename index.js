// Import stylesheets
import './style.css';

//DESTRUCTURAR ARRAY
const persona1 = ['carlos', 33];
const persona2 = ['Juana', 66];

//poniendo la coma accedemos a la siguiente posición
const mostrar=([, edad] = persona)=> console.log(edad);

mostrar(persona1);
mostrar(persona2);


//DESTRUCTURAR OBJETOS
const usuario={
  nombre:'isa',
  edad:33,
  pais: 'españa'
}

//con un objeto no tenemos que hacer lo de la coma porque ya existe un valor que se llama pais y lo coge automáticamente
const {pais} = usuario;
console.log(pais);

//si cogemos un valor inexistente en el objeto podemos dar un valor
//por defecto
const {nombre, profesion = 'no especificado'} = usuario;
console.log(`nombre: ${nombre} profesion: ${profesion}`);

//destructurar el objeto desde una función directamente
const mostrarObjeto =( {nombre,pais} )=> console.log(`nombre: ${nombre}`);

//llamada a la función pasandole el objeto a destructurar
mostrarObjeto(usuario);

//reduce
let total = [1, 2, 3, 4, 5].reduce(function (previous, current, index) {
    let val = previous + current;
    console.log("The previous value is " + previous + 
                "; the current value is " + current +
                ", and the current iteration is " + (index + 1));
    return val;
}, 0);
 
console.log("The loop is done, and the final value is " + total + ".");