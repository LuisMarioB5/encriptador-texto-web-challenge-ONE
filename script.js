// Variable para almacenar el idioma actual de la página
var idioma;

// Variable para almacenar los mensajes que se les mostran al usuario mediante el article 'error'
var mensajeUsuario;

// Definición de los elementos HTML, utilizando el DOM
var header;
var headerStyles;
var logo;
var h1;
var botonesIdioma;
var interacionUsuario;
var interacionUsuarioStyles;
var textoEntrada;
var imgPrecaucion;
var alerta;
var encriptar;
var encriptarStyles;
var encriptarHeight;
var desencriptar;
var resultado;
var textoSalida;
var textoSalidaHeight;
var copiar;
var error;
var imgError;
var tituloError;
var parrafoError;
var footer;
var footerStyles;
var developer;
var year;

// Variable para almacenar las 'claves' de la encriptación
const palabrasReemplazar = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

// Este evento se dispará luego de que todo el contenido HTML este completamente cargado en la página
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el primer botón con la clase 'idioma'
    let idiomaPredeterminado = document.querySelector('.idioma');

    // Llama a la función cambiaIdioma para seleccionar el idioma del primer botón
    cambiarIdioma(idiomaPredeterminado);
    
    // Llama a la función textareaResize para establecer el tamaño correcto de los textareas
    textareaResize();

});

