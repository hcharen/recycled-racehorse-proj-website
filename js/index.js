//DEM GLOBALS


var whiteObj = document.getElementById(whiteDiv);

function init() {

  whiteObj = document.getElementById(whiteDiv);
  whiteDiv.style.height = '0px';
  dropDown();
}

function dropDown() {
  if(whiteObj.style.height < '400px') {
    whiteObj.style.height = parseInt(whiteObj.style.height) + 1 + 'px';
    init();
  }
}

window.onload = init;
