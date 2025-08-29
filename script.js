let tamanhoFonte = 16;

function aumentarFonte() {
  tamanhoFonte += 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
  if (tamanhoFonte > 10) {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  }
}

function resetFonte() {
  tamanhoFonte = 16;
  document.body.style.fontSize = tamanhoFonte + "px";
}

document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.getElementById('btn-menu');
  const menuLateral = document.querySelector('nav.menu-lateral');
  const mainContent = document.querySelector('main');

  btnMenu.addEventListener('click', () => {
    const aberto = menuLateral.classList.toggle('open');
    if (aberto) {
      mainContent.classList.add('menu-open');
      btnMenu.textContent = 'Fechar';
      btnMenu.setAttribute('aria-label', 'Fechar menu');
    } else {
      mainContent.classList.remove('menu-open');
      btnMenu.textContent = 'Menu';
      btnMenu.setAttribute('aria-label', 'Abrir menu');
    }
  });
});