// Función para cambiar el idioma de los elementos de la página
function cambiarIdioma(botonPresionado) {
    // Transformando el valor del boton a minúsculas (lowercase)
    idioma = botonPresionado.textContent.toLowerCase();

    // Objeto anidado para almacenar los dos posibles juegos de pares (título, párrafo) dependiendo el idioma
    mensajeUsuario = {
        es: {
            normal: {
                titulo: 'Deseas encriptar algún texto?',
                parrafo: 'Colócalo en la parte izquierda y dale al botón "Encriptar"'
            },
            error: {
                titulo: 'Revisa el párrafo y vuelve a intentar',
                parrafo: 'Debido a que contiene letras mayúsculas o caracteres especiales.'
            }
        },

        en: {
            normal: {
                titulo: 'Do you want to encrypt some text?',
                parrafo: 'Place it on the left side and click the "Encrypt" button'
            },
            error: {
                titulo: 'Check the paragraph and try again',
                parrafo: 'Because it contains capital letters or special characters.'
            }
        },

        pt: {
            normal: {
                titulo: 'Você quer criptografar algum texto?',
                parrafo: 'Coloque-o no lado esquerdo e clique no botão "Criptografar"'
            },
            error: {
                titulo: 'Verifique o parágrafo e tente novamente',
                parrafo: 'Porque contém letras maiúsculas ou caracteres especiais.'
            }
        },
    };

    // Almacenando los selectores en variables
    logo = document.getElementById('logo');
    h1 = document.getElementById('tituloPrincipal');
    botonesIdioma = document.querySelectorAll('.idioma');
    textoEntrada = document.getElementById('textoEntrada');
    imgPrecaucion = document.getElementById('imgPrecaucion');
    alerta = document.getElementById('textoPrecaucion');
    encriptar = document.getElementById('botonEncriptar');
    desencriptar = document.getElementById('botonDesncriptar');
    resultado = document.getElementById('resultado');
    textoSalida = document.getElementById('textoSalida');
    copiar = document.getElementById('botonCopiar');
    error = document.getElementById('error');
    imgError = document.getElementById('imgError');
    tituloError = document.getElementById('tituloError')
    parrafoError = document.getElementById('parrafoError')
    developer = document.getElementById('desarrollador')
    year = document.getElementById('year')

    // Vacia la clase 'presionado' para que solo exista un botón en esta clase
    botonesIdioma.forEach(function(boton) {
        boton.classList.remove('presionado');
    });
    
    // Agrega el botón que fue presionado a la clase presionado
    botonPresionado.classList.add('presionado');

    // En caso de que el idioma seleccionado sea español
    if (idioma === 'es'){
        document.title = 'Encriptador de Texto Web | Challenge ONE';
        logo.alt = 'Logo de Alura, es una "a" minúscula de color azul oscuro';
        h1.textContent = 'Encriptador de Texto Web | Challenge ONE';
        textoEntrada.placeholder = 'Ingrese el texto aquí';
        imgPrecaucion.alt = 'Pequeño círculo con símbolo de exclamación centrado.';
        alerta.textContent = 'Solo letras minúsculas y sin acentos';
        encriptar.textContent = 'Encriptar';
        desencriptar.textContent = 'Desencriptar';
        textoSalida.placeholder = 'Visualización del resultado';

        if (copiar.textContent === 'Copied Text!' || copiar.textContent === 'Texto Copiado!') {
            copiar.textContent = 'Texto Copiado!';
        }
        else {
            copiar.textContent = 'Copiar';
        }
        
        imgError.alt = 'Imagen de una mujer tratando de encontrar un diamante.';

        if (tituloError.textContent === mensajeUsuario.en.error.titulo || tituloError.textContent === mensajeUsuario.pt.error.titulo) {
            tituloError.textContent = mensajeUsuario.es.error.titulo;
        }
        else {
            tituloError.textContent = mensajeUsuario.es.normal.titulo;
        }
        
        if (parrafoError.textContent === mensajeUsuario.en.error.parrafo || parrafoError.textContent === mensajeUsuario.pt.error.parrafo) {
            parrafoError.textContent = mensajeUsuario.es.error.parrafo;
        }
        else {
            parrafoError.textContent = mensajeUsuario.es.normal.parrafo;
        }
        
        developer.innerHTML = '<b>Desarrollado por:</b> Luis Mario Bonilla Madera';
        year.innerHTML = '<b>Año:</b> 2024';        
    }

    // En caso de que el idioma seleccionado sea inglés
    else if (idioma === 'en'){
        document.title = 'Web Text Encryptor | Challenge ONE';
        logo.alt = 'Alura logo, it is a dark blue lowercase "a"';
        h1.textContent = 'Web Text Encryptor | Challenge ONE';
        textoEntrada.placeholder = 'Enter text here';
        imgPrecaucion.alt = 'Small circle with centered exclamation symbol.';
        alerta.textContent = 'Only lowercase letters and no accents';
        encriptar.textContent = 'Encrypt';
        desencriptar.textContent = 'Decrypt';
        textoSalida.placeholder = 'Result display';

        if (copiar.textContent === 'Texto Copiado!') {
            copiar.textContent = 'Copied Text!';
        }
        else {
            copiar.textContent = 'Copy';
        }

        imgError.alt = 'Image of a woman trying to find a diamond.';

        if (tituloError.textContent === mensajeUsuario.es.error.titulo || tituloError.textContent === mensajeUsuario.pt.error.titulo) {
            tituloError.textContent = mensajeUsuario.en.error.titulo;
        }
        else {
            tituloError.textContent = mensajeUsuario.en.normal.titulo;
        }
        
        if (parrafoError.textContent === mensajeUsuario.es.error.parrafo || parrafoError.textContent === mensajeUsuario.pt.error.parrafo) {
            parrafoError.textContent = mensajeUsuario.en.error.parrafo;
        }
        else {
            parrafoError.textContent = mensajeUsuario.en.normal.parrafo;
        }


        developer.innerHTML = '<b>Developed by:</b> Luis Mario Bonilla Madera';
        year.innerHTML = '<b>Year:</b> 2024';        
    }

    // En caso de que el idioma seleccionado sea portugués
    else if (idioma === 'pt'){
        document.title = 'Criptografador de texto da Web | Desafie ONE';
        logo.alt = 'Logotipo da Alura, é um "a" minúsculo em azul escuro';
        h1.textContent = 'Criptografador de texto da Web | Desafie ONE';
        textoEntrada.placeholder = 'Insira o texto aqui';
        imgPrecaucion.alt = 'Círculo pequeno com símbolo de exclamação centralizado.';
        alerta.textContent = 'Apenas letras minúsculas e sem acentos';
        encriptar.textContent = 'Criptografar';
        desencriptar.textContent = 'Descriptografar';
        textoSalida.placeholder = 'Exibição de resultados';

        if (copiar.textContent === 'Copied Text!' || copiar.textContent === 'Texto Copiado!') {
            copiar.textContent = 'Texto Copiado!';
        }
        else {
            copiar.textContent = 'Cópia de';
        }
        
        imgError.alt = 'Imagem de uma mulher tentando encontrar um diamante.';
        
        if (tituloError.textContent === mensajeUsuario.es.error.titulo || tituloError.textContent === mensajeUsuario.en.error.titulo) {
            tituloError.textContent = mensajeUsuario.pt.error.titulo;
        }
        else {
            tituloError.textContent = mensajeUsuario.pt.normal.titulo;
        }

        if (parrafoError.textContent === mensajeUsuario.es.error.parrafo || parrafoError.textContent === mensajeUsuario.en.error.parrafo) {
            parrafoError.textContent = mensajeUsuario.pt.error.parrafo;
        }
        else {
            parrafoError.textContent = mensajeUsuario.pt.normal.parrafo;
        }

        
        developer.innerHTML = '<b>Desenvolvido por:</b> Luis Mario Bonilla Madera';
        year.innerHTML = '<b>Ano:</b> 2024';        
    }
}

