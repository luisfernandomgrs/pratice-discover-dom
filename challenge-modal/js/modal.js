const buttonModal = document.getElementById("openModal");
let modalWrapper = document.querySelector(".modal-wrapper");

function onKeyPress(e) {
  if ((e.key === 'Escape') && !modalWrapper.classList.contains("invisible")) {
    modalWrapper.classList.add("invisible");
  }
}

buttonModal.addEventListener('click', (event) => {
  modalWrapper.classList.remove("invisible");
  document.addEventListener('keyup', onKeyPress);
})