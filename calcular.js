const cotizar = document.getElementById('cotizar');

function piso (){
    const ancho = parseInt(document.getElementById('ancho').value);
    const largo = parseInt(document.getElementById('largo').value);
    const resultadoM2 = document.getElementById('resultadoM2');

    if (ancho!== '' && largo!== '') {
          
        const valorPiso = (ancho * largo);

        resultadoM2.textContent = valorPiso;
       
    }
       
}

cotizar.addEventListener('click', piso);