// Función para almacenar la informacion del textarea de visualización en el portapapeles
function copiarPortapapeles() {   
    textoSalida.select()
    
    document.execCommand('copy')
    
    textoSalida.setSelectionRange(0, 0);

    if (idioma === 'es' || idioma === 'pt'){
        copiar.textContent = 'Texto Copiado!'
    }
    else if (idioma === 'en'){
        copiar.textContent = 'Copied Text!'
    }

    setTimeout(() => {
        if (idioma === 'es') {
            copiar.textContent = 'Copiar';
        }
        else if (idioma === 'en') {
            copiar.textContent = 'Copy';
        }
        else if (idioma === 'pt'){
            copiar.textContent = 'Cópia de';
        }
    }, 1000); 
}

// Función para verificar que el texto solo tenga letras minúsculas del diccionario inglés (es decir no se incluirá la ñ), espacios en blanco o saltos de líneas
function validar(texto) {
    // Expresión regular para verificar si el texto contiene solo letras minúsculas, espacios y saltos de línea
    let expresionRegular = /^[a-z\s\n]+$/;
    /* 'a-z' --> diccionario inglés en minúsculas */
    /* '\s' --> espacio en blanco */
    /* '\n' --> salto de línea */
  
    // Verificar si el párrafo contiene solo letras minúsculas, espacios y saltos de línea, de ser así devuelve true, de lo contrario false
    return expresionRegular.test(texto);
}
  
/* ADAPTAR PARA LA ENCRIPTACION */
function encriptarMensaje() {
    let textoEncriptar = textoEntrada.value;
    let textoEncriptado = '';

    if (validar(textoEncriptar) === true){
        //console.log('true')

        // Crear una expresion regular, donde se obtienen las claves del diccionario 'palabrasReemplazar'
        let claves = new RegExp(Object.keys(palabrasReemplazar).join("|"), "gi");

        // Función para obtener el valor dependiendo la clave del diccionario 'palabrasReemplazar'
        function valor(match) {
            return palabrasReemplazar[match.toLowerCase()];
        }

        // Se realiza el remplazo en el texto de la variable 'textoEncriptar'
        textoEncriptado = textoEncriptar.replace(claves, valor)

        //console.log('\nTexto Encriptado:', textoEncriptado)

        // Muestra el resultado de la encriptación al usuario
        textoSalida.textContent = textoEncriptado;
        
        error.style.display = 'none'; // Ocultar el error
        resultado.style.display = 'flex'; // Mostrar el resultado
    }
    else {
        //console.log('false')

        if (idioma === 'es') {
            tituloError.textContent = mensajeUsuario.es.error.titulo;
            parrafoError.textContent = mensajeUsuario.es.error.parrafo;
        } 
        else if (idioma === 'en') {
            tituloError.textContent = mensajeUsuario.en.error.titulo;
            parrafoError.textContent = mensajeUsuario.en.error.parrafo;
        }
        else if (idioma === 'pt') {
            tituloError.textContent = mensajeUsuario.pt.error.titulo;
            parrafoError.textContent = mensajeUsuario.pt.error.parrafo;
        }

        resultado.style.display = 'none'; // Ocultar el resultado
        error.style.display = 'flex'; // Mostrar el error
    }
}

