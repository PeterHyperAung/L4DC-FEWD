if (localStorage.getItem("firsttime") !== "false") {
  localStorage.setItem("firsttime", "false");
  showModal();
}

function showModal() {
  document.getElementById("first-modal").style.display = "block";
}

function hideModal() {
  document.getElementById("first-modal").style.display = "none";
}

const closeModalEl = document.getElementById("modal-close");
if (closeModalEl) {
  closeModalEl.addEventListener("click", hideModal);
}
