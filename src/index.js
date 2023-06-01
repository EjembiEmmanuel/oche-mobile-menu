import "./style.css";

export function showMenu(
  menuToggle,
  menuAnimation,
  closeBtn,
  closeBtnAnimation
) {
  menuToggle.style.display = "none";
  const menu = document.getElementById(`${menuToggle.dataset.toggle}`);
  menu.style.display = "flex";

  if (menuAnimation) {
    menu.classList.add(menuAnimation);
  }

  if (closeBtnAnimation) {
    setTimeout(() => {
      closeBtn.style.display = "flex";
      closeBtn.classList.add(closeBtnAnimation);
    }, "300");
  } else {
    closeBtn.style.display = "flex";
  }

  closeBtn.onclick = function () {
    this.style.display = "none";
    menu.style.display = "none";
    menuToggle.style.display = "flex";
  };
}