/* ADAPTAR PARA LA DESENCRIPTACION */
function desencriptarMensaje() {
    let textoDesencriptar = textoEntrada.value;
    let textoDesencriptado = '';


    if (validar(textoDesencriptar) === true){
        // Se invierte el diccionario 'palabrasReemplazar' para que las claves sean los valores y viceversa
        const palabrasReemplazarInvertidas = {};
        for (let clave in palabrasReemplazar) {
            const valor = palabrasReemplazar[clave];
            palabrasReemplazarInvertidas[valor] = clave;
        }
    
        //console.log('Diccionario "palabrasReemplazar":', palabrasReemplazar)
        //console.log('Diccionario "palabrasReemplazarInvertidas":', palabrasReemplazarInvertidas)
    
    
        // Crear una expresion regular, donde se obtienen las claves del diccionario 'palabrasReemplazarInvertidas'
        let claves = new RegExp(Object.keys(palabrasReemplazarInvertidas).join("|"), "gi");
        
        // Función para obtener el valor dependiendo la clave del diccionario 'palabrasReemplazarInvertidas'
        function valor(match) {
            return palabrasReemplazarInvertidas[match.toLowerCase()];
        }
        
        // Se realiza el remplazo en el texto de la variable 'textoEncriptar'
        textoDesencriptado = textoDesencriptar.replace(claves, valor);
        //console.log('\nTexto Desencriptado:', textoDesencriptado);
    
        // Muestra el resultado de la desencriptación al usuario
        textoSalida.textContent = textoDesencriptado;
        
        error.style.display = 'none'; // Ocultar el error
        resultado.style.display = 'flex'; // Mostrar el resultado
    }
    else {
        //console.log('false')

        if (idioma === 'es') {
            tituloError.textContent = mensajeUsuario.es.error.titulo;
            parrafoError.textContent = mensajeUsuario.es.error.parrafo;
        } 
        else if (idioma === 'en') {
            tituloError.textContent = mensajeUsuario.en.error.titulo;
            parrafoError.textContent = mensajeUsuario.en.error.parrafo;
        }
        else if (idioma === 'pt') {
            tituloError.textContent = mensajeUsuario.pt.error.titulo;
            parrafoError.textContent = mensajeUsuario.pt.error.parrafo;
        }

        resultado.style.display = 'none'; // Ocultar el resultado
        error.style.display = 'flex'; // Mostrar el error
    }
}

