const theme_btn = document.querySelector("#dark-mode-btn");
const dark_theme = "dark-theme";
const icon_theme = "ri-sun-line";

const selected_theme = localStorage.getItem("selected-theme");
const selected_icon = localStorage.getItem("selected-icon");

function get_current_theme() {
  if (document.body.classList.contains(dark_theme)) {
    ("dark");
  } else {
    ("light");
  }
}

function get_current_icon() {
  if (document.body.classList.contains(icon_theme)) {
    ("ri-moon-line");
  } else {
    ("ri-sin-line");
  }
}

if (selected_theme) {
  document.body.classList[selected_icon === "dark" ? "add" : "remove"](
    dark_theme
  );
  theme_btn.classList[selected_icon === "ri-moon-line" ? "add" : "remove"](
    icon_theme
  );
}

theme_btn.addEventListener("click", function () {
  document.body.classList.toggle(dark_theme);
  theme_btn.classList.toggle(icon_theme);

  localStorage.setItem("selected-theme", get_current_theme());
  localStorage.setItem("selected-icon", get_current_icon());
});
