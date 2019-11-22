function init(){
  var click = document.getElementById('entrybutton');
  
  function anotherFunction() {
    function change(){
      m = document.getElementById('textoutput').innerHTML;
    }
  var x = document.getElementById('entryinput');
  alert('Guad Gamero: ' + m.value);
  x.addEventListener('click', change);
  }
  
  click.addEventListener('click', anotherFunction);
  }

window.addEventListener('load', init);