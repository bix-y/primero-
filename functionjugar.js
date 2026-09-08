function jugar(eleccionUsuario) {
  const opciones = ['piedra', 'papel', 'tijeras'];
  const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

  let resultado = '';

  if (eleccionUsuario === eleccionComputadora) {
    resultado = 'Empate 🤷🏼‍♀️';
  } else if (
    (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijeras') ||
    (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
    (eleccionUsuario === 'tijeras' && eleccionComputadora === 'papel')
  ) {
    resultado = '¡Ganaste! 😺👍🏼';
  } else {
    resultado = 'Perdiste 😿';
  }

  document.getElementById("resultado").innerHTML =
    `Tú elegiste: <b>${eleccionUsuario}</b><br>` +
    `La computadora eligió: <b>${eleccionComputadora}</b><br>` +
    `Resultado: <span style="color:blue">${resultado}</span>`;
}
