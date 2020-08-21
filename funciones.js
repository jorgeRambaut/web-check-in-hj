document.querySelector('#siguiente-paso').onclick = function(event) {
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
  const cantidadIntegrantes = Number($cantidadIntegrantes.value);

  borrarIntegrantesAnteriores();
  crearIntegrantes(cantidadIntegrantes);

  //event.preventDefault();
};


function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll('.integrante');
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function crearIntegrantes(cantidadIntegrantes) {

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement('div');
  $div.className = 'form-row';

  const $labelapellido = document.createElement('label');
  $labelapellido.textContent = 'Apellido del Acompañante #: ' + (indice + 1);
  const $inputapellido = document.createElement('input');
  $inputapellido.type = 'text';

  const $labelnombre = document.createElement('label');
  $labelnombre.textContent = 'Nombre del Acompañante #: ' + (indice + 1);
  const $inputnombre = document.createElement('input');
  $inputnombre.type = 'text';

  const $labeldireccion = document.createElement('label');
  $labeldireccion.textContent = 'Domicilio del Acompañante #: ' + (indice + 1);
  const $inputdireccion = document.createElement('input');
  $inputdireccion.type = 'text';

  const $labelciudad = document.createElement('label');
  $labelciudad.textContent = 'Ciudad del Acompañante #: ' + (indice + 1);
  const $inputciudad = document.createElement('input');
  $inputciudad.type = 'text';

  const $labelprovincia = document.createElement('label');
  $labelprovincia.textContent = 'Provincia del Acompañante #: ' + (indice + 1);
  const $inputprovincia= document.createElement('input');
  $inputprovincia.type = 'text';


  $div.appendChild($labelapellido);
  $div.appendChild($inputapellido);
  $div.appendChild($labelnombre);
  $div.appendChild($inputnombre);
  $div.appendChild($labeldireccion);
  $div.appendChild($inputdireccion);
  $div.appendChild($labelciudad);
  $div.appendChild($inputciudad);
  $div.appendChild($labelprovincia);
  $div.appendChild($inputprovincia);

  const $integrantes = document.querySelector('#integrantes');
  $integrantes.appendChild($div);





}
