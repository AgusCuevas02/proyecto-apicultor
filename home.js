document.addEventListener('DOMContentLoaded', function() {

    const datosApicultura = [
        "Una abeja reina puede poner hasta 2,000 huevos al día.",
        "Las abejas se comunican entre ellas bailando. ¡La 'danza del meneo'!",
        "Para producir un kilo de miel, las abejas deben visitar 4 millones de flores.",
        "Las abejas obreras son todas hembras.",
        "Los zánganos (machos) no tienen aguijón; su único trabajo es la reproducción.",
        "La miel nunca caduca. Se ha encontrado miel comestible en tumbas egipcias de 3000 años.",
        "Una abeja produce solo 1/12 de cucharadita de miel en toda su vida.",
        "Las alas de una abeja baten 200 veces por segundo.",
        "El cerebro de una abeja es ovalado y del tamaño de una semilla de sésamo, ¡pero muy inteligente!",
        "Las abejas no ven el color rojo, pero pueden ver luz ultravioleta (invisible para nosotros).",
        "Solo las abejas hembra pueden picar (porque el aguijón es un ovipositor modificado).",
        "Para hacer 1kg de cera, las abejas necesitan consumir unos 8kg de miel.",
        "El interior de una colmena se mantiene siempre a unos 35°C, haga frío o calor afuera."
    ];

    //Seleccionar los elementos del DOM
    const datoTexto = document.getElementById('dato-texto');
    const otroDatoBtn = document.getElementById('otro-dato-btn');

    //Función para mostrar un dato aleatorio
    function mostrarDatoRandom() {
        const index = Math.floor(Math.random() * datosApicultura.length);

        datoTexto.textContent = datosApicultura[index];

    }   
    mostrarDatoRandom();
    otroDatoBtn.addEventListener('click', mostrarDatoRandom); 


    //Sobres con contraseñas
    const contraseñas= {
        'sobre-1': '17-11',
        'sobre-2': '14-04',
        'sobre-3': '10-11',
    }
    const sobres= document.querySelectorAll('.timeline-sobre');
    // 3. Recorrer cada sobre y añadirle un evento de clic
    sobres.forEach(sobre => {
        sobre.addEventListener('click', function() {
            
            // El ID del sobre que se clickeó (ej: "sobre-1")
            const sobreId = this.id; 
            
            // El ID del contenido oculto (ej: "contenido-1")
            const contenidoId = sobreId.replace('sobre', 'contenido');
            
            // El elemento de contenido que queremos mostrar
            const contenido = document.getElementById(contenidoId);

            // Preguntar la contraseña usando un "prompt" (la ventana emergente)
            const passUsuario = prompt('¿Cuál es la contraseña de este recuerdo?');

            // 4. Comprobar si la contraseña es correcta
            if (passUsuario === contraseñas[sobreId]) {
                // ¡Correcto! Mostramos el contenido
                contenido.classList.add('abierto');
                
            } else if (passUsuario !== null) { // Si el usuario escribió algo (y no le dio a "cancelar")
                // ¡Incorrecto!
                alert('Contraseña incorrecta. ¡Intenta recordar!');
            }
        });
    });
    // --- Parte 3: METÁFORAS DE AMOR (NUEVO) ---

    
    const metaforasAmor = [
        
        {
            dato: "Las abejas usan propóleo para sellar grietas y fortalecer su hogar.",
            mensaje: "Nosotros somos los arquitectos de nuestro propio panal, sellando los malos momentos y construyendo una estructura sólida juntos."
        },
        {
            dato: "La miel es el único alimento natural que nunca caduca.",
            mensaje: "Espero que lo nuestro tenga esa misma propiedad: que pasen los años y siga siendo igual de dulce y eterno."
        },
        {
            dato: "Para 1kg de miel, las abejas vuelan el equivalente a 4 vueltas al mundo.",
            mensaje: "No importa la distancia que tenga que recorrer, cualquier esfuerzo vale la pena si el resultado es estar contigo."
        },
        {
            dato: "Las abejas se comunican bailando para decir dónde están las flores.",
            mensaje: "Vos sos para mi como las flores para las abejas, no importa dónde estés, siempre sabré encontrar el camino hacia ti."
        }
    ];

    // 2. Seleccionar los elementos del DOM
    const metaforaTexto = document.getElementById('metafora-texto');
    const btnMetafora = document.getElementById('otra-metafora-btn');

    // 3. Función para mostrar metáfora random
    function mostrarMetafora() {
        const index = Math.floor(Math.random() * metaforasAmor.length);
        const seleccion = metaforasAmor[index];
        
        // Usamos HTML dentro del texto para poner negrita (<b>) y saltos de línea (<br>)
        metaforaTexto.innerHTML = `
            <span style="font-size: 0.9em; color: #666;">🐝 <i>${seleccion.dato}</i></span>
            <br><br>
            <b style="color: #EAA000;">${seleccion.mensaje}</b>
        `;
    }

    // 4. Inicializar
    mostrarMetafora();
    btnMetafora.addEventListener('click', mostrarMetafora);
});