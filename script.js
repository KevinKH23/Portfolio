// === Typing Animation ===
var typed = new Typed("#typing-text", {
  strings: ["Programmer", "Front-End Developer", "Web Designer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// === Download Button ===
// Dapatkan referensi ke tombol unduhan
var downloadButton = document.getElementById("downloadBtn");

// Tambahkan event listener untuk mendeteksi klik tombol
downloadButton.addEventListener("click", function () {
  // Ganti URL di bawah dengan URL file PDF yang ingin Anda unduh
  var pdfUrl = "Resume Kevin Kurniawan Handoko.pdf";

  // Buat elemen anchor untuk menginisiasi unduhan
  var link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Resume Kevin Kurniawan Handoko.pdf"; // Nama file yang akan disimpan oleh pengguna
  link.target = "_blank"; // Untuk membuka link di jendela/tab baru jika diperlukan

  // Simulasikan klik pada link untuk memulai unduhan
  link.click();
});

// === Side Bar Menu ===
// Toggle class active
const navbarNav = document.querySelector(".navbar");

// Ketika hamburger menu di klik
document.querySelector("#burger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#burger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
