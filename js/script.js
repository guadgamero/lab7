function init(){
  var click = document.getElementById('entrybutton');
  
  function anotherFunction() {
    function change(){
      m = document.getElementById('textoutput');
      m.innerHTML = entryinput.value;
    }
  var x = document.getElementById('entryinput');
  alert('Guad Gamero:' + entryinput.value);
  x.addEventListener('onclick', change);
  }
  
  click.addEventListener('click', anotherFunction);
  }

window.addEventListener('load', init);