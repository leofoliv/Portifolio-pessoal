function mostrarLink(id) {
  const section = window.document.querySelectorAll(".section");
  section.forEach((section) => {
    section.classList.remove("active");
  });
  const sectionSelecionada = window.document.getElementById(id);
  sectionSelecionada.classList.add("active");
}
