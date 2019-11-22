function init(){
  var y = document.getElementById('entrybutton');
  
  function anotherFunction() {
  var x = document.getElementById('entrybutton');
  alert('Guad Gamero:');
  }
  
  y.addEventListener('click', anotherFunction);
  }

window.addEventListener('load', init);