document.addEventListener("DOMContentLoaded", function () {
  var inputs = document.querySelectorAll(".input");
  inputs.forEach(function (input) {
    var newSpan = document.createElement("span");
    newSpan.style.color = "red";
    newSpan.textContent = "*";
    newSpan.style.marginLeft = "-20px";
    input.insertAdjacentElement("afterend", newSpan);
  });
});
