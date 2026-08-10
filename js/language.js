document.addEventListener("DOMContentLoaded", () => {
  const languageButtons = document.querySelectorAll(".language-option");

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      languageButtons.forEach((btn) => {
        btn.classList.remove("is-active");
      });

      button.classList.add("is-active");

      const selectedLanguage = button.dataset.lang;

      console.log("Selected language:", selectedLanguage);
    });
  });
});
