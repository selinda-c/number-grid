window.onload = function(){
  // clear backgroundColor of composite numbers
  document.querySelector('button#prime').onclick = function(){
    document.getElementById('n1').style.backgroundColor = null;
    document.getElementById('n4').style.backgroundColor = null;
    document.getElementById('n6').style.backgroundColor = null;
    document.getElementById('n8').style.backgroundColor = null;
    document.getElementById('n9').style.backgroundColor = null;
    document.getElementById('n10').style.backgroundColor = null;
    // highlights prime nums
    document.getElementById('n2').style.backgroundColor = 'pink';
    document.getElementById('n3').style.backgroundColor = 'pink';
    document.getElementById('n5').style.backgroundColor = 'pink';
    document.getElementById('n7').style.backgroundColor = 'pink';
  };
  // start of click for composite nums
  document.querySelector('button#composite').onclick = function(){
    document.getElementById('n1').style.backgroundColor = null;
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
  //click for odd numbers
  document.querySelector('button#odd').onclick = function(){
    document.getElementById('n2').style.backgroundColor = null;
    document.getElementById('n4').style.backgroundColor = null;
    document.getElementById('n6').style.backgroundColor = null;
    document.getElementById('n8').style.backgroundColor = null;
    document.getElementById('n9').style.backgroundColor = null;
    document.getElementById('n10').style.backgroundColor = null;
    //highlights odd nums
    document.getElementById('n1').style.backgroundColor = 'grey';
    document.getElementById('n3').style.backgroundColor = 'grey';
    document.getElementById('n5').style.backgroundColor = 'grey';
    document.getElementById('n7').style.backgroundColor = 'grey';
    document.getElementById('n9').style.backgroundColor = 'grey';
  }
  // click for even numbers
  document.querySelector('button#even').onclick = function(){
    document.getElementById('n1').style.backgroundColor = null;
    document.getElementById('n3').style.backgroundColor = null;
    document.getElementById('n5').style.backgroundColor = null;
    document.getElementById('n7').style.backgroundColor = null;
    document.getElementById('n9').style.backgroundColor = null;
    // highlight even nums
    document.getElementById('n2').style.backgroundColor = 'yellow';
    document.getElementById('n4').style.backgroundColor = 'yellow';
    document.getElementById('n6').style.backgroundColor = 'yellow';
    document.getElementById('n8').style.backgroundColor = 'yellow';
    document.getElementById('n10').style.backgroundColor = 'yellow';
  }
};