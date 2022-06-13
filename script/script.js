window.onload = function(){
  // clear backgroundColor of composite numbers
  document.querySelector('button#prime').onclick = function(){
    document.getElementById('n4').style.backgroundColor = null;
    document.getElementById('n6').style.backgroundColor = null;
    document.getElementById('n8').style.backgroundColor = null;
    document.getElementById('n9').style.backgroundColor = null;
    document.getElementById('n10').style.backgroundColor = null;
    // turn on prime color backgrounds
    document.getElementById('n2').style.backgroundColor = 'pink';
    document.getElementById('n3').style.backgroundColor = 'pink';
    document.getElementById('n5').style.backgroundColor = 'pink';
    document.getElementById('n7').style.backgroundColor = 'pink';
  };
  // start of click for composite nums
  document.querySelector('button#composite').onclick = function(){
    document.getElementById('n2').style.backgroundColor = null;
    document.getElementById('n3').style.backgroundColor = null;
    document.getElementById('n5').style.backgroundColor = null;
    document.getElementById('n7').style.backgroundColor = null;
  // highlights composite numbers
    document.getElementById('n4').style.backgroundColor = 'lightgreen';
    document.getElementById('n6').style.backgroundColor = 'lightgreen';
    document.getElementById('n8').style.backgroundColor = 'lightgreen';
    document.getElementById('n9').style.backgroundColor = 'lightgreen';
    document.getElementById('n10').style.backgroundColor = 'lightgreen';
  };
};