var setting = document.querySelector("#setting");
var img2 = document.querySelector("#image2");
var img3 = document.querySelector("#image3");

function setting_clicked() {
  setting.style.left = "23%";
  setting.style.top = "30%";
  img2.style.left = "-4%";
  img2.style.top = "70%";
  img3.style.left = "-4%";
  img3.style.top = "-4%";

  // $("#Setting-Page").fadeIn();
}

function f2() {
  setting.style.left = "-4%";
  setting.style.top = "-4%";
  img2.style.left = "23%";
  img2.style.top = "30%";
  img3.style.left = "-4%";

  img3.style.top = "70%";

  // $("#Setting-Page").fadeOut();
}

function f3() {
  img2.style.left = "-4%";
  img2.style.top = "-4%";
  img3.style.left = "23%";
  img3.style.top = "30%";
  setting.style.left = "-4%";
  setting.style.top = "70%";
  // $("#page2").fadeIn();
}
setting.addEventListener("click", setting_clicked);
img2.addEventListener("click", f2);
img3.addEventListener("click", f3);
