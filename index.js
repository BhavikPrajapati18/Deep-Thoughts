function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const rect = document.querySelector(".Rectangle");
  const on = document.querySelector(".one");

  sidebar.classList.toggle("active");
  rect.classList.toggle("active");
  on.classList.toggle("active");
}

function photochange() {
  var image = document.querySelector(".sidebar-arrow");
  if (image.src.includes("imgaes/sidebar-arrow2.png")) {
    image.src = "imgaes/sidebar-arrow.png";
  } else {
    image.src = "imgaes/sidebar-arrow2.png";
  }
}
