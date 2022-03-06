
//getElementById('hola') selecciona un elemento del documento por el atributo de ID que tenga, por ejemplo ahora estoy seleccionando el elemento con ID = hola

const palleteContainer = document.getElementById('palleteContainer');
const colorRange = document.getElementById('colorRange');
const colorValues = ['1','2','3','4','6','7','8','9','A','B','C','D','E','F'];
const PALLETE_SIZE = 5;

// .innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento
// .createElement('div') crea un elemento HTML especificado por su tagName o un HtmlUnknowElement si el tag name no se reconoce, aca, estaria creando un div 
// => es un indicador, una forma sintacticamente mas corta de especificar algunas funciones. antes de =>: lista de argumentos de la funcion. despues de => expresion que se devuelve como resultado de la ejecucion de la funcion.

const createPallete = () => {
    palleteContainer.innerHTML = '';
    for(let i = 0; i < PALLETE_SIZE; i++) {
        const palleteElement = document.createElement('div');
        palleteElement.classList.add('palleteItem');
        palleteContainer.appendChild(palleteElement);
    }
    updatePallete();
}

//math.floor devuelve el numero entero que sea menor igual al numero dado 

const colorize = (element) => {
    let color = '#';
    for(let i = 0; i < 6; i++) {
        const randomElement = colorValues[Math.floor(Math.random() * colorValues.length)];
        color += randomElement;
    };
    element.style.backgroundColor = color; 
    element.innerHTML = `<span class='colorHex'>${color}</span>`;   
}

const updatePallete = () => {
    for (let i = 0; i < palleteContainer.children.length; i++) {
        colorize(palleteContainer.children[i])
    }
};

createPallete();