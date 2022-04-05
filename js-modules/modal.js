export default function initModal() {
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const tela = document.querySelector('[data-modal="container"]');
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');

  if (botaoFechar && tela && botaoAbrir) {
    function toggleModal(event) {
      event.preventDefault();
      tela.classList.toggle("ativo");
    }

    function cliqueExterno(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoFechar.addEventListener("click", toggleModal);
    tela.addEventListener("click", cliqueExterno);
    botaoAbrir.addEventListener("click", toggleModal);
  }
}
