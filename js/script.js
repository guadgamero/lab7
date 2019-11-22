function init(){
  var click = document.getElementById('entrybutton');
  
  function anotherFunction() {
  var x = document.getElementById('entryinput');
  alert('Guad Gamero:' + entryinput);
  }
  
  click.addEventListener('click', anotherFunction);
  }

window.addEventListener('load', init);