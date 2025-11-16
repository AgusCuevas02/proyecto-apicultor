//Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('error-message');  

    //definir contraseña correcta
    const MASTER_PASSWORD = 'destinoocasualidad';
    //Escuchador del botón de login
    loginButton.addEventListener('click', function() {

        //Obtiene el valor del input de contraseña
        const passValue = passwordInput.value;
        //Verifica si la contraseña es correcta
        if (passValue === MASTER_PASSWORD) {

            window.location.href = 'home.html'; //Redirige a main.html
        } else {
            errorMessage.textContent = 'Esa no es... intenta de nuevo.';
            passwordInput.style.borderColor = 'red';
            
            // ¡Añadimos la clase para temblar!
            passwordInput.classList.add('shake');

            // Importante: removemos la clase después de la animación
            // para que pueda temblar de nuevo si se vuelve a equivocar.
            setTimeout(() => {
                passwordInput.classList.remove('shake');
            }, 300);
        }
    });
});