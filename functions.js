const sentence = document.querySelector('#texto');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('resultado'); 


function getsentence() {
    // obtenemos el valor escrito por el usuario y lo almacenamos en una variable. 
    const userInput = sentence.value;
    return userInput
} 

function searchVocals (userInput) {

    // definimos un array con las vocales 
    const vocales = ["a","e","i","o","u"]; 

    // convertimos la entrada del usuario en un array 
    const caracteres = userInput.split("") 

    // definimos una variable que va a comparar si nuestra cadena contiene las vocales que ya definimos 
    const vocalesExtraidas = caracteres.filter(caracter => vocales.includes(caracter));

    // retornamos el array con las vocales 
    return vocalesExtraidas
}

function deleteDuplicity(vocalesExtraidas) {

    // Aqui definimos 
    const caracteresUnicos = [...new Set(vocalesExtraidas)]; 

    return caracteresUnicos; 
}

function getVocals(caracteresUnicos) {
    vocalesObtenidas = caracteresUnicos.join(","); 
   
    return vocalesObtenidas; 
}

function mostrarString(vocalesObtenidas) {

    const elementoResultado = document.getElementById('resultado')
    elementoResultado.textContent = vocalesObtenidas;
}

boton.addEventListener ('click', function () {
  
    const userText = getsentence(); // Almacenamos el retorno de la funcion en una variable 

    // Llamamos la variable que busca las vocales y le asignamos como parametro el retorno de getsentence 
    const arrayVocales = searchVocals(userText); 

    // llamamos a la funcion de eliminar duplicidades 
    const elementosUnicos = deleteDuplicity(arrayVocales);

    const impresionVocales = getVocals(elementosUnicos); 

    mostrarString(impresionVocales)

})



