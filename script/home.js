function changeColorMode(button) {
  document.body.classList.toggle("darkmode");
  document.querySelector("button").classList.toggle("darkmode");
  let content = button.innerHTML;
  button.innerHTML =
    content == '<i class="fa-solid fa-moon"></i>'
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
}

