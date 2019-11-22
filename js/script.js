function init(){
  var click = document.getElementById('entrybutton');
  
  function anotherFunction() {
    var x = document.getElementById('entryinput');
    alert('Guad Gamero: ' + entryinput.value);
    x.addEventListener('onclick', change);
    document.getElementById('textoutput').innerHTML = entryinput.value;
  }
  
  click.addEventListener('click', anotherFunction);
  }

window.addEventListener('load', init);