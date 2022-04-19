let item = document.querySelectorAll(".product_item");

filterSelection("all");

function filterSelection(c) {
  if (c === "all") {
    c = "";
  }
  for (let i = 0; i < item.length; i++) {
    removeClass(item[i], "show");
    if (item[i].className.indexOf(c) > -1) {
      addClass(item[i], "show");
    }
  }
}

function addClass(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
