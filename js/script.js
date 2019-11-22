function init(){
  alert('Guad Gamero:');


var x = document.getElementById('entrybutton');
x.addEventListener('click', init);
x.addEventListener('click', function(){
  x.innerHTML = 'test';
}}  
  
  

window.addEventListener('load', init);