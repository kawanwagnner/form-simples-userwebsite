document.getElementById("logarBtn").addEventListener("click", function () {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "flex";

  // Esconde o overlay após 5 segundos (5000 milissegundos)
  setTimeout(function () {
    overlay.style.display = "none";
  }, 5000);
});

// Função para esconder o container e mostrar o botão de abrir
document.getElementById("closeBtn").addEventListener("click", function () {
  const loginContainer = document.getElementById("loginContainer");
  const openBtn = document.getElementById("openBtn");

  loginContainer.style.display = "none";
  openBtn.style.display = "block";
});

// Função para mostrar o container e esconder o botão de abrir
document.getElementById("openBtn").addEventListener("click", function () {
  const loginContainer = document.getElementById("loginContainer");
  const openBtn = document.getElementById("openBtn");

  loginContainer.style.display = "block";
  openBtn.style.display = "none";
});
