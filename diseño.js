function mostrarLibros() {
  const lista = document.getElementById('listaLibros');
  lista.innerHTML = '';
  const libros = JSON.parse(localStorage.getItem('libros')) || [];

  libros.forEach(libro => {
    const div = document.createElement('div');
    div.className = 'card-libro';
    div.onclick = () => window.open(libro.link, '_blank');
    div.innerHTML = `
      <div style="font-size: 16px; font-weight: bold;">${libro.titulo}</div>
      <p>${libro.link}</p>
    `;
    lista.appendChild(div);
  });
}
