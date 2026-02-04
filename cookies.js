window.onload = function () {
  const banner = document.getElementById("cookie-banner");
  const button = document.getElementById("accept-cookies");

  // Jeśli zaakceptowane wcześniej
  if (localStorage.getItem("cookiesAccepted") === "true") {
    banner.style.display = "none";
  }

  // Kliknięcie akceptacji
  button.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  });
};
