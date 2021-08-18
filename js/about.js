function init() {
  AOS.init();
  setTitleNavigation("About")
  setItemIndex()

  //
  var circle1 = document.querySelector(".circle01");
  var circle2 = document.querySelector(".circle02");

  console.log(circle1);
  collapse();
}

var items = document.querySelectorAll('.category>a');

function setTitleNavigation(currentPositionStr) {
  const PAGE_NAME = "Pyeong"
  var headerTitle = document.querySelector(".py");
  headerTitle.innerHTML = `${PAGE_NAME} > ${currentPositionStr}`;
}

function setItemIndex() {

  for (var i = 0; i < items.length; i++) {
    items[i].index = i;
    console.log(items[i]);
    items[i].addEventListener("click", function () {
      console.log(this.index);
      localStorage.setItem("index", `${this.index}`);
    });
  }
}

function collapse() {
  var collapseBtn = document.querySelector(".collapsible");

  collapseBtn.addEventListener("click", function() {
    var child = this.nextElementSibling;
    if(child.style.maxHeight) {
      child.style.maxHeight = null;
    } else {
      child.style.maxHeight = child.scrollHeight + "px";
    }
  });
}

// INIT FUNCTION
init();