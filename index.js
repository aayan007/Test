document.getElementById("add").addEventListener("click", displayDate);
var toAdd = document.createDocumentFragment();

function displayDate() {
  var color = "#";
  var symbol = "0123456789ABCDEF";
  for (var i = 0; i < 6; i++) {
    color = color + symbol[Math.floor(Math.random() * 6) + 1];
  }

  var newDiv = document.createElement("div");
  newDiv.className = "ansbox";
  newDiv.style.backgroundColor = color;
  newDiv.addEventListener(
    "click",
    function () {
      newDiv.className = "display";
    },
    false
  );
  toAdd.appendChild(newDiv);

  document.getElementById("blockId").appendChild(toAdd);
}
