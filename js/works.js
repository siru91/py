function init() {
  setTitleNavigation("Works")
  setItemIndex()
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

// INIT FUNCTION
init();