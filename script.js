// A function mostrarLink() é ativada qaundo é clicado nos links da navbar, ao clicar na section selecionada,o funcionamento dela é, quando clicado na section, adiciona o "active" com o método do classList.add, e remove das outras com o laço forEach, com o CSS as sections que estão sem o active, ficam com o "display: none"
function mostrarLink(id) {
  const section = window.document.querySelectorAll(".section");
  section.forEach((section) => {
    section.classList.remove("active");
  });
  const sectionSelecionada = window.document.getElementById(id);
  sectionSelecionada.classList.add("active");
}