// Función que calcula el tamaño que debe tener los textarea sin importar la altura del monitor (Solo Desktop)
function textareaResize() {
    header = document.querySelector('header');
    headerStyles = getComputedStyle(header);
    let headerHeight;
    let headerMarginTop;
    let headerMarginBottom;
    let headerTotalHeight;
    
    interacionUsuario = document.getElementById('interacionUsuario')
    interacionUsuarioStyles = getComputedStyle(interacionUsuario);
    let interacionUsuarioHeight;
    let interacionUsuarioMarginTop;
    let interacionUsuarioMarginBottom;
    let interacionUsuarioTotalHeight;
    
    textoEntradaHeight = textoEntrada.getBoundingClientRect().height;
    let textoEntradaMarginTop;
    let textoEntradaMarginBottom;
    let textoEntradaTotalHeight;
    

    encriptarStyles = getComputedStyle(encriptar);
    encriptarHeight = encriptar.getBoundingClientRect().height;
    let encriptarMarginTop;
    let encriptarMarginBottom;
    let encriptarTotalHeight;
    
    let textoEntradaGap;

    footer = document.querySelector('footer');
    footerStyles = getComputedStyle(footer);
    let footerHeight;
    let footerMarginTop;
    let footerMarginBottom;
    let footerTotalHeight;
    
    // Verificar si el header está oculto
    if (headerStyles.display !== 'none') {
        headerHeight = header.getBoundingClientRect().height;
        headerMarginTop = parseFloat(window.getComputedStyle(header).marginTop);
        headerMarginBottom = parseFloat(window.getComputedStyle(header).marginBottom);
        headerTotalHeight = headerHeight + headerMarginTop + headerMarginBottom;
        
        //console.log(`\nEl alto del header es ${headerHeight}, el margen superior es ${headerMarginTop}, el margen inferior es ${headerMarginBottom}. Para dar un total de ${headerTotalHeight}`)
    } else {
        headerHeight = 0;
        headerMarginTop = 0;
        headerMarginBottom = 0;
        headerTotalHeight = 0;
        
        //console.log('El header está oculto, los márgenes son cero.');
    }
    
    // Verificar si el articulo 'interacionUsuario' está oculto
    if (interacionUsuarioStyles.display !== 'none') {
        interacionUsuarioHeight = interacionUsuario.getBoundingClientRect().height;
        interacionUsuarioMarginTop = parseFloat(window.getComputedStyle(interacionUsuario).marginTop);
        interacionUsuarioMarginBottom = parseFloat(window.getComputedStyle(interacionUsuario).marginBottom);
        interacionUsuarioTotalHeight = interacionUsuarioHeight + interacionUsuarioMarginTop + interacionUsuarioMarginBottom;
        
        //console.log(`\nEl alto del articulo 'interacionUsuario' es ${interacionUsuarioHeight}, el margen superior es ${interacionUsuarioMarginTop}, el margen inferior es ${interacionUsuarioMarginBottom}. Para dar un total de ${interacionUsuarioTotalHeight}`)
    } else {
        interacionUsuarioHeight = 0;
        interacionUsuarioMarginTop = 0;
        interacionUsuarioMarginBottom = 0;
        interacionUsuarioTotalHeight = 0;
            
        //console.log('El articulo "interacionUsuario" está oculto, los márgenes son cero.');
    }
    
    // Verificar si el boton 'encriptar' está oculto
    if (encriptarStyles.display !== 'none') {
        encriptarMarginTop = parseFloat(window.getComputedStyle(encriptar).marginTop);
        encriptarMarginBottom = parseFloat(window.getComputedStyle(encriptar).marginBottom);
        encriptarTotalHeight = encriptarHeight + encriptarMarginTop + encriptarMarginBottom;
        
        //console.log(`\nEl alto del boton 'encriptar' es ${encriptarHeight}, el margen superior es ${encriptarMarginTop}, el margen inferior es ${encriptarMarginBottom}. Para dar un total de ${encriptarTotalHeight}`)
    } else {
        encriptarMarginTop = 0;
        encriptarMarginBottom = 0;
        encriptarTotalHeight = 0;
    
        //console.log('El boton 'encriptar' está oculto, los márgenes son cero.');
    }
    
    // Verificar si el textoEntrada está oculto
    if (window.getComputedStyle(textoEntrada).display !== 'none') {
        textoEntradaMarginTop = parseFloat(window.getComputedStyle(textoEntrada).marginTop);
        textoEntradaMarginBottom = parseFloat(window.getComputedStyle(textoEntrada).marginBottom);
        textoEntradaTotalHeight = textoEntradaHeight + textoEntradaMarginTop + textoEntradaMarginBottom;
        
        //console.log(`El alto del textarea 'textoEntrada' es ${textoEntradaHeight}px, el margen superior es ${textoEntradaMarginTop}px, el margen inferior es ${textoEntradaMarginBottom}px. Para dar un total de ${textoEntradaTotalHeight}px.`);
    } else {
        textoEntradaMarginTop = 0;
        textoEntradaMarginBottom = 0;
        textoEntradaTotalHeight = 0;
        textoEntradaGap = 0;
    
        //console.log('El textarea 'textoEntrada' está oculto.');
    }

    // Verificar si el footer está oculto
    if (footerStyles.display !== 'none') {
        footerHeight = footer.getBoundingClientRect().height;
        footerMarginTop = parseFloat(window.getComputedStyle(footer).marginTop);
        footerMarginBottom = parseFloat(window.getComputedStyle(footer).marginBottom);
        footerTotalHeight = footerHeight + footerMarginTop + footerMarginBottom;
        
        //console.log(`\nEl alto del footer es ${footerHeight}, el margen superior es ${footerMarginTop}, el margen inferior es ${footerMarginBottom}. Para dar un total de ${footerTotalHeight}`)
    } else {
        footerHeight = 0;
        footerMarginTop = 0;
        footerMarginBottom = 0;
        footerTotalHeight = 0;
    
        //console.log('El footer está oculto, los márgenes son cero.');
    }
    
    // Verificar si algunos de los elementos del articulo 'interacionUsuario' está oculto
    if (interacionUsuarioStyles.display !== 'none' && encriptarStyles.display !== 'none' && window.getComputedStyle(textoEntrada).display !== 'none'){
        textoEntradaGap = interacionUsuarioHeight - textoEntradaHeight - encriptarHeight;
        
        //console.log(`\nEl gap del articulo 'interacionUsuario' es: ${textoEntradaGap}px`)
    }
    else {
        textoEntradaGap = 0;
        
        //console.log('El articulo "interacionUsuario", el boton "encriptar" y el textarea "textoEntrada" estan oculto, el gap del articulo "interacionUsuario" es cero.');
    }

    // Selecciona todos los elementos <textarea> del documento
    const textareas = document.querySelectorAll('textarea');

    // Variable con la sumatoria de todas las alturas de los elementos de la página menos la del propio <textarea>
    const newtextoEntradaHeight = headerTotalHeight + headerMarginTop + footerTotalHeight + (interacionUsuarioMarginTop * 2) + interacionUsuarioMarginBottom + textoEntradaGap + encriptarTotalHeight;


    // Itera sobre cada elemento <textarea>
    textareas.forEach(textarea => {
        // Aplica una nueva altura al textarea
        textarea.style.height = `calc(100vh - ${newtextoEntradaHeight}px)`;
    });
    
    //console.log(`Altura de los elementos de la página menos la del textarea 'textoEntrada': ${newtextoEntradaHeight}`)
    //console.log(`header: ${headerTotalHeight} \n-\n footer: ${footerTotalHeight} \n-\n interacionUsuarioTop: ${interacionUsuarioMarginTop} \n-\n interacionUsuarioBottom: ${interacionUsuarioMarginBottom} \n-\n textoEntradaGap: ${textoEntradaGap} \n-\n encriptar: ${encriptarTotalHeight}`)
}