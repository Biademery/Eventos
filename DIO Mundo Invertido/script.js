function switchTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  const theme = document.body.classList[0];
  const music = theme === "light-theme" ? "normal-world.mpeg" : "inverted-world.mpeg";
}
