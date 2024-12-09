// Selecciona los elementos
const imagenInteraccion2 = document.querySelector('.tran2'); // Imagen de interacción 2
const emmaCamina = document.querySelector('.emma_camina'); // Imagen de emma-camina

// Agrega un evento de clic a la imagen de interacción 2
imagenInteraccion2.addEventListener('click', () => {
    // Mueve la imagen de emma-camina unos pixeles a la derecha
    emmaCamina.style.transform = 'translateX(1600px)'; // Cambia la cantidad de píxeles según lo que necesites
});
